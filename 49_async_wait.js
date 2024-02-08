// generate a random color 
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0; i<6;i++)
    {
        color +=hex[Math.floor(Math.random() * 16)];
    }
    return color;
};


// console.log(Math.floor(Math.random() * 16));
let stopId;
console.log("i am on the top")
const startChangingColor = function(){
    document.body.style.backgroundColor = randomColor()
    console.log("now i am start")
}

 stopChangingColor = function(){
    document.body.style.backgroundColor = "white";
    console.log("now i am stop")
}


const sayOm =function(){
    console.log("my name is om")
}
document.querySelector("#start").addEventListener('click',function(){
   stopId = setInterval(startChangingColor,1000)
   console.log("now i am in interval")
});
document.querySelector("#stop").addEventListener('click',function(){
    
    clearInterval(stopId)
    stopChangingColor();
//     stopId = null;
  console.log("now i am in stop interval")
    
});
