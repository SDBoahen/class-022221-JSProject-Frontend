class API {


    //  *** COPY OVER index.js one !! ***


    // X const function X
    static API_DATABASE_URL = "http://localhost:3000/toys"
    static fetchAllOurActors(){

        fetch(this.API_DATABASE_URL).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray);
          
          //  ***
          fetchedArray.forEach(arrayObj => {  console.log(arrayObj) 
            














            
            // const newActor = new Actor(arrayObj)
            // newActor.renderActor(arrayObj)


            // const{id, name, image, likes} = actor 
            // new Actor(id, name, image, likes)

          
          }) 
      
        })

    }


}