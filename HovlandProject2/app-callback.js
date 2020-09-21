//Sam Hovland
//Project 2 Web Services
//Same as app.js but using only callbacks and no promises.


const request = require('request');
const yargs = require('yargs');


const argv = yargs
    .options({
        p: {
            demand: true,
            alias: 'person',
            describe: 'Get this persons info',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;


var person = argv.person;

var getPerson = (person, callback) => {
    var encodePerson = encodeURIComponent(person);

    request({
        url: `https://swapi.dev/api/people/?search=${encodePerson}`,
        json: true
    }, (error, response, body) => {
            if (error) {
                callback('Unable to connect to the Swapi server.');
            } else if (response.statusCode !== 200) {
                callback('Unable to connect to the Swapi server.')
            } else if (body.count === 0) {
                callback('Person could not be found.');
            } else if (body.count !== 0) {
                callback(body.results[0]);
            }
        });


};

getPerson(person, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(results);
    }
    

});