//  BASELINE BUILD - RECOMMENDED START UP

    document.addEventListener("click", (event)=>{ console.log("💻🔬👀:: You Just Clicked on == ", event.target) }  )
    ////  'Listen To TheDOM🌌🧘🌠👁✨'


// Initially showTheForm === false 
let showTheForm = false;


// const API_DATABASE_URL = "http://localhost:3000/toys"
//   console.log("Hey! This is our Toy Database URL ->", API_DATABASE_URL)




document.addEventListener("DOMContentLoaded", function(){  console.log("WE, ARE,, LIVE🙆🏾‍♂️✨") 




    const actorFormContainer = document.querySelector(".container");
    

    // Hide & Seek With The Form ;)
    const buttonToShowUsTheForm = document.querySelector("#new-actor-btn");

    buttonToShowUsTheForm.addEventListener("click", () => {

        // Hide & Seek With The Form ;)
        showTheForm = !showTheForm;
        // Working as a Toggle

        // Initially showTheForm === false
        if (showTheForm) {
        actorFormContainer.style.display = "block";
        } else {
        actorFormContainer.style.display = "none";
        }

    });  //   *** LAGGING ON FIRST CLICK


    API.fetchAllOurActors()
      // API.fetchAllOurPets()
    API.fetchAllOurProps()




        
            // function renderAllToys(actorArray){

            //     /* */
            // }
  
  










  
    //=====  BASIC GET FETCH PROCESS  ========
  
    
    
      // API.fetchAllOurActors()
      // API
      
      // API_FOR_ACTORS.fetchAllOurActors()
      // API_FOR_ACTORS.fetchAllOurActors()




    // fetch(API_DATABASE_URL).then(response => response.json())
    // .then(fetchedArray => { console.log(fetchedArray);
      
    //   renderAllActors(fetchedArray)
    //   // fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 
  
    // })
    ////  .then(console.log)  //
  
  
    // console.log(">>>>>>>>>>>", fetchedArray)
    // WE DON'T HAVE ACCESS OUTSIDE OF FETCH  :(
  
  
    // fetch(API_DATABASE_URL).then(response => response.json())
    // .then(console.log)
    // // .then(whatWeFetched => {console.log(whatWeFetched)} ) // What We Are Going to Decide to Do With The Data  
  
  
    // fetch(API_DATABASE_URL).then(response => response.json())
    // .then(fetchedArray => { 
      
    //   fetchedArray.forEach(arrayObj => console.log(arrayObj) ) 
  
    // })  //// !!  ////  (fetchedArray => { 
    // // //then(console.log)  //
  
  
    //=====  BASIC GET FETCH PROCESS  ========
  
  
  
  
  










  
  
  
  
    //=====  POST FETCH PROCESS  ========
  
  
    // Connecting 'JS-Puppet-Strings' to The New Toy Form
    const newToyForm = document.querySelector(".add-toy-form")
  
      newToyForm.addEventListener("submit", event =>{ event.preventDefault(); 
          // console.log("**********", event.target)
          ////  THIS IS NOT CODE THAT WILD MAKE THE POST HAPPEN
          ////  This Console.loging The Main Event of Focus:  >>>> "submit" <<<<
          
  
  
          //  Getting User Form Input Data 📋🖋🤪
          const name = event.target.name.value
          const image = event.target.image.value
            const submit = event.target.submit
              console.log("SHOW ME SUBMIT - IN THE FORM:  ", submit)
              ////  This will ONLY show up upon hitting  The "SUBMIT" Button
  

          fetch(API_DATABASE_URL, {
        
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({

                  "name": name,
                  "image": image,
                  "likes": 222
                  /* WHAT WE ARE POSTING */
                    
            })
        
          })
          .then(response => response.json())
          .then(theThingWePostedButFromTheServer => Actor.renderToy(theThingWePostedButFromTheServer) )
          //.then(theThingWePosted => console.log("Hey! This is what we posted 📋🤓👍:  ", theThingWePosted))  //
  

            event.target.reset()
            //  ***  SHOWING CLEARING VALUES WITH AN EMPTY STRING  *** //

            //  ***  SHOWING PAGE AUTO SCROLLING AFTER POST  *** //
  

      })  ////  addEventListener("submit", event =>{
        // newToyForm.addEventListener("submit", event =>{ console.log(event) })
        // newToyForm.addEventListener("submit", event =>{ console.log(event.target) })


        //  ***  3rd .then() - Getting all Attributes  +  try/catch  *** //
  
        
  
  
  
  
  
    
    //========  DELETE + EDIT FETCH (Based on Buttons)  ========
  
  
      const cardsCollection = document.querySelector("#toy-collection")
        //  console.log(cardsCollection)  //// ***
  
  
  
  
  
  
  
  
      //  *** ?? *** ASK *** Why Not Submit
      cardsCollection.addEventListener("click", event =>{ event.preventDefault(); 
        // console.log(event.target)  ////  
  
  
          // if(event.target.matches(".delete-btn")){ console.log(event.target) }
          // if(event.target.matches(".delete-btn")){ console.log(event.target.dataset.id) }
        
          
          if(event.target.matches(".delete-btn")){   //  ***  (===)  MAKE A VIDEO!!
            
            console.log(event.target) 
            
            
            const id = event.target.dataset.id
            
            const geThatOuttaHeeyah = document.getElementById(id)
            
            
            fetch(`${API_DATABASE_URL}/${id}`, {
                
                method: "DELETE",
                headers: { "Content-Type": "application/json" }
                
            })
            .then(response => response.json())
            .then( 
                
                
                // event.target.closest(".card").remove() 
                
                geThatOuttaHeeyah.remove()
                
                
                )        
                
                
                
                // fetch(`${API_DATABASE_URL}/${id}`, {
                    
                    //   method: "DELETE",
                    //   headers: { "Content-Type": "application/json" }
                    
                    // })
                    // .then(response => response.json())   
                    // .then(theThingWeJustDeleted => console.log("You Just Deleted  ->", theThingWeJustDeleted))
                    
                    
                    
                    
                }
                
                
                
                
                if (event.target.matches(".like-btn") ) {   // || event.target.matches("img") 
                       
                        // const pTagWithLikes = event.target.parent 
                        // // closest(".card").querySelector("p")

                    const pTagWithLikes = event.target.closest(".card").querySelector("p")

                    // const pTagWithLikes = document.getElementById(id)  ***
                    // const pTagWithLikes = event.target.previousElementSibling
                    
                    
                    const likeCount = parseInt(pTagWithLikes.textContent)  // ***  parsInt  ***
                    // parsInt is like (.to_i) in (Ruby) 🙌
                    const newLikes = likeCount + 1
                    
                    const id = event.target.dataset.id
                    
                    // Make a PATCH/EDIT to   >  /toys/:id
                    const bodyObj = {
                        
                        likes: newLikes
                        
                    } // Sending the Number of Likes
                    
                    
                    
                    
                    fetch(`${API_DATABASE_URL}/${id}`, {
                        method: "PATCH",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(bodyObj),
                    })
                    .then(r => r.json())
                    .then(updatedToy => {
                        
                        console.log(updatedToy)
                        // pessimistic approach:
                        pTagWithLikes.textContent = `${updatedToy.likes} Cheers`
                        
                    })
                    // Update the number of likes on the DOM
                    // Optimistic approach:
                    // pTagWithLikes.textContent = `${newLikes} Likes`
                    
                }
                
                
                
                if (event.target.matches("h2")) {  
                    
                    
                    //  ***  can also show it with a class name  *** //
  

                        // let h2Clicked = false ? == "yes" : "no"
                        // let nameH2 = event.target  ==


                    const nameH2 = event.target
                        console.log(nameH2)
                        console.log(nameH2.innerText)

                    //       const nameH2prevState = event.target
                    //       //  Hold a Copy of the "Previous State"😏🗃   //  ****
                    //     console.log(nameH2.innerText)
                
                  
                    //     //nameEditForm = document.createElement()
                    
                        const formForNameH2 = document.createElement("form")
                              formForNameH2.innerHTML = `
                      
                                  Changing Name:
                                  <form class="name-change-form">
                          
                                  <h4>Name:</h4>
                                  <input
                                  type="text"
                                  name="name"
                                  value=""
                                  placeholder={nameH2.innerText}
                                  class="input-text"
                                  />        
                                  <br />
                                  <input
                                  type="submit"
                                  name="submit"
                                  value="Update Actor Name!!!!"
                                  class="submit"
                                  />
                                  </form>
      
                                  `
                             console.log(formForNameH2)

                             const samsCard = document.getElementById(nameH2.dataset.id)
                             //  const samsCard = document.getElementById(1)
                             console.log(">>>>>>>>", samsCard)
                // nameH2.document.querySelector


                //  ***  EDIT A STATIC FORM  ***

                ////  PUT AN EVENT LISTENER ON THE WHOLE FORM !!!!
                



                




        //     //   // const pTagWithLikes = document.getElementById(id)  ***
        //     // // const pTagWithLikes = event.target.previousElementSibling
            
    
        //     // const likeCount = parseInt(pTagWithLikes.textContent)  // ***  parsInt  ***
        //     //   // parsInt is like (.to_i) in (Ruby) 🙌
        //     // const newLikes = likeCount + 1
            
     
      
        //     // // Make a PATCH/EDIT to   >  /toys/:id


            let updatedName = event.target.name.value

            const bodyObj = {
    
              name: updatedName
    
            } // Sending the New Name
      
    
              const id = event.target.dataset.id
    
    
              fetch(`${API_DATABASE_URL}/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(bodyObj),
              })
              .then(r => r.json())
              .then(updatedToy => {
    
                console.log(updatedToy)
                // pessimistic approach:
                // pTagWithLikes.textContent = `${updatedToy.likes} Cheers`
    
              })
              // Update the number of likes on the DOM
              // Optimistic approach:
              // pTagWithLikes.textContent = `${newLikes} Likes`
            
        }
        //else if(event.target.matches("form")){  console.log("OKAY WE'RE DONE! 😅")  }
        // else if(event.target.matches("form")){  console.log("OKAY WE'RE DONE! 😅")  
        
        //     // nameH2 = nameH2prevState
        
        // }
        ////   ***   Show Ternary  ***  ////





  
  
  





      })  ////  !!  ////    cardsCollection.addEventListener("click", event =>{ event.preventDefault(); 




})    ////    !!    ////    document.addEventListener("DOMContentLoaded", function(){ 










// document.addEventListener("DOMContentLoaded", function(){ console.log("WE, ARE,, LIVE🙆🏾‍♂️✨") })













            ////////  Just An innerText -VS- innerHTML Example
            //
            // cardDiv.innerText = `<p> Tsam </p>`
            //     console.log(cardDiv)
            // cardDiv.innerHTML = `<p> HSAM </p>`
            //     console.log(cardDiv)
            ////////