class API {


    //  *** COPY OVER index.js one !! ***

    // fetch(API_DATABASE_URL).then(response => response.json())
    // .then(fetchedArray => { console.log(fetchedArray);
      
    //   renderAllActors(fetchedArray)
    //   // fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 
  
    // })


    // X const function X
    static API_ACTOR_TABLE_URL = "http://localhost:3000/actors"
    static fetchAllOurActors(){

        fetch(this.API_ACTOR_TABLE_URL).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray);
          
          fetchedArray.forEach(actor => {  console.log(actor) 
                              // *** say actor

            const newActor = new Actor(actor)
            // actor-Backend  >  actor-Frontend
            newActor.renderActor(actor)
            // actor-Frontend  >  DOM


            // const{id, name, image, likes} = actor 
            // new Actor(id, name, image, likes)

          
          }) 
      
        })

    }




      static API_PROP_TABLE_URL = "http://localhost:3000/props"
      static fetchAllOurProps(){

        fetch(this.API_PROP_TABLE_URL).then(response => response.json())
        .then(fetchedArray => { console.log(fetchedArray);
          
          fetchedArray.forEach(prop => {  console.log(prop) 
            
            const newProp = new Prop(prop)
            newProp.renderProp(prop)

            Prop.all.push(newProp)
          
          }) 
      
        }) // * * * *  THE FINAL COUNTDOWN  * * * * //

      }
        static fetchMyProps(){

          // TEMP - Hard Coded (ids)
          const samsID = 1
          const corinnasID = 2
 
          fetch(`${this.API_ACTOR_TABLE_URL}/${corinnasID}/props`).then(response => response.json())
          .then(fetchedArray => { console.log(fetchedArray);
        
            const collectionDiv = document.querySelector("#the-prop-room")
                  collectionDiv.innerHTML = ""
                  //  Clearing that Section of the DOM🙃🕳💫😲

            fetchedArray.forEach(prop => {  console.log(prop) 
              
              const newProp = new Prop(prop)
              newProp.renderProp(prop)
            
          }) 
        
          }) // * * * *  THE FINAL COUNTDOWN  * * * * //

        }



}