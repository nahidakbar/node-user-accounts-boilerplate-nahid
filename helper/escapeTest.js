"use strict";

const escape = require('./escape');
const assert = require('assert');

describe(`escape`, function ()
{
  it(`should escape unescaped`, async function ()
  {
    assert.equal(escape("&&amp;"), "&amp;&amp;");
    assert.equal(escape("<img>"), "&lt;img&gt;");
  })
});
