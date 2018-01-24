"use strict";

const assert = require('assert');
const password = require('./password');

describe(`password`, function ()
{
  it(`must be string`, async function ()
  {
    try
    {
      await password.assign({}, 'password', 1234, password, {}, {});
    }
    catch (e)
    {
      return
    }
    throw new Error('fail')
  })

  it(`must have crypt`, async function ()
  {
    try
    {
      await password.assign({}, 'password', 'asdf', password, {}, {});
    }
    catch (e)
    {
      return
    }
    throw new Error('fail')
  })

});
