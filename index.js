//  BASELINE BUILD - RECOMMENDED START UP

    document.addEventListener("click", (event)=>{ console.log("💻🔬👀:: You Just Clicked on == ", event.target) }  )
    ////  'Listen To TheDOM🌌🧘🌠👁✨'


// Initially showTheForm === false 
let showTheForm = false;


const API_DATABASE_URL = "http://localhost:3000/actors"
  console.log("Hey! This is our (Actor) Database URL - In (index.js) ->", API_DATABASE_URL)




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
      ////   API.fetchAllOurPets()
    API.fetchAllOurProps()
      API.fetchMyProps()




      // API_FOR_ACTORS.fetchAllOurActors()
      // API_FOR_PROPS.fetchAllOurProps()


        
            // function renderAllToys(actorArray){

            //     /* */
            // }
  
  










  
  
  
  










  
  
  
  
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
  
  
      const cardsCollection = document.querySelector("#back-stage")
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
                

                  
                
                // let boolFormAlreadyDereOrNah = false
                if (event.target.matches("h2") || event.target.matches(".edit-btn")) {  
                    
   

                    const cardEditing = event.target.closest(".card")
                    const cardEditingName = cardEditing.querySelector("h2").innerText
                    console.log(cardEditingName)  //
                          


                    // const nameH2 = event.target
                    //     console.log(nameH2)
                    //     console.log(nameH2.innerText)

                    const editForm = document.createElement("form")
                    editForm.innerHTML = `
            
                        <br><br>
                        <h2>Editing This Actor - In index.js🏙:</h2>
                        <form class="name-change-form">

                        <br>
                        <button class="close-button">✖️CLOSE✖️THE✖️EDIT✖️FORM✖️</button>
                        <br>

                        <h4>Name:</h4>
                        <input
                        type="text"
                        name="name"
                        value="${cardEditingName}"
                        placeholder="${cardEditingName}"
                        class="input-text-name"
                        />        
                          <br />
                        <h4>Image URL:</h4>
                        <input
                        type="text"
                        name="image"
                        value=""
                        placeholder=""
                        class="input-text-image"
                        />        
                          <br />
                        <input
                        type="submit"
                        name="submit"
                        value="Update Actor Name!!!!"
                        class="submit-button"
                        />
                        </form>
                        <br><br><br><br>

                        `
                      console.log(editForm)  //

                    cardEditing.append(editForm)
                      console.log(">>>>>>>>", cardEditing)  //


                    // EVENT LISTENER FOR:  CLOSE BUTTON ON POP-UP-EDIT FORM
                    const closeButton = editForm.querySelector(".close-button")
                          closeButton.addEventListener("click", (event)=>{
                            console.log("✖️CLOSE✖️", event)

                            editForm.remove()
                            // THIS IS WHAT ACTUALLY REMOVES THE FORM

                          })
                        
                    
                    // EVENT LISTENER FOR:  SUMBIT BUTTON ON POP-UP-EDIT FORM
                    editForm.addEventListener("click", (event)=>{  event.preventDefault();
                      console.log("MAKE A CHANGE!💫✨")  //

                        if(event.target.matches(".submit-button")){

                          let updatedName = editForm.querySelector(".input-text-name").value
                              console.log(updatedName)
                          let updatedImage = editForm.querySelector(".input-text-image").value
                              console.log(updatedImage)

                          const bodyObj = {

                            name: updatedName,
                            image: updatedImage 

                          }// Sending the New Name

                            const cardEditingID = cardEditing.id
                              console.log(cardEditingID)

                          //     // // Make a PATCH/EDIT to   >  /actor/:id
                          fetch(`${API_DATABASE_URL}/${cardEditingID}`, {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(bodyObj),
                          })
                          .then(r => r.json())
                          .then(updatedActor => {  
                              console.log("DID IT CHANGE????💻👀    ", updatedActor)

                              cardEditing.querySelector("h2").innerText = updatedActor.name
                              cardEditing.querySelector("img").src = updatedActor.image
                          })
                        }


                    })

                //  ***  can also show it with a class name  *** //

                //  ***  EDIT A STATIC FORM  ***

                ////  PUT AN EVENT LISTENER ON THE WHOLE FORM !!!!

                ////   ***   Show Ternary  ***  ////
            
        }






  
  
  





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







  
//=====  BASIC GET FETCH PROCESS  ========


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
  







