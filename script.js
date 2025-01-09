let userScore = 0;
let comScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscore = document.querySelector("#user-score");
const comscore = document.querySelector("#com-score");



choices.forEach((choice)=>{

    choice.addEventListener("click", ()=>{
        const userchoice = choice.getAttribute("id");


gameplay(userchoice);
    });
});
const genComchoice = () =>{
    const options = ["rock","paper","scissor"];
    const randomid = Math.floor(Math.random() * 3);

    return options[randomid];

};
const showWinner = (userWin, userChoice, comChoice) =>{
   /*  console.log(userWin); */
    if(userWin){
        userScore++;
        msg.innerText = `You Win! where ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "#08D040";
        userscore.innerText = userScore;

    }else{

        comScore++;
        msg.innerText = `You Lost! where ${comChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "#FF1100";
        comscore.innerText =  comScore;
        /* console.log(comScore,"computer"); */
    }
}
const gameplay=(userchoice)=>{
    const userChoice =  userchoice;
    const comChoice = genComchoice();
    console.log(userChoice,comChoice);
    if(userChoice == comChoice){
        console.log("Game was draw");
        msg.innerText = "Game was draw";
        msg.style.backgroundColor = " #FFE900"

    }else{
        let userWin = true;
        if(userChoice === rock){
            //computer  choice paper or scissor
            userWin = comChoice === "paper" ? false : true;


        }else if(userChoice === "paper" ){
            // rock or scissor
            userWin = comChoice === "scissor" ? false : true ;
        }else{
            // rock or paper
            userWin = comChoice === "rock" ? false : true;
        }
        showWinner (userWin, userChoice, comChoice);
    }

};