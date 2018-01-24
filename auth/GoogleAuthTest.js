"use strict";

const assert = require('assert');
const Auth = require('./GoogleAuth');

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
