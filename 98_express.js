// this is a packge of node.js, we can run backend in js via express, we can make a server
// is ko install krny k liye write "npm install express" in terminal and after that
// and then "expressjs.com" pr ja kr "getting started pr ja kr "hello world" pr ja kr 
// code copy kr k yhan paste kro,, which is following code

const express = require('express')
const path = require('path')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
//   res.send('in about') //yani koi bhi jab /about pr jay ga to us ko "in about" likha 
//   hua show ho jay, isi trah m yha "in about" ki jga html page ka link bbhi de skti hu, 
// html page ka link deny k liye mujy esy krna ho ga
  res.sendFile(path.join(__dirname, './98_express_html.html')); //or is k ilava "const path = require('path')"
//   y bhi krna pry ga ofcourse, path ek built-in module h node.js ka , jo module built-in
// nhi h un ko external modules kehty hn or un ko npm k zrye install krna prta h
})

app.get('/map', (req, res) => {
  res.send('in map')
})

app.get('/contact', (req, res) => {
  res.send('cotacts are shpwn here')
})

app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`) //yhan is ki jga neechy vali line
// likhyn gy to server chaly ga 
  console.log(`Example app listening on port http://localhost:${port}`)
//   server kholny k liye is file ko terminal m ja kr run kro like "node ./98_express.js"
// then jo link show ho ga us pr ctrl dba kr click kro

})

// jab bhi kuch nia add hota h to hr baar CTRL+C likh kr doobara page code ko run 
// krna prta h , is s bachny k liye best way y h k ap "npm i -g nodemon", jis s sirf
// ctrl+s krny s kaam ho jay ga, lekin is k liye ap ko terminal pr node ki jga 
// nodemon likh kr output show krni ho gi like this:  nodemon ./98_express.js