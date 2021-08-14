const {fakeUsers, apiAuth, apiNoAuth, getRandomPodName, getRandomUser, toBase64} = require("../utils");
import {FormData, File, fileFromPathSync} from 'formdata-node';
import fs from 'fs';

test('Pod share', async () => {
    const user = getRandomUser();
    // console.log(user);
    const podName = getRandomPodName();

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

    data = (await apiAuth.podShare(podName, user.password)).data;
    expect(data.pod_sharing_reference).toHaveLength(64);

    const ref = data.pod_sharing_reference;

    data = (await apiAuth.podReceiveInfo(ref)).data;
    expect(data.pod_name).toBe(podName);
    expect(data.pod_address).toHaveLength(40);
    expect(data.user_name).toBe(user.username);
    expect(data.user_address).toHaveLength(40);

    try {
        await apiAuth.podReceive(ref);
    } catch (e) {
        const data = e.response.data;
        expect(data.code).toBe(500);
        expect(data.message).toBe('pod receive: pod already exists');
    }
});
