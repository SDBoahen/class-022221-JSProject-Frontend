

    console.log("WE GOT ALL OUR PROPS??? 🎤👀")



class Prop{



    static all = []


    constructor({id, name, image, currently_with, actorID}){

            this.id = id,
        this.name = name,
        this.image = image,
        this.currently_with = currently_with,
        this.actorID = actorID

        // COMMENTED OUT BECAUSE:
        ////  We Use Our Class Constructor for Any Creation of a Frontend Instance of an Object of this Class 
        // Prop.all.push(this)

    }


    // WE DON'T NEED INSIDE OF A CLASS  -->  //const  NOR  function
    makeACard =()=>{ console.log(this)
        
        return `
            <br><br>
            ----------------
            <h2 id="lesseeee" data-id="${this.id}" data-owner="${this.actorID}">${this.name}</h2>
            <img src=${this.image} class="toy-avatar" />
            <h2 id="lesseeee" data-id="${this.id}">Currently With: ${this.currently_with}</h2>            
            ----------------
            <br><br>
            `
            // <h2 id="lesseeee" data-id="${this.id}">${this.toy.name}</h2>
            // <h2 id="lesseeee" data-id="${this.id}">${this.name}</h2>
    }
    renderProp =(prop)=> {  // Creating a Display in a Card for each prop
    

        const cardDiv = document.createElement("div")


        cardDiv.classList.add("card")

            cardDiv.setAttribute("data-id", prop.id)

            cardDiv.id = prop.id

            cardDiv.innerHTML = this.makeACard()
        
        const collectionDiv = document.querySelector("#the-prop-room")
        // *** TRY OUT AS STATIC - Variable *** //


        collectionDiv.append(cardDiv)
        
        
    } 





}
