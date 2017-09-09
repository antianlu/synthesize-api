/**
 * Created by antianlu on 2017/7/6.
 */
var settings = {
  api: {
    host: 'local',
    port: 6001
  },
  mongodb: {
    user: '',
    pass: '',
    db: 'blog',
    prefix: {
      blog: 'blog_',
      cms: 'cms_'
    }
  }
}

module.exports = settings;