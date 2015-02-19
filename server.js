var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
// var permalinks = require('metalsmith-permalinks');
var watch = require('metalsmith-watch');
var templates = require('metalsmith-templates');
var serve = require('metalsmith-serve');
var Handlebars = require('handlebars');
var fs = require('fs');
var partialsDir = __dirname + '/templates/partials/';

Handlebars
  .registerPartial('livereload', fs.readFileSync(partialsDir + 'livereload.hbt').toString());

metalsmith(__dirname)
  .use(markdown())
  .use(templates('handlebars'))
  .use(serve({
    port: 8000,
    verbose: true
  }))
  .use(watch({
    pattern : [__dirname + '/templates/**/*', '**/*'],
    livereload: true
  }))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
  });
