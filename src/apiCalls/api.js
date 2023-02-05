const getData = (endpoint) => {
   return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${endpoint}`)
    .then(response => {
      if(response.ok) {
         return response.json()
        } else {
          throw new Error("Sorry! Failed to load, please try again later.")
        }
      })
}

export default getData;