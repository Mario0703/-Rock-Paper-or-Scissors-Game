let rock = document.getElementById("rock");
let Paper = document.getElementById("paper");
let Scissors = document.getElementById("Scissors");
let number = 0;
let winnings = ["rock","paper","scissors"]
let player_Choice = "";



paper.onclick = function(){
    player_Choice = "paper"
    number = OutCome(number);
    function OutCome(num){
        num = Math.floor((Math.random() * 3)+1);
        return num;
    }

    if (winnings[number] == player_Choice){
        window.alert("Tie, the computer had chosen "+ winnings[number]);
        number = 0;
    }
    else if (winnings[number] == "scissors"){
        window.alert("You lost, the computer had choicen "+ winnings[number]);
        number = 0;

    }
    else if (winnings[number] == "rock"){
        window.alert("You won, the computer had chosen "+ winnings[number]);
        number = 0;
    } 

}

rock.onclick = function(){
    player_Choice = "rock"
    number = OutCome(number);
    function OutCome(num){
        num = Math.floor((Math.random() * 3)+1);
        return num;
    }

    if (winnings[number] == player_Choice){
        window.alert("Tie, the computer had chosen "+ winnings[number]);
        number = 0;
    }
    else if (winnings[number] == "paper"){
        window.alert("You lost, the computer had choicen "+ winnings[number]);
        number = 0;

    }
    else if (winnings[number] == "scissors"){
        window.alert("You won, the computer had chosen "+ winnings[number]);
        number = 0;
    } 
}

Scissors.onclick = function(){
    player_Choice = "scissors"
    number = OutCome(number);
    function OutCome(num){
        num = Math.floor((Math.random() * 3)+1);
        return num;
    }

    if (winnings[number] == player_Choice){
        window.alert("Tie, the computer had chosen "+ winnings[number]);
        number = 0;
    }
    else if (winnings[number] == "rock"){
        window.alert("You lost, the computer had choicen "+ winnings[number]);
        number = 0;

    }
    else if (winnings[number] == "paper"){
        window.alert("You won, the computer had chosen "+ winnings[number]);
        number = 0;
    }
}
