var fs = require('fs');
var Handlebars = require("handlebars");

// var fileName = 'output.html';
// var stream = fs.createWriteStream(fileName);

// stream.once('open', function(fd) {
//   console.log("argv0", process.argv[0]);
//   console.log("argv1", process.argv[1]);
//   console.log("argv2", process.argv[2]);
//   console.log("argv3", process.argv[3]);
//   var questionsJson = fd.readFile(process.argv[2]);
//   var html = buildHtml(questionsJson);

//   stream.end(html);
// });

  console.log("argv0", process.argv[0]);
  console.log("argv1", process.argv[1]);
  console.log("argv2", process.argv[2]);
  console.log("argv3", process.argv[3]);

var questionsJson = fs.readFileSync(process.argv[2], "utf-8");
var html = buildHtml(JSON.parse(questionsJson));

function buildHtml(fileData) {
  var template = Handlebars.compile("{{name}}");
  console.log(fileData);
  var html = template(fileData);
  fs.writeFileSync("output.html", html);
  console.log("Success");
}