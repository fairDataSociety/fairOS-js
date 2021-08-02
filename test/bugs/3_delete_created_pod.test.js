const {fakeUsers, apiAuth, apiNoAuth} = require("../utils");

test('Delete created pod', async () => {
    const user = fakeUsers.podUser;
    const podName = fakeUsers.podUser.podName;

    let data;
    data = (await apiAuth.userSignup(user.username, user.password, user.mnemonic)).data;
    expect(data.address).toEqual(user.address);

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podNew(podName, user.password)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('pod created successfully');

    try {
        await apiNoAuth.podDelete(podName);
        expect(true).toBe(false);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(400);
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    try {
        data = (await apiAuth.podDelete(podName)).data;
        expect(true).toBe(false);
        console.log('data', data);
    } catch (e) {
        const data = e.response.data;
        console.log('e data', data);
        //{ message: 'delete pod: error uploading data', code: 500 }
    }
});
