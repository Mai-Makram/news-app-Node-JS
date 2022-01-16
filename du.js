


console.log("wow helloooo")
let x = async() => {
    try{
        const res = await fetch('http://localhost:5000/news')
        const data = await res.json()
        console.log(data)
        document.getElementById('des').innerText = data.data[0].description
        document.getElementById('tittle').innerText = data.data[0].title
        document.images[0].src = data.data[0].urlToImage
        document.URL = data.data.urlToImage
        //document.getElementsByTagName('img').innerSrc = data.data.urlToImage.src

    }catch(e){
        console.log(e)
    }
}
x()
//document.getElementById('dis').inner