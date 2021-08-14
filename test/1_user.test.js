const {apiNoAuth, fakeUsers, apiAuth, getRandomPodName, getRandomUser, toBase64} = require('./utils');
const {FormData, fileFromPathSync} = require('formdata-node');
import fs from 'fs';

jest.setTimeout(60000);

test('Test', () => {
    expect(apiNoAuth.test()).toBe('FairOS test OK');
});

test('Admin exists', async () => {
    const user = fakeUsers.admin;

    const data = (await apiNoAuth.userPresent(user.username)).data;
    expect(data.present).toBeDefined();
    expect(data.present).toBe(false);
});

test('Register admin user with mnemonic', async () => {
    const user = fakeUsers.admin;

    const data = (await apiNoAuth.userSignup(user.username, user.password, user.mnemonic)).data;
    expect(data.address).toEqual(user.address);
});

test('Admin exists check again', async () => {
    const user = fakeUsers.admin;

    const data = (await apiNoAuth.userPresent(user.username)).data;
    expect(data.present).toBeDefined();
    expect(data.present).toBe(true);
});

test('Register admin user with mnemonic again', async () => {
    const user = fakeUsers.admin;

    expect.assertions(2);
    try {
        await apiNoAuth.userSignup(user.username, user.password, user.mnemonic);
    } catch (e) {
        const data = e.response.data;

        expect(data.message).toEqual('user signup: user name already present');
        expect(data.code).toEqual(400);
    }
});

