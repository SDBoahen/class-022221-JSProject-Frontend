

    console.log("WE GOT OUR ACTORS IN THE HOUSE?? π€π")




// (3)
// * * * * CLASS SYNTAX * * * *
class Actor{


    static all = []
    ////  stateππ of our Actors  -- On the Frontend
    ////  similar to  (@@all)


    //  This is What We Use When We Do:   { * } = new Actor({*})
    constructor({id, name, image, likes}){
    // constructor({name, image, likes}){
        //  With Destructuring 
        //  * * * *  ATTRIBUTES SHOULD BE PASSEED IN THE SAME ORDER AS IN JSON DATA/TABLE/ECT--
                //   ***  Show Without Passing in a Whole Object  ***
                    //    Without Destructuring 
                    ////  constructor(name, image, likes){

            this.id = id
        this.name = name,
        this.image = image,
        this.likes = likes,

        Actor.all.push(this)
        //  Actor.all[]  <<  this  ~  @actor

    }








    // WE DON'T NEED INSIDE OF A CLASS  -->  //const  NOR  function
    makeACard =()=>{ console.log(this)
        
        return `
  
            <h2 id="lesseeee" data-id="${this.id}">${this.name}</h2>
            <img src=${this.image} class="actor-icon" />
            π<p> ${this.likes} Cheers </p>π 
            <button data-id="${this.id}" class="like-btn">β¨ππCHEER!ππβ¨</button>
            <button data-id="${this.id}" class="edit-btn"> π­EDIT THIS ACTORπ© </button>
            <button data-id="${this.id}" class="delete-btn"> DELETE?ππ«π </button>
  
            `
    
    }
    renderActor =(actor)=> {  // Creating a Display in a Card for each Actor
  

        // Create the Outer Wrapping/Containing Element 
        ////  - In this case an empty <div></div>
        const cardDiv = document.createElement("div")
  
        // Assigning any classes etc to it
        ////  - In this case: class="card"
        cardDiv.classList.add("card")
          //  Adding a (class=) to  (cardDiv)
          ////  <div class="card"><div>
          cardDiv.setAttribute("data-id", actor.id)
          // Addind an (id=) to (cardDiv)
          ////  <div class="card" id={actor.id}><div>
          cardDiv.id = actor.id

        // Setting the InnerHTML for the (cardDiv)
        ////  Actually Creates the Inner Elements/Tags  
        cardDiv.innerHTML = this.makeACard()
        



        cardDiv.addEventListener("click", (event) => { 
            console.log("π§β¨πΆπ²Ooooooooh,Classy!πππβ¨    >>>>  ", event.target)

            if(event.target.className === "actor-icon"){
                console.log("With  (===)  ", event.target) }
            if(event.target.matches("img")){ 
                console.log("With  (.matches)  ", event.target) }

            if(event.target.matches(".edit-btn")){

                const editFormClassyTho = document.createElement("form")
                    editFormClassyTho.innerHTML = `
            
                        <br><br>
                        <h2>Editing This Actor In a Class!β¨:</h2>
                        <form class="name-change-form">

                        <br>
                        <button class="close-button">βοΈCLOSEβοΈTHEβοΈEDITβοΈFORMβοΈ</button>
                        <br>

                        <h4>Name:</h4>
                        <input
                        type="text"
                        name="name"
                        value="${cardDiv.querySelector("h2").innerText}"
                        placeholder="${cardDiv.querySelector("h2").innerText}"
                        class="input-text-name"
                        />        
                          <br />
                        <h4>Image URL:</h4>
                        <input
                        type="text"
                        name="image"
                        value="${cardDiv.querySelector("img").src}"
                        placeholder="${cardDiv.querySelector("img").src}"
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
                      console.log(editFormClassyTho)  //

                    cardDiv.append(editFormClassyTho)
                      console.log(">>>>>>>>", cardDiv)  //


            }

        })

        


        const collectionDiv = document.querySelector("#back-stage")
        // *** TRY OUT AS STATIC *** //
        collectionDiv.append(cardDiv)
        // SSSlap it on the DOM (toy-collection)
        
        
    } 
    //  ***  SHOW HOW TO ADJUST SIZING  ***  //
    //  ***  SHOW THIS WITH CREATE ELEMENT  *** //







}








// const sam = new Actor("Sam", "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-6bb69b64ec24-512")
// const jass = new Actor("Jass", "Jass")
//     const sam = new Actor("Sam", "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-6bb69b64ec24-512", 
//         "WE, ARE,, LIVE!")
//     const jass = new Actor("Jass", "Jass", 
//     "-hehe-")

    // const * = new Actor("", "", 
    // "")
    ////  How We Would Make More Actors


    //  ***  MAKE US ALL DO SOMETHING  ***


// --------------------------------


// MONTHS
//// [ J , F , M , A ]























// // (2)    

// //// !!π« (@@all)
// //  Constructor  --  HoverOverπβ¨

// Actor.all = []  ////  vv !! vv


// function Actor(name, imageURL, knownForSaying){

//         this.name = name,
//         this.image = imageURL,

//         Actor.prototype.catchPhrase = function(){ console.log(`${knownForSaying}`) }
//         // this.catchPhrase = function(){ console.log(`${knownForSaying}`) }
    

//     Actor.all.push(this)

// }
// const sam = new Actor("Sam", "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-6bb69b64ec24-512", 
// "WE, ARE,, LIVE!")
// const jass = new Actor("Jass", "Jass", 
// "-hehe-")


//     // crew = []
//     // crew.push(sam)
//         // Actor.all = []  //  ^^^^
//         //  Actor.all.push(this)



// // --------------------------------























// // Factory Functions
// // Think - Factories -- Machines, Pumping Out Copies of Something
// // (1) 
// function actorMaker(name, imageURL, knownForSaying){

//     return{
//         name: name,
//         image: imageURL,


//         catchPhrase: function(){ console.log(`${knownForSaying}`) }

//     }

// }

// const sam = actorMaker("Sam", "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-6bb69b64ec24-512", 
//     "WE, ARE,, LIVE!")
// const jass = actorMaker("Jass", "Jass", 
// "-hehe-")

// // sam.catchPhrase  !!


//     crew = []
//     crew.push(sam)
//     crew.push(jass)


// // --------------------------------














        // constructor(name, imageURL, knownForSaying){

        //         this.name = name,
        //         this.image = imageURL,
        //             this.catchPhrase = knownForSaying

        //     Actor.all.push(this)
        //     //  Actor.all[]  <<  this  ~  @actor

        // }

    
        //  DON'T need the Function Syntax for
        // sayCatchPhrase(){ 
            
        //     console.log(`${this.catchPhrase}`) 
        
        // }
    //sayCatchPhrase(){ console.log(`${this.catchPhrase}`) }
    // this.catchPhrase = function(){ console.log(`${knownForSaying}`) }












// const renderAllActors =(actorArray)=> {
  
  
        //     actorArray.forEach(actor => { 

        //         const newActor = new Actor(actor)
        //             // const sam = new Actor("Sam", "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-6bb69b64ec24-512")
                    
        //             console.log("β¨πβ¨  >>", newActor)

        //         newActor.renderActor(actor) 
        
        //     })
        //         ////  renderToy(actor) 

        //         ////  Using a (ForOfLoop)
        //         // for(let actor of actorArray){
        
        //         //   renderToy(actor)
                    
        //         // }
  

// }