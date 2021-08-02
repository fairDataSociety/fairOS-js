import axios from "axios";
// todo progress upload/download support
// todo supported platforms: browser, node, react, react native
// todo self-documented code with possibility to create docs page

/*
OK POST -F 'user=\<username>' -F 'address=\<user_address>' -F 'password=\<password>' http://localhost:9090/v0/user/import
OK POST -F 'user=\<username>' -F 'mnemonic=\<12_word_mnemonic>' -F 'password=\<password>' http://localhost:9090/v0/user/import
*/

/*
POST http://localhost:9090/v0/user/logout
POST http://localhost:9090/v0/user/avatar
POST -F 'first_name=\<firstName>' -F 'middle_name=\<middleName>' -F 'last_name=\<lastName>' -F 'surname=\<surName>' http://localhost:9090/v0/user/name
POST -F 'phone=\<phone>' -F 'mobile=\<mobile>' -F 'address_line_1=\<address1>' -F 'address_line_2=\<address2>' http://localhost:9090/v0/user/contact
POST http://localhost:9090/v0/user/export
DELETE -F 'password=\<password>' http://localhost:9090/v0/user/delete
GET http://localhost:9090/v0/user/stat
GET http://localhost:9090/v0/user/avatar
GET http://localhost:9090/v0/user/name
GET http://localhost:9090/v0/user/contact
GET http://localhost:9090/v0/user/share/inbox
GET http://localhost:9090/v0/user/share/outbox
 */

/*
POST -F 'password=\<password>' -F 'pod=\<podname>' http://localhost:9090/v0/pod/new
POST -F 'password=\<password>' -F 'pod=\<podname>' http://localhost:9090/v0/pod/open
POST http://localhost:9090/v0/pod/sync
POST http://localhost:9090/v0/pod/close
DELETE http://localhost:9090/v0/pod/delete
GET http://localhost:9090/v0/pod/ls
GET -F 'user=\<username>' -F 'pod=\<podname>' http://localhost:9090/v0/pod/stat
 */

/*
POST -F 'dir=\<dir_with_path>' http://localhost:9090/v0/dir/mkdir
DELETE -F 'dir=\<dir_with_path>' http://localhost:9090/v0/dir/rmdir
GET -F 'dir=\<dir_with_path>' http://localhost:9090/v0/dir/ls
GET -F 'dir=\<dir_with_path>' http://localhost:9090/v0/dir/stat
 */

/*
POST -F -H "fairOS-dfs-Compression: snappy/gzip" 'pod_dir=\<dir_with_path>' -F 'block_size=\<in_Mb>' -F 'files=@\<filename1>' -F 'files=@\<filename2>' http://localhost:9090/v0/file/upload (compression header optional)
POST -F 'file=\<file_path>' http://localhost:9090/v0/file/download
POST -F 'file=\<file_path>' -F 'to=\<destination_user_address>' http://localhost:9090/v0/file/share
POST -F 'ref=\<sharing_reference>' -F 'dir=\<pod_dir_to_store_file>' http://localhost:9090/v0/file/share/receive
POST -F 'ref=\<sharing_reference>' http://localhost:9090/v0/file/share/receiveinfo
GET -F 'file=\<file_path>' http://localhost:9090/v0/file/stat
DELETE -F 'file=\<file_path>' http://localhost:9090/v0/file/delete
 */

/*
POST -F 'file=\<kv table name>' http://localhost:9090/v0/kv/new
POST -F 'file=\<kv table name>' http://localhost:9090/v0/kv/open
POST -F 'file=\<kv table name>' http://localhost:9090/v0/kv/count
POST http://localhost:9090/v0/kv/ls
DELETE -F 'file=\<kv table name>' http://localhost:9090/v0/kv/delete
POST -F 'file=\<kv table name>' -F 'key=\<key>' -F 'value=\<bytes>' http://localhost:9090/v0/kv/entry/put
GET -F 'file=\<kv table name>' -F 'key=\<key>' http://localhost:9090/v0/kv/entry/get
DELETE -F 'file=\<kv table name>' -F 'key=\<key>' http://localhost:9090/v0/kv/entry/del
POST -F 'file=\<kv table name>' -F 'csv=@\<csv_file>' http://localhost:9090/v0/kv/loadcsv
POST -F 'file=\<kv table name>' -F 'start=\<start_prefix>' -F 'end=\<end>' -F 'limit=\<no of records>' http://localhost:9090/v0/kv/seek
GET -F 'file=\<nkv table ame>' http://localhost:9090/v0/kv/seek/getnext
 */

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

    get(apiMethod, data = {}) {
        return axios({
            baseURL: this.baseURL,
            url: apiMethod,
            method: 'GET',
            data,
            headers: {
                'Content-Type': 'application/json',
                'Cookie': this.cookie
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
                'Cookie': this.cookie
            },
            withCredentials: true,
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

    podLs() {
        return this.get('pod/ls');
    }

    test() {
        return 'FairOS test OK';
    }
}


