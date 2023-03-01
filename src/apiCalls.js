function getApiData(data) {
    return fetch(`https://api.punkapi.com/v2/${data}`)
    .then((res) => {
        if(res.ok){
            return res.json()
        }
        else{
            throw Error('network response was not ok')
        }
    })
  }
  
  export default getApiData 

  