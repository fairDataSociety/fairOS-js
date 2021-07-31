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

module.exports.api = new FairOS(process.env.FAIROS_URL, false);
module.exports.apiAuth = new FairOS(process.env.FAIROS_URL, true);

module.exports.fakeUsers = {
    admin: {
        username: 'admin',
        password: 'adminpassword',
        mnemonic: 'guard trim broccoli accident beef organ same vital thrive oil alcohol uniform',
        address: '0xB99f13a77Ae04d27a41bEF2265ffd75E83C91147'
    }
};
