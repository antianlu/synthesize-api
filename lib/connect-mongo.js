/**
 * Created by antianlu on 2017/3/20.
 */

const mongoose = require('mongoose')
const mongodb = global.config.mongodb

const hostNames = mongodb.hostNames.join(',')
const mongodbUrl = 'mongodb://' + mongodb.user + ':' + mongodb.pass + '@' + hostNames + '/' + mongodb.db
// 分页插件
require('mongoose-pagination')

mongoose.Promise = global.Promise
mongoose.connect(mongodbUrl, {
  mongos: true,
  server: {
    auto_reconnect: true
  }
})
// mongoose.connect(mongodbUrl, {auth: {authdb: mongodb.db}});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  console.log('Connect to mongoose success')
  console.log(mongodbUrl)
})

module.exports = mongoose
