var request = require('request')
var readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info.message);
    console.log(info.subtitle);
  }
}

rl.question('Who don\'t you like? ', (answer) => {

    answer = answer.split(' ');

    var options = {
        url : 'https://www.foaas.com/shakespeare/' + answer[0] + '/' + answer[1],
        headers : {
            'Accept' : 'application/json',
        }
    };

    request(options, callback);

  rl.close();
});


