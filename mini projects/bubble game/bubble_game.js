//   EVENT BUBBLE --------> jispe click karoge wo element par event raise hoga , aur event listener naa milne par event element ke parent par listner dhundega , waha bhi naa milne par event parent ke parent ke parent ke parent ........ par listner dhundega


function makeBubble(){
    var clutter = "";

    for(var i = 1 ; i<=168 ; i++){
        clutter += `<div id = "bubble">${Math.floor(Math.random()*10)} </div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

var time = 60;
var score = 0;
var hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector(".score").textContent = score;
}
function decreaseScore(){
    score -= 5;
    document.querySelector(".score").textContent = score;
}

function hitVal(){
    hitrn = Math.floor(Math.random()*10)
    document.querySelector(".HitVal").textContent = hitrn;
}

function runTimmer(){
    var timer = setInterval(function(){
        if(time>0){
            time--;
            document.querySelector(".TimerValue").textContent = time;
        }
        else{
            document.querySelector("#pbtm").innerHTML = "";
            clearInterval(timer);
            document.querySelector("#restart").innerHTML = `<button  id = "button"  type = "submit">Restart</button>`;
            document.querySelector("#button").addEventListener("click" , function()
            {
                document.querySelector("#restart").innerHTML = "";
                document.querySelector(".score").textContent = "0";
                document.querySelector(".HitVal").textContent = "0";
                score = 0;
                time = 60;
                runTimmer();
                makeBubble();
                hitVal();
            })

        }
    } , 1000)
}


document.querySelector("#pbtm").addEventListener("click",function(details){
    if(time >0){
        var clicked_Num = Number(details.target.textContent);
        if(clicked_Num === hitrn){
            increaseScore();
            makeBubble();
            hitVal();
        }
        else{
            decreaseScore();
        }
    }
});


runTimmer();
makeBubble();
hitVal();