const {fakeUsers, apiAuth, apiNoAuth, getRandomPodName, getRandomUser} = require("../utils");

test('User create new pod', async () => {
    // const user = getRandomUser();
    // const podName = getRandomPodName();
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

    // console.log('111data', data);
    // expect(data.code).toBe(201);
    // expect(data.message).toBe('pod created successfully');
});
