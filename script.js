let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const winmsg=document.querySelector("#msg");
const user_score=document.querySelector("#user-score");
const comp_score=document.querySelector("#comp-score");

const user_s=document.querySelector("#user-score")
const comp_s=document.querySelector("#comp-score")

const gen_comp_choice = () => {
let options=["rock","paper","scissors"];
let rand=Math.floor(Math.random()*3);
return options[rand];
}

const draw_game=()=>{
    winmsg.innerText="Game is drawn ! Play again";
    winmsg.style.backgroundColor="#5F4BB6";
}

const show_winner=(userwin)=>{
    if(userwin)
    {
        userscore++;
        user_s.innerText=userscore;
        winmsg.innerText="You win !";
        winmsg.style.backgroundColor="green";
    }
    else
    {
        compscore++;
        comp_s.innerText=compscore;
        winmsg.innerText="You lost !";
        winmsg.style.backgroundColor="red";
    }

}


const  playgame=(userchoice)=>{

    //to generate computer choice
   let userwin=true;
   let comp_choice= gen_comp_choice();

   if(userchoice===comp_choice)
   {
    //draw the game
    draw_game();
    return 0;
   }

   else
   {
    if(userchoice==="rock")
    {
        userwin=comp_choice==="paper" ?false:true;
    }
    else if(userchoice==="paper")
    {
        userwin=comp_choice==="scissors"?false:true;
    }
   else
    {
        userwin=comp_choice==="rock"?false:true;
    }
   }

   show_winner(userwin);
}

choices.forEach((choice)=>{
    choice.addEventListener("click" ,()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});