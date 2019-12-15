'use strict'

const cnUtil = require('./')
const Buffer = require('safe-buffer').Buffer
const assert = require('assert')

var validAddressPrefix = 986822
var addressPrefix = cnUtil.address_decode(new Buffer('aDonT1F3EttcBQpFg2Xd2ySBaFDeaW8prFSMMjU4nwjSNRFzNVzLt9q5pJsvsY2by8E4BQqeEkFog89cjt3AJEUG61hsnN7nZ9'))
console.log("Address Prefix: ", addressPrefix)

assert.deepEqual(validAddressPrefix, addressPrefix)
