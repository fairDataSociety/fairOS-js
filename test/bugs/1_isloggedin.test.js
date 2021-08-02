const {apiNoAuth, getRandomUsername, getRandomPassword} = require("../utils");

// https://github.com/fairDataSociety/fairOS-dfs/issues/89
test('Check is logged in with no auth client', async () => {
    const username = getRandomUsername();
    const password = getRandomPassword();

    let data = (await apiNoAuth.userSignup(username, password)).data;
    expect(data.address).toBeDefined();
    expect(data.address).toHaveLength(42);
    data = (await apiNoAuth.userIsLoggedIn(username)).data;
    expect(data.loggedin).toBe(false);
});
