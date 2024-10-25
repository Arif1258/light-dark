let btnmode=document.querySelector("#mode");
let currmode="light";
btnmode.addEventListener("click", () =>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="white";

    }
    else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="black";
    }
    console.log(currmode);
    
});
    
