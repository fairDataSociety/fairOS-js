const FairOS = require('../fairos.min');

console.log("FAIROS_URL", process.env.FAIROS_URL);

const fairos = new FairOS(process.env.FAIROS_URL);

test('Test', () => {
    expect(fairos.test()).toBe('FairOS test OK');
});

test('Login', async () => {
    const data = (await fairos.userLogin('test', 'test')).data;
    expect(data.code).toBe(200);
    expect(data.message).toBe('user logged-in successfully');
});
