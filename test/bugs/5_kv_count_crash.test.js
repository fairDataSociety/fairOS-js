const {fakeUsers, apiAuth, apiNoAuth, getRandomPodName, getRandomUser, toBase64} = require("../utils");
import {FormData, File, fileFromPathSync} from 'formdata-node';
import fs from 'fs';

test('Kv count crash', async () => {
    const user = getRandomUser();
    console.log(user);
    const podName = getRandomPodName();
    // const randomPodName = getRandomPodName();
    // const user = fakeUsers.dirUser;
    // const podName = fakeUsers.dirUser.podName;
    const csvFileName = `test/files/1_crash.csv`;
    const kvName = 'my_test_kv';
    const kvNameNotFound = 'my_test_kv_not_found';
    const kvKey = 'my_great_key';
    const kvValue = 'my super value';

    await apiNoAuth.userSignup(user.username, user.password);

    let data = (await apiAuth.userLogin(user.username, user.password)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');

    data = (await apiAuth.podNew(podName, user.password)).data;
    expect(data.code).toBe(201);
    expect(data.message).toBe('pod created successfully');

    // todo remove these two lines of workaround after bug fixed (isn't possible to upload file to new pod, you should relogin)
    await apiAuth.userLogin(user.username, user.password);
    await apiAuth.podOpen(podName, user.password);

    data = (await apiAuth.kvLs(podName)).data;
    expect(data.Tables).toBe(null);

    data = (await apiAuth.kvNew(podName, kvName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store created');

    try {
        await apiAuth.kvOpen(podName, kvNameNotFound);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(500);
        expect(data.message).toBe('kv open: kv table not present');
    }

    data = (await apiAuth.kvOpen(podName, kvName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store opened');

    data = (await apiAuth.kvCount(podName, kvName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe(`kv store ${kvName} has 0 records`);

    try {
        await apiAuth.kvEntryGet(podName, kvName, kvKey);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(500);
        expect(data.message).toBe('kv get: entry not found');
    }

    data = (await apiAuth.kvEntryPut(podName, kvName, kvKey, kvValue)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('key added');

    data = (await apiAuth.kvEntryGet(podName, kvName, kvKey)).data;
    expect(data.keys).toHaveLength(1);
    expect(data.keys[0]).toBe(kvKey);
    expect(data.values).toBe(toBase64(kvValue));

    data = (await apiAuth.kvEntryDelete(podName, kvName, kvKey)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('key deleted');

    try {
        const formData = new FormData();
        formData.set('csv', fileFromPathSync(csvFileName));
        data = (await apiAuth.kvLoadCsv(podName, kvName, formData)).data;
        console.log('data', data);

        data = (await apiAuth.kvCount(podName, kvName)).data;
    } catch (e) {
        console.log(e);
    }
});
