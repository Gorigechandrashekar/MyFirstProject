let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#content");
const us=document.querySelector("#userscore");
const cs=document.querySelector("#compscore");

compchoice=()=>{
    let comc=["paper","rock","scissor"];
    let cchoice=Math.floor(Math.random()*3);
    
    return comc[cchoice];
} 
const gamedraw=(compc)=>{
    msg.innerText=`game draw comp choice was ${compc}`
    msg.style.backgroundColor="Black"
}
const playgame=(choiceId)=>{
    let compc=compchoice();
    let userwin=false;
    if(compc===choiceId){
        console.log("game draw");
       gamedraw(compc);
    }
    else if(choiceId==="rock"){
        userwin=compc==="scissor"?true:false;
        updates(userwin,compc);
        
    }
    else if(choiceId==="paper"){
        userwin=compc==="rock"?true:false;
        updates(userwin,compc);
    }
    else {
        userwin=compc==="paper"?true:false;
        updates(userwin,compc);
    }
    
}
const updates=(userwin,compc)=>{
    if(userwin){
        msg.innerText=`you have won and comp choice was ${compc}`
        msg.style.backgroundColor="green"
        userscore+=1
        us.innerText=`${userscore}`
        
    }
    else{
       msg.innerText=`comp have won and comp choice was ${compc}`
       msg.style.backgroundColor="red"
       compscore+=1
       cs.innerText=`${compscore}`

       
    }
}


choices.forEach((val)=>{
    val.addEventListener("click",()=>{
        const choiceId=val.getAttribute("id");
        console.log("val was clicked",choiceId);
        playgame(choiceId);
    });
});
