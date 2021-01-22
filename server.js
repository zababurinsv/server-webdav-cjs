let app = require('./index.js')

let system = {
  port: process.env.PORT || 4000,
  pid:  process.pid
}

app.listen(4000, function () { console.log('__webdav_server__', system) });
