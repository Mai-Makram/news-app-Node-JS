const request = require('request')
/*const url = "http://api.weatherstack.com/current?access_key=e22dd002d6fcfbea61306730ee858d04&query=30.050%20,31.250"
request({url,json:true},(error,response)=>{
    if(error){
        console.log("error has occured")
    }else if(response.body.error){
        console.log(response.body.error.type)
    }else{
        console.log("in"+" "+ response.body.location.region+" "+ "is the tempreture"+" "+ response.body.current.temperature)
    }
    //console.log(response.body.location.name)
   // const data =JSON.parse(response.body)
    //console.log(data.location.name)
})*/

////////////////////////

const forcast=(callback)=>{
    const url="https://newsapi.org/v2/everything?q=tesla&from=2021-12-15&sortBy=publishedAt&apiKey=b3ae2940b2a84f849304606a4e39e7c8"
    request({url,json:true},(error, response)=>{
        if(error){
            callback('error has occured', undefined)
        }
        else if(response.body.message){
            callback(response.body.message, undefined)
        }
        else if(response.body.articles.length == 0){
            callback('errrrror yaya', undefined)
        }
        else{
            //callback(undefined,{title:response.body.articles[0].title,description:response.body.articles[0].description,urlToImage:response.body.articles[0].urlToImage} )
            callback(undefined,response.body.articles )

            //callback(undefined, )
        }
    })
}

/*forcast(30.05020, 31.250,(error,data)=>{
    console.log('error ',error)
    console.log('data ', data)
})*/

module.exports = forcast