test('Login', async () => {
    const user = fakeUsers.admin;

    const data = (await apiNoAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');
});

test('Import user with mnemonic', async () => {
    const user = fakeUsers.toImport;

    let data = (await apiNoAuth.userPresent(user.username)).data;
    expect(data.present).toBe(false);

    data = (await apiNoAuth.userImport(user.username, user.password, user.mnemonic)).data;
    expect(data.address).toEqual(user.address);
});

test('User logout', async () => {
    const user = fakeUsers.admin;

    expect.assertions(6);

    let data;
    try {
        await apiNoAuth.userLogout();
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.userLogout()).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('used logged out successfully');
});

test('User stat', async () => {
    const user = fakeUsers.admin;

    expect.assertions(6);
    try {
        await apiNoAuth.userStat();
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        // expect(data.message).toBe('cookie: invalid cookie: securecookie: the value is not valid');
        // also could be
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    let data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.userStat()).data;
    expect(data.user_name).toBe(user.username);
    expect(data.reference).toBe(user.address);
});

test('User export', async () => {
    const user = fakeUsers.admin;

    expect.assertions(6);
    try {
        await apiNoAuth.userExport();
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        // also could be
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    let data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.userExport()).data;
    expect(data.user_name).toBe(user.username);
    expect(data.address).toBe(user.address);
});

test('User delete', async () => {
    const user = fakeUsers.delete;

    expect.assertions(10);
    let data;
    try {
        await apiNoAuth.userDelete(user.password);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    data = (await apiNoAuth.userPresent(user.username)).data;
    expect(data.present).toBe(false);

    data = (await apiNoAuth.userSignup(user.username, user.password, user.mnemonic)).data;
    expect(data.address).toEqual(user.address);

    data = (await apiNoAuth.userPresent(user.username)).data;
    expect(data.present).toBe(true);

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.userDelete(user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user deleted successfully');

    data = (await apiNoAuth.userPresent(user.username)).data;
    expect(data.present).toBe(false);
});

test('User create new pod', async () => {
    const user = fakeUsers.podUser;
    const podName = fakeUsers.podUser.podName;

    await apiNoAuth.userSignup(user.username, user.password);

    let data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podNew(podName, user.password)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('pod created successfully');

    try {
        await apiAuth.podNew(podName, user.password);
        expect(true).toBe(false);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('pod new: pod already exists');
    }
});

test('User open created pod', async () => {
    const user = fakeUsers.podUser;
    const podName = fakeUsers.podUser.podName;
    const randomPodName = getRandomPodName();

    let data;

    try {
        await apiNoAuth.podOpen(podName, user.password);
        expect(true).toBe(false);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    try {
        await apiAuth.podOpen(randomPodName, user.password);
        expect(true).toBe(false);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('pod open: invalid pod name');
    }

    data = (await apiAuth.podOpen(podName, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('pod opened successfully');
});

test('Pod sync', async () => {
    const user = fakeUsers.podUser;
    const podName = fakeUsers.podUser.podName;

    let data;
    try {
        await apiNoAuth.podSync(podName);
        expect(true).toBe(false);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podOpen(podName, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('pod opened successfully');

    data = (await apiAuth.podSync(podName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('pod synced successfully');
});

test('Pod close', async () => {
    const user = fakeUsers.podUser;
    const podName = fakeUsers.podUser.podName;

    let data;
    try {
        await apiNoAuth.podClose(podName);
        expect(true).toBe(false);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podOpen(podName, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('pod opened successfully');

    data = (await apiAuth.podClose(podName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('pod closed successfully');
});

test('Pod ls', async () => {
    const user = fakeUsers.podUser;
    const podName = fakeUsers.podUser.podName;

    let data;
    try {
        await apiNoAuth.podLs();
        expect(true).toBe(false);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podLs()).data;
    expect(data.pod_name).toEqual([podName]);
    expect(data.shared_pod_name).toEqual([]);
});

test('Pod stat', async () => {
    const user = fakeUsers.podUser;
    const podName = fakeUsers.podUser.podName;

    let data;
    try {
        await apiNoAuth.podStat(podName);
        expect(true).toBe(false);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podOpen(podName, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('pod opened successfully');

    data = (await apiAuth.podStat(podName)).data;
    expect(data.pod_name).toBe(podName);
    expect(data.address).toHaveLength(40);
});

test('Dir CRUD', async () => {
    const user = fakeUsers.dirUser;
    const podName = fakeUsers.dirUser.podName;
    const dirName = fakeUsers.dirUser.dirName;
    const dirFullPath = fakeUsers.dirUser.dirFullPath;

    await apiNoAuth.userSignup(user.username, user.password);

    let data;
    // todo move all login required methods to one test
    const methods = [apiNoAuth.dirMkdir, apiNoAuth.dirRmdir, apiNoAuth.dirLs, apiNoAuth.dirStat];
    for (let method of methods) {
        try {
            await method.call(apiNoAuth, dirName);
            expect(true).toBe(false);
        } catch (e) {
            const data = e.response.data;
            expect(data.code).toBe(400);
            expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
        }
    }

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podNew(podName, user.password)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('pod created successfully');

    data = (await apiAuth.dirLs(podName)).data;
    expect(JSON.stringify(data)).toBe('{}');

    data = (await apiAuth.dirMkdir(podName, dirFullPath)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('directory created successfully');

    data = (await apiAuth.dirLs(podName)).data;
    expect(data.dirs).toHaveLength(1);
    expect(data.dirs[0].name).toEqual(dirName);
    expect(data.dirs[0].content_type).toEqual('inode/directory');

    data = (await apiAuth.dirStat(podName, dirName, '/')).data;
    expect(data.pod_name).toEqual(podName);
    expect(data.dir_path).toEqual('');
    expect(data.dir_name).toEqual('/');

    data = (await apiAuth.dirRmdir(podName, dirFullPath)).data;
    expect(data.code).toEqual(200);
    expect(data.message).toEqual('directory removed successfully');
});


test('Manage files', async () => {
    const user = getRandomUser();
    const podName = getRandomPodName();

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
});

test('Kv manage', async () => {
    const user = getRandomUser();
    const podName = getRandomPodName();

    const csvFileName = `test/files/1.csv`;
    const kvName = 'my_test_kv';
    const kvNameCsv = 'my_test_kv_csv';
    const kvNameNotFound = 'my_test_kv_not_found';
    const kvKey = 'my_great_key';
    const kvValue = 'my super value';

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

    data = (await apiAuth.kvLs(podName)).data;
    expect(data.Tables).toBe(null);

    data = (await apiAuth.kvNew(podName, kvName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store created');

    data = (await apiAuth.kvNew(podName, kvNameCsv)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store created');

    data = (await apiAuth.kvLs(podName)).data;
    expect(data.Tables).toHaveLength(2);

    try {
        await apiAuth.kvOpen(podName, kvNameNotFound);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(500);
        expect(data.message).toBe('kv open: kv table not present');
    }

    data = (await apiAuth.kvOpen(podName, kvName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store opened');

    data = (await apiAuth.kvCount(podName, kvName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe(`kv store ${kvName} has 0 records`);

    try {
        await apiAuth.kvEntryGet(podName, kvName, kvKey);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(500);
        expect(data.message).toBe('kv get: entry not found');
    }

    data = (await apiAuth.kvEntryPut(podName, kvName, kvKey, kvValue)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('key added');

    data = (await apiAuth.kvEntryGet(podName, kvName, kvKey)).data;
    expect(data.keys).toHaveLength(1);
    expect(data.keys[0]).toBe(kvKey);
    expect(data.values).toBe(toBase64(kvValue));

    data = (await apiAuth.kvEntryDelete(podName, kvName, kvKey)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('key deleted');

    data = (await apiAuth.kvOpen(podName, kvNameCsv)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store opened');

    const formData = new FormData();
    formData.set('csv', fileFromPathSync(csvFileName));
    data = (await apiAuth.kvLoadCsv(podName, kvNameCsv, formData)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe(`csv file loaded in to kv table (${kvNameCsv}) with total:4, success: 4, failure: 0 rows`);

    data = (await apiAuth.kvEntryGet(podName, kvNameCsv, "key_1")).data;
    expect(data.keys).toHaveLength(2);
    expect(data.keys[0]).toBe('Key');
    expect(data.keys[1]).toBe('Value');
    expect(data.values).toBe(toBase64('key_1,"very_simple_value"'));

    data = (await apiAuth.kvSeek(podName, kvNameCsv, "key_", "", "100")).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('seeked closest to the start key');

    data = (await apiAuth.kvSeekNext(podName, kvNameCsv)).data;
    expect(data.keys).toHaveLength(2);
    expect(data.keys[0]).toBe('Key');
    expect(data.keys[1]).toBe('Value');
    expect(data.values).toBe(toBase64('key_1,"very_simple_value"'));

    data = (await apiAuth.kvDelete(podName, kvNameCsv)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store deleted');

    data = (await apiAuth.kvLs(podName)).data;
    expect(data.Tables).toHaveLength(1);
});

test('Pod share', async () => {
    const user = getRandomUser();
    const podName = getRandomPodName();

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

    data = (await apiAuth.podShare(podName, user.password)).data;
    expect(data.pod_sharing_reference).toHaveLength(64);

    const ref = data.pod_sharing_reference;

    data = (await apiAuth.podReceiveInfo(ref)).data;
    expect(data.pod_name).toBe(podName);
    expect(data.pod_address).toHaveLength(40);
    expect(data.user_name).toBe(user.username);
    expect(data.user_address).toHaveLength(40);

    try {
        await apiAuth.podReceive(ref);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(500);
        expect(data.message).toBe('pod receive: pod already exists');
    }
});
