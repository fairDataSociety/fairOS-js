const {fakeUsers, apiAuth, apiNoAuth} = require("../utils");

test('User export', async () => {
    const user = fakeUsers.admin;

    expect.assertions(6);
    try {
        await apiNoAuth.userExport();
    } catch (e) {
        const data = e.response.data;
        console.log('data',data);

        expect(data.code).toBe(400);
        // expect(data.message).toBe('cookie: invalid cookie: securecookie: the value is not valid');
        // also could be
        expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    let data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.userExport()).data;
    console.log('data',data);
    expect(data.user_name).toBe(user.username);
    expect(data.address).toBe(user.address);
});
