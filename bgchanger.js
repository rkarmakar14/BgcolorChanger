const bgchanger = function (){
    let hexa = "0123456789ABCDEFGH"
    let color = "#"
    for(let i = 0; i < 6; i++){
        color += hexa[Math.floor(Math.random() * 16)]
    }
    return color;
}
let interval;
const startChange = function () {
    if(!interval){
        interval = setInterval(()=>{
            document.body.style.backgroundColor = bgchanger();
        },1000);
    }
}
const stopChange = function () {
    clearInterval(interval);
    interval = null;
} 
// console.log(bgchanger());
 var start = document.getElementById("start")
 var stop = document.getElementById("stop")