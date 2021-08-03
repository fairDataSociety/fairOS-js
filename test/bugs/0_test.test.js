const {fakeUsers, apiAuth, apiNoAuth, getRandomPodName, getRandomUser} = require("../utils");

test('Pod stat', async () => {
    // todo recheck. changed POST to GET
    // const user = getRandomUser();
    // const podName = getRandomPodName();
    const user = fakeUsers.podUser;
    const podName = fakeUsers.podUser.podName;
    // const randomPodName = getRandomPodName();

    let data;
    // try {
    //     await apiNoAuth.podStat(podName, user.username);
    //     expect(true).toBe(false);
    // } catch (e) {
    //     // todo empty data
    //     console.log('e.response',e.response);
    //     const data = e.response.data;
    //     expect(data.code).toBe(400);
    //     expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    // }

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podOpen(podName, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('pod opened successfully');

    data = (await apiAuth.podStat(podName)).data;
    expect(data.pod_name).toBe(podName);
    expect(data.address).toHaveLength(40);


    try {
        data = (await apiAuth.podStat(podName)).data;
        // expect(true).toBe(false);
        console.log('data',data);
    } catch (e) {
        const data = e;
        console.log('e data',data);
        // expect(data.code).toBe(400);
        // expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }

    // try {
    //     data = (await apiAuth.podStat(podName, user.password)).data;
    //     expect(true).toBe(false);
    //     // todo empty data if pod not opened
    //     console.log('data',data);
    // } catch (e) {
    //     const data = e.response.data;
    //     console.log('e data',data);
    //     // expect(data.code).toBe(400);
    //     // expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    // }

});
