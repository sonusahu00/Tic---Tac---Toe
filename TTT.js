let winnertxt = document.querySelector(".winnertxt");
let newgamebtn = document.querySelector(".newgamebtn");
let buttons = document.querySelectorAll(".buttons");
let resetbtn = document.querySelector(".resetbtn");
let winner = document.querySelector(".winner");

 let turnO=true;
 let count=0;
 let flag = true;

 const enablesbuttons = () => {
    for(let button of buttons){
        button.disabled = false;
        button.innerText="";
    }
}

const disablebutton = () => {
    for(let button of buttons){
        button.disabled=true;
    }
}
 
 const resetgame = () => {
    enablesbuttons();
    count=0;
    turnO=true;
    winnertxt.classList.add("hide");
    flag = true;

}

newgamebtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

const showwinner = (hero) => {
    if(flag){
        winner.innerText = `Congratulations Winner is ${hero} !!`;
    }
    else{
        winner.innerText = `${hero}`;
    }
    winnertxt.classList.remove("hide");
    disablebutton();
}
const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const checkwinner = () => {
    for(let pattern of winpattern){
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos3 && pos1===pos2){
              
                showwinner(pos1);
                return true;
            }
        }
    }
    return false;
}

buttons.forEach( (button) => {
    button.addEventListener("click", () =>{
        
            if(turnO){
               
                button.innerText="O";
                turnO=false;
                count++;  
            }
            else{

                button.innerText="X";
                turnO=true;
                count++;
            }

            button.disabled=true;
            let iswinner=checkwinner();

            if(count===9 && !iswinner){
                let result = "Game was a Draw";
                flag = false;
                showwinner(result);
            }
    });
});
