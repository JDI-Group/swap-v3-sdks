
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./swap-next-sdk.cjs.production.min.js')
} else {
  module.exports = require('./swap-next-sdk.cjs.development.js')
}
