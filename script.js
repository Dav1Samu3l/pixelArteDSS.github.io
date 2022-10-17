

let container = document.querySelector(".container");
let gridButton = document.getElementById("submit_grid");
let clearGridButton = document.getElementById("clear_grid");
let gridWidth = document.getElementById("width_range");
let gridHeigth = document.getElementById("heidth_range");
let colorButton = document.getElementById("color_input")
let eraseBtn = document.getElementById("erase_btn");
let paintBtn = document.getElementById("paint_btn");
let widthValue = document.getElementById("width_value");
let heigthValue = document.getElementById("heigth_value");




let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup"
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend"
    },
};






// se senhar e apagar forem falsos


let draw = false;
let erase = false;

// funçao para identificar o aparelho



// detecttar o touth devise
let deviceType = "";

const isTouthDivice = () => {
    try {
        //tentaremos criar um evento de touch ( para PC geraria um erro)
        document.createEvent("TouchEvent")
        deviceType = "touch";
        return true;
    }
    catch (e) {
        deviceType = "mouse";
        return false
    }
};

isTouthDivice()


//funçao para criar a grade

gridButton.addEventListener("click", () => {
    //iniciandocomafunçao delimpar a grade

    container.innerHTML = "";
    // começa em 0
    let cont = 0

    for (let i = 0; i < gridHeigth.value; i++) {
        cont += 2;
        let div = document.createElement("div");
        div.classList.add("gridRow");
        for (let j = 0; j < gridWidth.value; j++) {
            cont += 2;
            let col = document.createAttribut("div")
            col.classList.add("gridCol")
            col.setAttribute("id", `gridCol${cont}` )
            /* Por exemplo, se deviceType = "mouse" a instrução para o evento seria events [mouse] .down que é igual a mousedown se deviceType="touch" a instrução para event seria events [touch]. para baixo que é igual a touchstart */
             col.addEventListener(events[deviceType].down, () => {
                draw = true
                if (erase) {
                    col.style.backgroundColor = "transparent"
                }else{
                    col.style.backgroundColor = colorButton.value
                }
             })

             col.addEventListener(events[deviceType].move, (e)=>{

             })





        }
    }
})

