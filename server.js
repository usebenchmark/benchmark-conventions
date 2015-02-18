var metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
// var permalinks = require('metalsmith-permalinks');
var templates = require('metalsmith-templates');
var serve = require('metalsmith-serve');

metalsmith(__dirname)
  .use(markdown())
  .use(templates('handlebars'))
  .use(serve({
    port: 8000,
    verbose: true
  }))
  .build(function (err) {
    if (err) {
      console.log(err);
    }
  });
