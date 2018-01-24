"use strict";

const assert = require('assert');
const Auth = require('./GithubAuth');

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
