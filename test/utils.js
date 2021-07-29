const FairOS = require('../fairos.min');

console.log("FAIROS_URL", process.env.FAIROS_URL);

let instance = null;
module.exports.getInstance = () => {
    if (!instance) {
        instance = new FairOS(process.env.FAIROS_URL)
    }

    return instance;
}

module.exports.api = module.exports.getInstance();

module.exports.fakeUsers = {
    admin: {
        username: 'admin',
        password: 'adminpassword',
        mnemonic: 'guard trim broccoli accident beef organ same vital thrive oil alcohol uniform'
    }
};
