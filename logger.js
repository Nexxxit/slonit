//Logger

function createLogger() {
    let messages = [];
    return {
        log: function(message) {
            messages.push(message);
        },
        getLogs: function() {
            console.log(messages);
        }
    }
}

const logger = createLogger();
logger.log('Hello world!');
logger.log('How are u?');

logger.getLogs();

//RandomNumberGeneratorFromRange

function createRandomGenerator(min, max) {
    return function () {
        console.log(Math.floor(Math.random() * (max - min + 1)) + min)
    }
}

const randomNumber = createRandomGenerator(1, 10);
randomNumber();
randomNumber();
randomNumber();
