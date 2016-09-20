'use strict'
import test from 'ava'
import fn from './'

test('package managers', t => {
  const result = Object.keys(fn)
  t.is(result.length, 26)
})
