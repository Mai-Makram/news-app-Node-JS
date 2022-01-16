const express = require('express')
const app = express()
const port = 5000


const path = require('path')
const pathdirect = path.join(__dirname,'../puplic')
app.use(express.static(pathdirect))

app.set('view engine', 'hbs');
//to can change name and place of views
const viewpath =path.join(__dirname,'../templets/vi')
app.set('views',viewpath)

//for fix partials
const hbs = require('hbs')
const { request } = require('express')
const partialsPath = path.join(__dirname,'../templets/partials')
hbs.registerPartials(partialsPath)

/*app.get('/', (req, res) => {
  res.render('index',{
    title:'hi from index hbs',
    name:'my name is ali'
  })
})*/
app.get('/', (req, res) => {
  forcast((error,data)=>{
    if(error){
      return res.send({error})
    }
    res.render('index',{data:data})
})
})


const forcast = require('./news')

/*app.get('/news', (req, res) => {
  forcast((error,data)=>{
    if(error){
      return res.send({error})
    }
    res.send({data:data})
})
})*/

/*app.get('/help', (req, res) => {
  res.render('help',{
    title:'hi from help hbs',
    msg:'help me plz..',
    name:'my name is omar'
  })
})*/
/*app.get('/weather', (req, res) => {
  if(!req.query.location){
    res.send({
      error:"error enter location"
    })
  }else{
    res.send({
      weather:"cold",
      location:req.query.location
    })
  }
  
})*/

/*app.get('*', (req, res) => {
  res.render('null')
})*/

/*app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/weather', (req, res) => {
    res.send('<h1>weather page</h1> <p>helloooo wether</p>')
  })

  app.get('/about', (req, res) => {
    res.send('abouttttttt page')
  })

  app.get('/help', (req, res) => {
    res.send({
      name:"omar",
      age:15
    })
  })*/


app.listen(port, () => {
  console.log(`Example app listening `)
})