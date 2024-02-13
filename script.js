var firstP = Math.floor(Math.random() * 6) + 1;
var secondP = Math.floor(Math.random() * 6) + 1;

function diceChanger(num, player){
    switch (num) {
        case 1:
            document.querySelectorAll(".fourth")[player].classList.add("visible");
            break;
        
        case 2:
            document.querySelectorAll(".second")[player].classList.add("visible");
            document.querySelectorAll(".sixth")[player].classList.add("visible");
            break;
        
        case 3:
            document.querySelectorAll(".third")[player].classList.add("visible");
            document.querySelectorAll(".fourth")[player].classList.add("visible");
            document.querySelectorAll(".fifth")[player].classList.add("visible");
            break;

        case 4:
            document.querySelectorAll(".first")[player].classList.add("visible");
            document.querySelectorAll(".third")[player].classList.add("visible");
            document.querySelectorAll(".fifth")[player].classList.add("visible");
            document.querySelectorAll(".seventh")[player].classList.add("visible");
            break;

        case 5:
            document.querySelectorAll(".first")[player].classList.add("visible");
            document.querySelectorAll(".third")[player].classList.add("visible");
            document.querySelectorAll(".fourth")[player].classList.add("visible");
            document.querySelectorAll(".fifth")[player].classList.add("visible");
            document.querySelectorAll(".seventh")[player].classList.add("visible");
            break;

        case 6:
            document.querySelectorAll(".first")[player].classList.add("visible");
            document.querySelectorAll(".second")[player].classList.add("visible");
            document.querySelectorAll(".third")[player].classList.add("visible");
            document.querySelectorAll(".fifth")[player].classList.add("visible");
            document.querySelectorAll(".sixth")[player].classList.add("visible");
            document.querySelectorAll(".seventh")[player].classList.add("visible");
            break;
    
        default:
            break;
    }
}

if(!(sessionStorage.getItem("pageLoadedBefore"))){
    firstP = 6;
    secondP = 6;
    sessionStorage.setItem('pageLoadedBefore', true);
}else{
    if(firstP > secondP){
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if(firstP === secondP){
        document.querySelector("h1").innerHTML = "Match Tied";
    }
    else{
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
}

diceChanger(firstP, 0);
diceChanger(secondP, 1);