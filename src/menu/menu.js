import img1 from "./breakfast/1.jpg"
import img2 from "./breakfast/2.jpg"
import img3 from "./breakfast/3.jpg"
import img4 from "./breakfast/4.jpg"
import img5 from "./breakfast/5.jpg"

export class Menu{
    
    #content;

    constructor(){
        this.#cache();
        this.#render();    
    }

    #cache(){
        this.#content = document.getElementById("content");
    }

    #render(){
        const divCard = document.createElement("div");

        const breakfast = new MenuItem("Breakfast", 5).getItems;
        // console.log(breakfast);
        breakfast.forEach((item) =>{
            const pPrice = document.createElement("p");
            pPrice.textContent = `${item.name} ............... ${item.price}`;

            const image = document.createElement("img");
            image.src = item.url;

            const pDesc = document.createElement("p");
            pDesc.textContent = `${item.description}`;

            divCard.append(pPrice);
            divCard.append(image);
            divCard.append(pDesc);
        })
        this.#content.append(divCard);
    }
}

class MenuItem{
    #item;
    #type;

    constructor(type, length){
        this.#item = new Array(length);
        this.#type = type;
        this.#load();
    }

    #load(){
        for (let x = 0; x < this.#item.length; x++) {
            this.#item[x] = {
                type: this.#type, 
                name: `Dish ${x}`,
                url: `${x}.jpg`,
                price: this.#getRandomPrice(10,30),
                description: ` ${x} ${x} It is a long established fact that a reader will ` 
                + `be distracted by the ${x} readable content of a page when looking at `
                + ` its layout. The point of using Lorem Ipsum ${x}`
            };
        }
    }

    get getItems(){
        return this.#item;
    }

    #getRandomPrice(min, max) {
        min = Math.ceil(min); // Ensure min is an integer
        max = Math.floor(max); // Ensure max is an integer
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}