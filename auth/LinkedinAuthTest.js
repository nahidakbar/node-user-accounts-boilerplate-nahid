"use strict";

const assert = require('assert');
const Auth = require('./LinkedinAuth');

describe(Auth.name, function ()
{
  it(`coonstruct`, async function ()
  {
    new Auth({})
    new Auth({
      proxy: true
    })
  })
});
