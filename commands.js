var fs = require('fs')
var request = require('request');

module.exports.pwd = function ()  {
  process.stdout.write(process.env.PWD);
}

module.exports.date = function () {
  var date = new Date()
  process.stdout.write(date.toString())
}

module.exports.ls = function (){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    files.forEach(function(file) {
      process.stdout.write(file.toString() + "\n");
    })
    process.stdout.write("prompt > ");
  });
}

module.exports.echo = function(input){
  process.stdout.write(input.join(' '))
}

module.exports.cat = function(filename) {
  var path = getPath(filename);
  console.log(readFiles(path).length)
  process.stdout.write(readFiles(path))
}

module.exports.head = function(filename) {
  var path = getPath(filename);
  var begin = readFiles(path).split('\n').slice(0, 5).join('\n');
  process.stdout.write(begin)
}

module.exports.tail = function(filename) {
  var path = getPath(filename);
  var end = readFiles(path).split('\n').slice(-5).join('\n');
  process.stdout.write(end)
}

module.exports.sort = function(filename)  {
  var path = getPath(filename);
  var unsorted = readFiles(path).split('\n')
  console.log(unsorted.sort(sortAlpha).join('\n'))
}

module.exports.wc = function(filename) {
  var path = getPath(filename);
  var file = readFiles(path)
  var fileLines = file.split('\n').length
  var words =  file.split(' ').filter(function(word){
    return word.length > 0
  }).length
  var bytes = file.length
  var output =  fileLines + '    ' + words + '    ' + bytes + ' ' + filename
  process.stdout.write(output)
}

module.exports.curl = function(url){

}






function getPath(filename)  {
  return process.env.PWD + '/' + filename[0];
}

function readFiles(path)  {
  return fs.readFileSync(path, 'utf-8');
}





function sortAlpha(a, b)  {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}


