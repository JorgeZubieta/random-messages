const messages = [
    "Kaito Kun my son!",
    "Yuki Mom, Im still love you!",
    "Jorge Daddy!", "Family Z",
    "I miss you guys!",
    "I hope see you some day!",
    "we are 3!"
];
const randomMsg = () => {
    const message = messages[ Math.floor( Math.random() * messages.length ) ];
    console.log(message);
};
module.exports = { randomMsg };