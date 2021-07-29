//replace console.log with document.write to make the behavior visible
console.log = (m) => {
    document.write(`${m}<br>`);
};

import FairOS from '../fairos.min.js';
const fairos = new FairOS();
console.log(fairos.test());

