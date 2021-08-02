const {fakeUsers, apiNoAuth} = require("../utils");

test('Import user with address', async () => {
    const user = fakeUsers.toImport2;
    const data = (await apiNoAuth.userImport(user.username, user.password, '', user.address)).data;
    expect(data.address).toEqual(user.address);
});
