var userChoice = prompt("Do you choose rock, paper or scissors?");
    var computerChoice = Math.random();
        console.log(computerChoice);

        if (0 < computerChoice < 0.33) {
            computerChoice = "rock";
                } 
        else if (0.34 < computerChoice > 0.66) {
            computerChoice = "paper";
                } 
        else {
            computerChoice = "scissors";
            }
    
    var compare = function (choice1, choice2){
        if (choice1 === choice2){
        alert( "It's a draw!");
        }
        else if (choice1 === "rock" && choice2 === "scissors"){
                    alert( "rock crushes scissors");
                }
        else  if (choice1 == "rock" && choice2 == "paper") {
            alert( "paper covers rock");
        }
        
        else if (choice1 === "paper" && choice2 == "scissors");
            
            {
                alert( "scissors cuts paper");
           }
        
            };
        compare(userChoice, computerChoice);
       