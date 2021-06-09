

    console.log("WE GOT OUR ACTORS IN THE HOUSE?? 🎤👀")




// (3)
// * * * * CLASS SYNTAX * * * *
class Actor{


    static all = []
    ////  state😏🗃 of our Actors  -- On the Frontend
    ////  similar to  (@@all)


    constructor(name, imageURL, knownForSaying){

            this.name = name,
            this.image = imageURL,
                this.catchPhrase = knownForSaying

        Actor.all.push(this)
        //  Actor.all[]  <<  this  ~  @actor

    }

    
    //  DON'T need the Function Syntax for
    sayCatchPhrase(){ 
        
        console.log(`${this.catchPhrase}`) 
    
    }
    //sayCatchPhrase(){ console.log(`${this.catchPhrase}`) }
    // this.catchPhrase = function(){ console.log(`${knownForSaying}`) }




}
const sam = new Actor("Sam", "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-6bb69b64ec24-512", 
    "WE, ARE,, LIVE!")
const jass = new Actor("Jass", "Jass", 
"-hehe-")

    // const * = new Actor("", "", 
    // "")
    ////  How We Would Make More Actors


    //  ***  MAKE US ALL DO SOMETHING  ***


// --------------------------------


// MONTHS
//// [ J , F , M , A ]























// // (2)    

// //// !!💫 (@@all)
// //  Constructor  --  HoverOver😉✨

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























// // Factory Function
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