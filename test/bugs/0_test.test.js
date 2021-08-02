const {fakeUsers, apiAuth, apiNoAuth} = require("../utils");

test('User delete', async () => {
    const user = fakeUsers.delete;

    expect.assertions(10);
    let data;
    try {
        await apiNoAuth.userDelete(user.password);
    } catch (e) {
        const data = e.response.data;
        console.log('data', data);
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
