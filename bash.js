process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd === 'pwd') {
    pwd();
  }
  if(cmd === 'date')  {
    date();
  }
  process.stdout.write('\nprompt > ');

});

function pwd()  {
  process.stdout.write(process.env.PWD);
}

function date() {
  var date = new Date()
  process.stdout.write(date.toString())
}





