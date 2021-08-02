const {apiNoAuth, fakeUsers, apiAuth, getRandomPodName} = require('./utils');

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
