var fs = require('fs');
var path = require('path');
var Handlebars = require("handlebars");

console.log("Reading json data from ", process.argv[2]);

var questionsJson = fs.readFileSync(process.argv[2], "utf-8");
// questionsJson is a buffer
var html = buildHtml(JSON.parse(questionsJson));

function buildHtml(fileData) {
  var template = fs.readFileSync(path.resolve(path.join(__dirname, 'template.hbs')), "utf-8");
  var renderTemplate = Handlebars.compile(template);
  // console.log(fileData);
  var html = renderTemplate(fileData);
  // Write to build folder. Copy the built file and deploy
  fs.writeFile("./build/index.html", html, err => {
    if (err) console.log(err);
    console.log("File written succesfully");
  });
}