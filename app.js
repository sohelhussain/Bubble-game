let scrore = 0;
let random = 0;         // I'll wirte here of, becuse we use this variable in every function
const makeBubble = () => {
    for(var i = 0; i <= 127; i++){
        const randomNmber = Number(Math.floor(Math.random()*10))
        const bubble = `<div class="bubble">${randomNmber}</div>`;
        document.querySelector(`.pbtm`).innerHTML += bubble;
    }
}
const randomHit = () => {
    random = Number(Math.floor(Math.random()*10));
    document.querySelector(`#Hitcount`).textContent = random;
}
const timer = () => {
    let sec = 60;
    setInterval(()=>{
        if(sec > 0){
            sec--;
            document.querySelector(`#count`).innerHTML = sec;
        }else{
            clearInterval(timer)
            document.querySelector(`.pbtm`).innerHTML = `<h1>Game Over</h1>`;
        }
    },1000)
}
const increasScore = () => {
    // let scrore = 0;    Note:- we don't write here of let and var, becuse
    scrore += 10;
    document.querySelector(`#score`).textContent = scrore;
}
document.querySelector(`.pbtm`).addEventListener(`click`, (details) => {
    let clickBubble = Number(details.target.textContent);
    if(clickBubble === random){
        increasScore();
        makeBubble();         //Bug:- there is not replase new bubbles, insted of they are creat a chunk of bubble.
        randomHit();
    }
})
makeBubble();
randomHit();
timer();