//Sam Hovland
//Project 2 Web Services
//Promises

const axios = require('axios');
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


var encodePerson = encodeURIComponent(argv.person);
var personURL = `https://swapi.dev/api/people/?search=${encodePerson}`


axios.get(personURL).then((response) => {
    if (response.data.count === 0) {
        throw new Error('Person could not be found.')
    } //PUT THIS IN THE CATCH AS WELL


    resolve = console.log(response.data.results[0]);

}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API servers');
    } else {
        console.log(e.message);
    }


});