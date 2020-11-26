var counter = document.querySelector(".number");
var followers= document.querySelector(".followers");
let counting=0;

setInterval(()=>{
    if(counting < 1000)
    {
        counting++;
        counter.innerHTML=counting;
    }

},1)

setTimeout(()=>{
    followers.innerHTML="Followers in Linkedin!!";    
},10000)


var counter1 = document.querySelector(".number1");
var followers1= document.querySelector(".followers1");
let coun=0;

setInterval(()=>{
    if(coun < 1000)
    {
        coun++;
        counter1.innerHTML=coun;
    }

},1)

setTimeout(()=>{
    followers1.innerHTML="Followers in Instagram!!";    
},10000)
