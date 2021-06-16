

    console.log("WE GOT ALL OUR PROPS??? 🎤👀")



class Prop{



    static all = []


    constructor({id, name, image, currently_with, actorID}){

            this.id = id,
        this.name = name,
        this.image = image,
        this.currently_with = currently_with,
        this.actorID = actorID

        Prop.all.push(this)

    }


    // WE DON'T NEED INSIDE OF A CLASS  -->  //const  NOR  function
    makeACard =()=>{ console.log(this)
        
        return `
    
            <h2 id="lesseeee" data-id="${this.id}" data-owner="${this.actorID}">${this.name}</h2>
            <img src=${this.image} class="toy-avatar" />
            <h2 id="lesseeee" data-id="${this.id}">Currently With: ${this.currently_with}</h2>            
    
            `
            // <h2 id="lesseeee" data-id="${this.id}">${this.toy.name}</h2>
            // <h2 id="lesseeee" data-id="${this.id}">${this.name}</h2>
    }
    renderProp =(prop)=> {  // Creating a Display in a Card for each prop
    

        // Create the Outer Wrapping/Containing Element 
        ////  - In this case an empty <div></div>
        const cardDiv = document.createElement("div")
    
        // Assigning any classes etc to it
        ////  - In this case: class="card"
        cardDiv.classList.add("card")
            //  Adding a (class=) to  (cardDiv)
            ////  <div class="card"><div>
            cardDiv.setAttribute("data-id", prop.id)
            // Addind an (id=) to (cardDiv)
            ////  <div class="card" id={prop.id}><div>
            cardDiv.id = prop.id

            cardDiv.innerHTML = this.makeACard()

        // use innerHTML to create the inner elements
        // cardDiv.innerHTML = makeACard(prop)
        
        
        const collectionDiv = document.querySelector("#back-stage")
        // *** TRY OUT AS STATIC *** //
        collectionDiv.append(cardDiv)

        
        
    } 





}
