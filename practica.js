showColor = document.querySelector(".show-color"); 
reset = document.getElementById("reset");
generate = document.getElementById("generate");

hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

document.addEventListener("click",(e)=>{
    color = "#";
    if(e.target === generate){
        for(let i =0; i<6 ; i++){
            color+= hex[randomNumber()]

        }
        showColor.textContent = color;
        document.body.style.background=color;
    }
    if(e.target ===reset){
        showColor.textContent="#4636DD";
        document.body.style.background="#4636DD"
    }
})

function randomNumber(){
    return Math.floor(Math.random()*hex.length)
}

randomNumber()

















































// let reset = document.getElementById("reset");
// let generate = document.getElementById("generate");
// let showColor = document.querySelector(".color-hex")

// hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

// document.addEventListener("click",e=>{
//     let color="#"
//     if(e.target=== generate){
//         for(let i=0; i<6 ; i++){
//             color += hex[randomNumber()]
//         }
//         console.log(color)
//         showColor.textContent = color;  
//         document.body.style.background = color 
//     }
//     if(e.target === reset){
//         color= "#FCFEFD";
//         document.body.style.background= color;
//     }
// })

// function randomNumber( ){
//     return Math.floor(Math.random()* hex.length)
// }

