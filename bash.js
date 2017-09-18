var commands = require('./commands')


process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var input = data.toString().trim().split(' ').slice(); // remove the newline
  var args = input.slice(1)
  var cmd = input[0]
  if (commands[cmd]){
    commands[cmd](args);
  } else {
    process.stdout.write('command not found: ' + cmd )
  }
  process.stdout.write('\nprompt > ');

});












