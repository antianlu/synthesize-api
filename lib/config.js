/**
 * Created by antianlu on 2017/7/6.
 */
const env = process.env.NODE_ENV || 'development'

const config = require('../config/' + env)

module.exports = config;