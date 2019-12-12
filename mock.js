const express = require('express')
const app = express()

app.get('/api/course/list',(req, res) => {
  // 支持跨域调用
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
  res.header('Content-Type', 'application/json;charset=utf-8')
  res.json({
    code: 0,
    list: [
      {name: 'Vue', id:1},
      {name: 'React', id:2},
      {name: 'Node', id:3},
      {name: 'Flutter', id:4},
    ]
  })
})

app.listen(9095,()=>{
  console.log('mock完毕');
})