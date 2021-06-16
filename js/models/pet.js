

    console.log("Pet Tingz!")



class Pet{


    static all = []


    constructor({id, name, mood, hungry, image, toyID}){

            this.id = id,
        this.name = name,
        this.mood = mood,
        this.hungry = hungry,
        this.image = image
        this.toyID = toyID

        Pet.all.push(this)

    }


    // WE DON'T NEED INSIDE OF A CLASS  -->  //const  NOR  function
    makeACard =()=>{ console.log(this)
        
        return `
    
            <h2 id="lesseeee" data-id="${this.id}" data-owner="${this.toyID}">${this.name}</h2>
            <img src=${this.image} class="toy-avatar" />
            <h2 id="lesseeee" data-id="${this.id}">Mood: ${this.mood}</h2>
            <h2 id="lesseeee" data-id="${this.id}">Hungry: ${this.hungry}</h2>
            

            
            
    
            `
            // <h2 id="lesseeee" data-id="${this.id}">${this.toy.name}</h2>
            // <h2 id="lesseeee" data-id="${this.id}">${this.name}</h2>
    }
    renderPet =(pet)=> {  // Creating a Display in a Card for each pet
    

        // Create the Outer Wrapping/Containing Element 
        ////  - In this case an empty <div></div>
        const cardDiv = document.createElement("div")
    
        // Assigning any classes etc to it
        ////  - In this case: class="card"
        cardDiv.classList.add("card")
            //  Adding a (class=) to  (cardDiv)
            ////  <div class="card"><div>
            cardDiv.setAttribute("data-id", pet.id)
            // Addind an (id=) to (cardDiv)
            ////  <div class="card" id={pet.id}><div>
            cardDiv.id = pet.id

            cardDiv.innerHTML = this.makeACard()

        // use innerHTML to create the inner elements
        // cardDiv.innerHTML = makeACard(pet)
        
        
        const collectionDiv = document.querySelector("#back-stage")
        // *** TRY OUT AS STATIC *** //
        collectionDiv.append(cardDiv)

        
        
    } 



    
}