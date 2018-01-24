"use strict";

const assert = require('assert');
const
{
  assign
} = require('./disabled');

describe(`disabled`, function ()
{
  it(`unassignable`, async function ()
  {
    try
    {
      await assign();
    }
    catch (e)
    {
      return
    }
    throw new Error('fail')
  })
});
