const {fakeUsers, apiAuth, apiNoAuth, getRandomPodName, getRandomUser, toBase64} = require("../utils");
import {FormData, File, fileFromPathSync} from 'formdata-node';
import fs from 'fs';

test('Doc manage', async () => {
    const user = getRandomUser();
    // console.log(user);
    const podName = getRandomPodName();
    // const randomPodName = getRandomPodName();
    // const user = fakeUsers.dirUser;
    // const podName = fakeUsers.dirUser.podName;
    // const csvFileName = `test/files/1.csv`;
    // const kvName = 'my_test_kv';
    // const kvNameCsv = 'my_test_kv_csv';
    // const kvNameNotFound = 'my_test_kv_not_found';
    // const kvKey = 'my_great_key';
    // const kvValue = 'my super value';
    const docName = 'my_doc';

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

    try {
        await apiAuth.docOpen(podName, docName);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(500);
        expect(data.message).toBe('doc open: document db  not present');
    }

    data = (await apiAuth.docNew(podName, docName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('document db created');

    data = (await apiAuth.docOpen(podName, docName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('document store opened');

    data = (await apiAuth.docCount(podName, docName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('0');


    try {
        data = (await apiAuth.docCount(podName, docName)).data;
        console.log(data);

    } catch (e) {
        console.log(e);
    }


    // data = (await apiAuth.docNew(podName, docName)).data;
    // console.log(data);

    return;
    data = (await apiAuth.kvLs(podName)).data;
    expect(data.Tables).toBe(null);

    data = (await apiAuth.kvNew(podName, kvName)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store created');

    data = (await apiAuth.kvNew(podName, kvNameCsv)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store created');

    data = (await apiAuth.kvLs(podName)).data;
    expect(data.Tables).toHaveLength(2);

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

    data = (await apiAuth.kvOpen(podName, kvNameCsv)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store opened');

    const formData = new FormData();
    formData.set('csv', fileFromPathSync(csvFileName));
    data = (await apiAuth.kvLoadCsv(podName, kvNameCsv, formData)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe(`csv file loaded in to kv table (${kvNameCsv}) with total:4, success: 4, failure: 0 rows`);

    data = (await apiAuth.kvEntryGet(podName, kvNameCsv, "key_1")).data;
    expect(data.keys).toHaveLength(2);
    expect(data.keys[0]).toBe('Key');
    expect(data.keys[1]).toBe('Value');
    expect(data.values).toBe(toBase64('key_1,"very_simple_value"'));

    data = (await apiAuth.kvSeek(podName, kvNameCsv, "key_", "", "100")).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('seeked closest to the start key');

    data = (await apiAuth.kvSeekNext(podName, kvNameCsv)).data;
    expect(data.keys).toHaveLength(2);
    expect(data.keys[0]).toBe('Key');
    expect(data.keys[1]).toBe('Value');
    expect(data.values).toBe(toBase64('key_1,"very_simple_value"'));

    data = (await apiAuth.kvDelete(podName, kvNameCsv)).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('kv store deleted');

    data = (await apiAuth.kvLs(podName)).data;
    expect(data.Tables).toHaveLength(1);

    try {
        // data = (await apiAuth.kvDelete(podName, kvNameCsv)).data;
        // console.log('data', data);

    } catch (e) {
        console.log(e);
    }
});
