"use strict";

const assert = require('assert');
const password = require('./strongPassword');

describe(`generate password`, function ()
{
  it(`generates strong password`, function ()
  {
    for (let x = 0; x < 10; x++)
    {
      assert(password.checkStrongPassword(password.generate(10)));
    }
    password.generate();
  })

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

  it('sequence', function ()
  {
    password.checkStrongPassword('Abbabba135!');
  })

  const BAD_PASSWORDS = ['abbabba135!', 'Abbab ba135!', 'a', 'aaaaaaaaaa', '1111111111', '!!!!!!!!!!', 'A1b2A1b2A1', 'AbcabbA135!'];

  BAD_PASSWORDS.forEach(function (badPassword)
  {
    it(badPassword, function ()
    {
      try
      {
        password.checkStrongPassword(badPassword);
      }
      catch (e)
      {
        console.log(e.message)
        return;
      }
      throw new Error('fail');
    })
  });


});
