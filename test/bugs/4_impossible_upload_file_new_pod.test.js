const {apiAuth, apiNoAuth, getRandomUser, getRandomPodName} = require("../utils");
const {FormData, File} = require("formdata-node");

test('Impossible to upload file to created pod', async () => {
    const user = getRandomUser();
    const podName = getRandomPodName();

    await apiNoAuth.userSignup(user.username, user.password);

    let data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podNew(podName, user.password)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('pod created successfully');


    const formData = new FormData();

    const file = new File(["Hello world"], 'hello.txt');
    formData.set('files', file);

    data = (await apiAuth.fileUpload(podName, '/', formData)).data;
    console.log('data', data);

    data = (await apiAuth.dirLs(podName, '/')).data;
    console.log('data', data);
});
