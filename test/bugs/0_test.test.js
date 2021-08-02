const {fakeUsers, apiAuth, apiNoAuth, getRandomPodName, getRandomUser} = require("../utils");

test('Pod delete', async () => {
    // const user = getRandomUser();
    // const podName = getRandomPodName();
    const user = fakeUsers.podUser;
    const podName = fakeUsers.podUser.podName;
    // const randomPodName = getRandomPodName();

    let data;
    try {
        await apiNoAuth.podDelete(podName);
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
        data = (await apiAuth.podDelete(podName)).data;
        expect(true).toBe(false);
        console.log('data',data);
    } catch (e) {
        const data = e.response.data;
        console.log('e data',data);
        // expect(data.code).toBe(400);
        // expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
    }
return
    // data = (await apiAuth.podOpen(podName, user.password)).data;
    // expect(data.code).toBe(200);
    // expect(data.message).toBe('pod opened successfully');

    // data = (await apiAuth.podClose(podName)).data;
    // // console.log('data',data);
    // expect(data.code).toBe(200);
    // expect(data.message).toBe('pod closed successfully');

    data = (await apiAuth.podLs()).data;
    expect(data.pod_name).toEqual([podName]);
    expect(data.shared_pod_name).toEqual([]);
    // expect(data.message).toBe('pod closed successfully');

    return;
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

    // try {
    //     await apiAuth.podNew(podName, user.password);
    //     expect(true).toBe(false);
    // } catch (e) {
    //     const data = e.response.data;
    //     expect(data.code).toBe(400);
    //     expect(data.message).toBe('pod new: pod already exists');
    // }

    // console.log('111data', data);
    // expect(data.code).toBe(201);
    // expect(data.message).toBe('pod created successfully');
});
