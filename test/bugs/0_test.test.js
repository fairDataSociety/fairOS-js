const {fakeUsers, apiAuth, apiNoAuth, getRandomPodName, getRandomUser} = require("../utils");
import {FormData, File, fileFromPathSync} from 'formdata-node';
import fs from 'fs';

test('Upload file', async () => {
    const user = getRandomUser();
    const podName = getRandomPodName();
    // const randomPodName = getRandomPodName();
    // const user = fakeUsers.dirUser;
    // const podName = fakeUsers.dirUser.podName;

    await apiNoAuth.userSignup(user.username, user.password);

    let data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podNew(podName, user.password)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('pod created successfully');

    // todo remove these two lines of workaround after bug fixed (isn't possible to upload file to new pod, you should relogin)
    await apiAuth.userLogin(user.username, user.password);
    await apiAuth.podOpen(podName, user.password);

    const formData = new FormData();
    const name = '1.bin';
    const testDir = '/test-dir';
    const fileName = `test/files/${name}`;
    const fileSize = fs.statSync(fileName).size;

    data = (await apiAuth.dirMkdir(podName, testDir)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('directory created successfully');

    formData.set('files', fileFromPathSync(fileName));

    data = (await apiAuth.fileUpload(podName, '/', formData, '64mb')).data;
    expect(data.Responses).toHaveLength(1);
    expect(data.Responses[0].file_name).toBe(name);
    expect(data.Responses[0].message).toBe('uploaded successfully');

    data = (await apiAuth.dirLs(podName, '/')).data;
    expect(data.files).toHaveLength(1);
    expect(data.files[0].name).toBe(name);
    expect(data.files[0].content_type).toBe('application/octet-stream');
    expect(Number(data.files[0].size)).toBe(fileSize);

    data = (await apiAuth.fileStat(podName, `/${name}`)).data
    expect(data.pod_name).toBe(podName);
    expect(data.file_path).toBe('/');
    expect(data.file_name).toBe(name);
    expect(Number(data.file_size)).toBe(fileSize);
    expect(data.content_type).toBe('application/octet-stream');

    data = (await apiAuth.fileDownload(podName, `/${name}`, name)).data
    // todo check binary hash
    expect(data).toHaveLength(fileSize);

    data = (await apiAuth.fileShare(podName, `/${name}`, fakeUsers.admin.address)).data
    expect(data.file_sharing_reference).toHaveLength(74);

    const sharingRef = data.file_sharing_reference;
    data = (await apiAuth.fileReceiveInfo(podName, sharingRef)).data
    expect(data.name).toBe(name);
    // todo report to fairos about incorrect number out (should be number, not string)
    expect(Number(data.size)).toBe(fileSize);
    expect(data.content_type).toBe('application/octet-stream');
    expect(data.pod_name).toBe(podName);
    // todo report to fairos about different sizes of addresses
    expect(data.source_address).toHaveLength(40);
    expect(data.dest_address).toHaveLength(42);

    data = (await apiAuth.fileReceive(podName, sharingRef, testDir)).data
    expect(data.file_name).toBe(`${testDir}/${name}`);

    data = (await apiAuth.fileDelete(podName, `/${name}`)).data
    expect(data.code).toBe(200);
    expect(data.message).toBe('file deleted successfully');

    data = (await apiAuth.dirLs(podName, '/')).data;
    expect(data.files).toBeUndefined();
    expect(data.dirs).toHaveLength(1);
    expect(data.dirs[0].name).toBe(testDir.replace('/', ''));
    expect(data.dirs[0].content_type).toBe('inode/directory');

    try {


        console.log('data', data);
    } catch (e) {
        console.log(e);
    }
});
