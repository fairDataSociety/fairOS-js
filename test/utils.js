const FairOS = require('../fairos.develop');

console.log("FAIROS_URL", process.env.FAIROS_URL);

// let instance = null;
// module.exports.getInstance = () => {
//     if (!instance) {
//         instance = new FairOS(process.env.FAIROS_URL)
//     }
//
//     return instance;
// }

module.exports.apiNoAuth = new FairOS(process.env.FAIROS_URL, false);
module.exports.apiAuth = new FairOS(process.env.FAIROS_URL, true);

module.exports.fakeUsers = {
    admin: {
        username: 'admin',
        password: 'adminpassword',
        mnemonic: 'guard trim broccoli accident beef organ same vital thrive oil alcohol uniform',
        address: '0xB99f13a77Ae04d27a41bEF2265ffd75E83C91147'
    }
};

module.exports.uuid = () => {
    return 'xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

module.exports.getRandomUsername = () => {
    return module.exports.uuid();
};

module.exports.getRandomPassword = () => {
    return module.exports.uuid();
};
