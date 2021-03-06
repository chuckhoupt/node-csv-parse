// Generated by CoffeeScript 1.10.0
var StringDecoder, parse;

StringDecoder = require('string_decoder').StringDecoder;

parse = require('./index');

module.exports = function(data, options) {
  var decoder, parser, records;
  if (options == null) {
    options = {};
  }
  records = [];
  if (data instanceof Buffer) {
    decoder = new StringDecoder();
    data = decoder.write(data);
  }
  parser = new parse.Parser(options);
  parser.push = function(record) {
    return records.push(record);
  };
  parser.__write(data, false);
  if (data.end) {
    parser.__write(data.end(), true);
  }
  parser._flush((function() {}));
  return records;
};
