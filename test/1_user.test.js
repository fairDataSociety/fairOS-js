const {api, fakeUsers} = require('./utils');

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
    expect(data.address).toEqual('0xB99f13a77Ae04d27a41bEF2265ffd75E83C91147');
});

test('Register admin user with mnemonic again', async () => {
    const user = fakeUsers.admin;

    expect.assertions(2);
    try {
        const data = (await api.userSignup(user.username, user.password, user.mnemonic)).data;
        console.log(data);
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
