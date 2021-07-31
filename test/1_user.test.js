const {api, fakeUsers} = require('./utils');
const FairOS = require('../fairos.min');

test('Test', () => {
    expect(api.test()).toBe('FairOS test OK');
});

test('Admin exists', async () => {
    const user = fakeUsers.admin;

    const data = (await api.userPresent(user.username)).data;
    expect(data.present).toBeDefined();
    expect(data.present).toBe(false);
});

test('Register admin user with mnemonic', async () => {
    const user = fakeUsers.admin;

    const data = (await api.userSignup(user.username, user.password, user.mnemonic)).data;
    expect(data.address).toEqual(user.address);
});

test('Admin exists check again', async () => {
    const user = fakeUsers.admin;

    const data = (await api.userPresent(user.username)).data;
    expect(data.present).toBeDefined();
    expect(data.present).toBe(true);
});

test('Register admin user with mnemonic again', async () => {
    const user = fakeUsers.admin;

    expect.assertions(2);
    try {
        await api.userSignup(user.username, user.password, user.mnemonic);
    } catch (e) {
        const data = e.response.data;

        expect(data.message).toEqual('user signup: user name already present');
        expect(data.code).toEqual(400);
    }
});

test('Login', async () => {
    const user = fakeUsers.admin;

    const data = (await api.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');
});

test('Check is logged in with no auth client', async () => {
    const user = fakeUsers.admin;

    const data = (await api.userIsLoggedIn(user.username)).data;
    console.log('data',data);
    expect(data.loggedin).toBe(false);
});

// test('Check is logged in with store cookie mode', async () => {
//     const storeApi = new FairOS(api.);
//     const data = (await api.userIsLoggedIn()).data;
//     expect(data.loggedin).toBe(false);
// });
