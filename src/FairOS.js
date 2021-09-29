import axios from 'axios';
import {Encoder} from 'form-data-encoder';
import {Readable} from 'stream';
// todo self-documented code with possibility to create docs page

export default class FairOS {
    isNode = typeof window === 'undefined';

    baseURL;
    cookie = '';
    isStoreNodeCookie;

    constructor(baseURL = 'http://localhost:9090/v1/', isStoreNodeCookie = true) {
        this.baseURL = baseURL;
        this.isStoreNodeCookie = isStoreNodeCookie;
    }

    setNodeCookie(cookie = '') {
        this.cookie = cookie;
    }

    setIsStoreNewCookie(isStoreNodeCookie) {
        this.isStoreNodeCookie = isStoreNodeCookie;
    }

    handleCookies(response) {
        if (this.isNode && this.isStoreNodeCookie) {
            let receivedCookie = response.headers['set-cookie'];
            if (receivedCookie && receivedCookie.length) {
                receivedCookie = receivedCookie[0].split(';');
                if (receivedCookie && receivedCookie.length) {
                    this.cookie = receivedCookie[0];
                }
            }
        }

        return response;
    }

    getCookieObject() {
        return this.isNode ? {'Cookie': this.cookie} : {};
    }

    get(apiMethod) {
        return axios({
            baseURL: this.baseURL,
            url: apiMethod,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...this.getCookieObject()
            },
            withCredentials: true,
        }).then(response => this.handleCookies(response));
    }

    post(apiMethod, data = {}) {
        return axios({
            baseURL: this.baseURL,
            url: apiMethod,
            method: 'POST',
            data,
            headers: {
                'Content-Type': 'application/json',
                ...this.getCookieObject()
            },
            withCredentials: true,
        }).then(response => this.handleCookies(response));
    }

    download(apiMethod, data = {}, onDownloadProgress = null) {
        return axios({
            responseType: 'arraybuffer',
            baseURL: this.baseURL,
            url: apiMethod,
            method: 'POST',
            data,
            headers: {
                ...this.getCookieObject()
            },
            withCredentials: true,
            onDownloadProgress
        }).then(response => this.handleCookies(response));
    }

    delete(apiMethod, data = {}) {
        return axios({
            baseURL: this.baseURL,
            url: apiMethod,
            method: 'DELETE',
            data,
            headers: {
                'Content-Type': 'application/json',
                ...this.getCookieObject()
            },
            withCredentials: true,
        }).then(response => this.handleCookies(response));
    }

    upload(apiMethod, formData, onUploadProgress = null) {
        // todo if node then add headers, if not - not add
        // todo check for node and for browser
        const encoder = new Encoder(formData);
        return axios({
            baseURL: this.baseURL,
            url: apiMethod,
            method: 'POST',
            data: this.isNode ? Readable.from(encoder.encode()) : formData,
            headers: {
                ...this.getCookieObject(),
                ...(this.isNode ? encoder.headers : {})
            },
            withCredentials: true,
            onUploadProgress
        }).then(response => this.handleCookies(response));
    }

    userLogin(username, password) {
        return this.post('user/login', {
            user_name: username,
            password: password,
        });
    }

    userSignup(username, password, mnemonic = '') {
        return this.post('user/signup', {
            user_name: username,
            password,
            mnemonic
        });
    }

    userImport(username, password, mnemonic = '', address = '') {
        if ((mnemonic && address) || (!mnemonic && !address)) {
            throw Error('Pass only mnemonic or only address');
        }

        return this.post('user/import', {
            user_name: username,
            password,
            mnemonic,
            address
        });
    }

    userPresent(username) {
        return this.get(`user/present?user_name=${username}`);
    }

    userIsLoggedIn(username) {
        return this.get(`user/isloggedin?user_name=${username}`);
    }

    userLogout() {
        return this.post('user/logout');
    }

    userExport() {
        return this.post('user/export');
    }

    userStat() {
        return this.get('user/stat');
    }

    userDelete(password) {
        return this.delete('user/delete', {
            password
        });
    }

    podNew(podName, password) {
        return this.post('pod/new', {
            pod_name: podName,
            password
        });
    }

    podOpen(podName, password) {
        return this.post('pod/open', {
            pod_name: podName,
            password
        });
    }

    podSync(podName) {
        return this.post('pod/sync', {
            pod_name: podName
        });
    }

    podClose(podName) {
        return this.post('pod/close', {
            pod_name: podName
        });
    }

    podDelete(podName) {
        return this.delete('pod/delete', {
            pod_name: podName
        });
    }

    podLs() {
        return this.get('pod/ls');
    }

    podStat(podName) {
        return this.get(`pod/stat?pod_name=${podName}`);
    }

    podShare(podName, password) {
        return this.post('pod/share', {
            pod_name: podName,
            password
        });
    }

    podReceiveInfo(sharingRef) {
        return this.get(`pod/receiveinfo?sharing_ref=${sharingRef}`);
    }

    podReceive(sharingRef) {
        return this.get(`pod/receive?sharing_ref=${sharingRef}`);
    }

    dirMkdir(podName, dirFullPath) {
        return this.post('dir/mkdir', {
            dir_path: dirFullPath,
            pod_name: podName
        });
    }

    dirRmdir(podName, dirFullPath) {
        return this.delete('dir/rmdir', {
            dir_path: dirFullPath,
            pod_name: podName
        });
    }

    dirLs(podName, dirFullPath = '/') {
        return this.get(`dir/ls?pod_name=${podName}&dir_path=${dirFullPath}`);
    }

    dirStat(podName, dir, dirFullPath) {
        return this.get(`dir/stat?dir=${dir}&pod_name=${podName}&dir_path=${dirFullPath}`);
    }

    fileUpload(podName, podDirFull, formData, blockSize = '1Mb', onUploadProgress = null) {
        if (!formData.has('files')) {
            throw new Error('Field "files" is not defined');
        }

        // todo implement -H "fairOS-dfs-Compression: snappy/gzip"
        formData.set('pod_name', podName);
        formData.set('block_size', blockSize);
        formData.set('dir_path', podDirFull);

        return this.upload('file/upload', formData, onUploadProgress);
    }

    fileDownload(podName, filePath, file, onDownloadProgress = null) {
        return this.download(`file/download?file_path=${filePath}&file=${file}&pod_name=${podName}`, {}, onDownloadProgress);
    }

    fileStat(podName, file) {
        return this.get(`file/stat?pod_name=${podName}&file_path=${file}`);
    }

    fileShare(podName, filePath, toAddress) {
        return this.post('file/share', {
            pod_name: podName,
            file_path: filePath,
            dest_user: toAddress
        });
    }

    fileReceiveInfo(podName, fileReference) {
        return this.get(`file/receiveinfo?pod_name=${podName}&sharing_ref=${fileReference}`);
    }

    fileReceive(podName, fileReference, dirPath = '/') {
        return this.get(`file/receive?pod_name=${podName}&sharing_ref=${fileReference}&dir_path=${dirPath}`);
    }

    fileDelete(podName, filePath) {
        return this.delete('file/delete', {
            pod_name: podName,
            file_path: filePath
        });
    }

    kvNew(podName, tableName) {
        return this.post('kv/new', {
            pod_name: podName,
            table_name: tableName
        });
    }

    kvOpen(podName, tableName) {
        return this.post('kv/open', {
            pod_name: podName,
            table_name: tableName
        });
    }

    kvCount(podName, tableName) {
        return this.post('kv/count', {
            pod_name: podName,
            table_name: tableName
        });
    }

    kvLs(podName) {
        return this.get(`kv/ls?pod_name=${podName}`);
    }

    kvDelete(podName, tableName) {
        return this.delete('kv/delete', {
            pod_name: podName,
            table_name: tableName
        });
    }

    kvEntryPut(podName, tableName, key, value) {
        return this.post('kv/entry/put', {
            pod_name: podName,
            table_name: tableName,
            key,
            value
        });
    }

    kvEntryGet(podName, tableName, key) {
        return this.get(`kv/entry/get?pod_name=${podName}&table_name=${tableName}&key=${key}`);
    }

    kvEntryDelete(podName, tableName, key) {
        return this.delete('kv/entry/del', {
            pod_name: podName,
            table_name: tableName,
            key
        });
    }

    kvLoadCsv(podName, tableName, formData, memory = true) {
        if (!formData.has('csv')) {
            throw new Error('Field "csv" is not defined');
        }

        formData.set('pod_name', podName);
        formData.set('table_name', tableName);
        formData.set('memory', memory);

        return this.upload('kv/loadcsv', formData);
    }

    kvSeek(podName, tableName, startPrefix, endPrefix, limit) {
        return this.post('kv/seek', {
            pod_name: podName,
            table_name: tableName,
            start_prefix: startPrefix,
            end_prefix: endPrefix,
            limit
        });
    }

    kvSeekNext(podName, tableName) {
        return this.get(`kv/seek/next?pod_name=${podName}&table_name=${tableName}`);
    }

    /*
POST -F 'name=\<document table name>' http://localhost:9090/v0/doc/new
POST -F 'name=\<document table name>' http://localhost:9090/v0/doc/open
POST -F 'name=\<tdocument able name>' -F 'expr=\<expression>' http://localhost:9090/v0/doc/count
POST -F 'name=\<document table name>' -F 'expr=\<expression>' -F 'limit=\<no of records>' http://localhost:9090/v0/doc/find
POST http://localhost:9090/v0/doc/ls
DELETE -F 'name=\<tdocument able name>' http://localhost:9090/v0/doc/delete
POST -F 'name=\<tdocument able name>' -F 'doc=\<json document in bytes>' http://localhost:9090/v0/doc/entry/put
GET -F 'name=\<document table name>' -F 'id=\<document id>' http://localhost:9090/v0/doc/entry/get
DELETE -F 'name=\<document table name>' -F 'id=\<document id>' http://localhost:9090/v0/doc/entry/del
POST -F 'name=\<document table name>' -F 'json=@\<json_file>' http://localhost:9090/v0/doc/loadjson
POST -F 'name=\<document table name>' -F 'file=\<pod file>' http://localhost:9090/v0/doc/indexjson
 */

    docNew(podName, tableName, simpleIndex, mutable = true) {
        return this.post('doc/new', {
            pod_name: podName,
            table_name: tableName,
            si: simpleIndex,
            mutable: mutable.toString()
        });
    }

    docOpen(podName, tableName) {
        return this.post('doc/open', {
            pod_name: podName,
            table_name: tableName
        });
    }

    docCount(podName, tableName) {
        return this.post('doc/count', {
            pod_name: podName,
            table_name: tableName
        });
    }

    docFind(podName, tableName, expr, limit = 10) {
        return this.get(`doc/find?pod_name=${podName}&table_name=${tableName}&expr=${expr}&limit=${limit}`);
    }

    docLs(podName) {
        // todo fix it https://github.com/fairDataSociety/fairOS-dfs/issues/97
        // return this.get(`doc/ls`);
        return this.get(`doc/ls?pod_name=${podName}`);
    }

    docDelete(podName, tableName) {
        return this.delete('doc/delete', {
            pod_name: podName,
            table_name: tableName
        });
    }

    docEntryPut(podName, tableName, doc) {
        return this.post('doc/entry/put', {
            pod_name: podName,
            table_name: tableName,
            doc
        });
    }

    docEntryGet(podName, tableName, id) {
        return this.get(`doc/entry/get?pod_name=${podName}&table_name=${tableName}&id=${id}`);
    }

    docEntryDelete(podName, tableName, id) {
        return this.delete('doc/entry/del', {
            pod_name: podName,
            table_name: tableName,
            id
        });
    }

    docLoadJson(podName, tableName, formData) {
        if (!formData.has('json')) {
            throw new Error('Field "json" is not defined');
        }

        formData.set('pod_name', podName);
        formData.set('table_name', tableName);

        return this.upload('doc/loadjson', formData);
    }

    docIndexJson(podName, tableName, formData) {
        if (!formData.has('json')) {
            throw new Error('Field "json" is not defined');
        }

        formData.set('pod_name', podName);
        formData.set('table_name', tableName);

        return this.upload('doc/indexjson', formData);
    }

    test() {
        return 'FairOS test OK';
    }
}
