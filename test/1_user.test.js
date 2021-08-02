const {apiNoAuth, fakeUsers, apiAuth} = require('./utils');
const FairOS = require('../fairos.min');

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
