const {fakeUsers, apiAuth, apiNoAuth, getRandomPodName, getRandomUser} = require("../utils");

test('Dir CRUD', async () => {
    const user = getRandomUser();
    const podName = getRandomPodName();
    // const randomPodName = getRandomPodName();
    // const user = fakeUsers.dirUser;
    // const podName = fakeUsers.dirUser.podName;
    const dirName = fakeUsers.dirUser.dirName;
    const dirFullPath = fakeUsers.dirUser.dirFullPath;

    await apiNoAuth.userSignup(user.username, user.password);

    let data;
    const methods = [apiNoAuth.dirMkdir, apiNoAuth.dirRmdir, apiNoAuth.dirLs, apiNoAuth.dirStat];
    for (let method of methods) {
        try {
            await method.call(apiNoAuth, dirName);
            expect(true).toBe(false);
        } catch (e) {
            // console.log('e.response', e);
            const data = e.response.data;
            expect(data.code).toBe(400);
            expect(data.message).toBe('cookie: invalid cookie: http: named cookie not present');
        }
    }

    data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podNew(podName, user.password)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('pod created successfully');

    data = (await apiAuth.dirLs(podName)).data;
    expect(JSON.stringify(data)).toBe('{}');

    data = (await apiAuth.dirMkdir(podName, dirFullPath)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('directory created successfully');

    data = (await apiAuth.dirLs(podName)).data;
    console.log('ls ',data);
    expect(data.dirs).toHaveLength(1);
    expect(data.dirs[0].name).toEqual(dirName);
    expect(data.dirs[0].content_type).toEqual('inode/directory');

    try {
    data = (await apiAuth.dirStat(podName, dirName, '/')).data;
    expect(data.pod_name).toEqual(podName);
    expect(data.dir_path).toEqual('');
    expect(data.dir_name).toEqual('/');
    } catch (e) {
        // console.log(e);
        console.log(e.response.data);
    }

    // data = (await apiAuth.dirRmdir(podName, dirFullPath)).data;
    // expect(data.code).toEqual(200);
    // expect(data.message).toEqual('directory removed successfully');
    return;
    try {

        // console.log('data  222', data);
        // expect(data.pod_name).toBe(podName);
        // expect(data.address).toHaveLength(40);

    } catch (e) {
        // console.log(e);
        console.log(e.response.data);
    }

    return;
    try {
        data = (await apiAuth.podStat(podName)).data;
        // expect(true).toBe(false);
        console.log('data', data);
    } catch (e) {
        const data = e;
        console.log('e data', data);
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
