const state = 'development';

const developmentURL = 'http://127.0.0.1:3004';
const deployURL = '';

let url;

if (state === 'development') {
  url = developmentURL;
} else if (state === 'deploy') {
  url = deployURL;
}

module.exports.url = url;
