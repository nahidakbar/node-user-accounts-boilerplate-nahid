"use strict";

const escape = require('escape-html');
const unescape = require('unescape-html');

/**
 * Encodes unencoded bits of string.
 *
 * E.g. escape("&amp;&") should return "&amp;&amp;"
 *
 * @param {string} content content to encode
 * @return {string}
 */
module.exports = function (content)
{
  return escape(unescape(content));
}
