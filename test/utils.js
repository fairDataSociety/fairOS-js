const FairOS = require('../fairos.develop');

console.log("FAIROS_URL", process.env.FAIROS_URL);

module.exports.apiNoAuth = new FairOS(process.env.FAIROS_URL, false);
module.exports.apiAuth = new FairOS(process.env.FAIROS_URL, true);

module.exports.fakeUsers = {
    admin: {
        username: 'admin',
        password: 'adminpassword',
        mnemonic: 'guard trim broccoli accident beef organ same vital thrive oil alcohol uniform',
        address: '0xB99f13a77Ae04d27a41bEF2265ffd75E83C91147'
    },
    toImport: {
        username: 'toimportuser',
        password: 'somepassword',
        mnemonic: 'leave shoot early iron prize exile noble erosion original patient calm fade',
        address: '0x374a1bc4831D265Ef262dF77E77Ed2cE3dA6E772'
    },
    toImport2: {
        username: 'toimportuser2',
        password: 'somepassword2',
        mnemonic: 'tilt sorry ensure gravity exile disease double fever swap impact degree flight',
        address: '0xCe4Fae0ccd79e7337233Aa146aCB303FD1A46250'
    },
    delete: {
        username: 'todelete',
        password: 'somepasswordtodelete',
        mnemonic: 'sausage onion camp kid genius ripple crash fold win system music fun',
        address: '0x28340d5bD212A58f6a1F32022CC775499271826a'
    },
    podUser: {
        username: 'poduser',
        password: 'somepasswordpoduser',
        mnemonic: 'balance illness divert chest axis genius hold aerobic category maximum lesson master',
        address: '0x3e87CaD9f580ec6eDf3472436a703Db23d85e76F',
        podName: 'Hello-world'
    },
};

module.exports.uuid = () => {
    return 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

module.exports.getRandomUsername = () => {
    return module.exports.uuid();
};

module.exports.getRandomPassword = () => {
    return module.exports.uuid();
};

module.exports.getRandomPodName = () => {
    return module.exports.uuid();
};

module.exports.getRandomUser = () => {
    return {
        username: module.exports.uuid(),
        password: module.exports.uuid()
    };
};
