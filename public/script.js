function flipCoin(){
    let result = Math.floor(Math.random() * Math.floor(2));
    console.log(result);
    if (result === 0){
        document.getElementById("result").innerText = "Player 1 bans first";
    }else{
        document.getElementById("result").innerText = "Player 2 bans first";
    }
}

function toggleStage(id){
    console.log(document.getElementById(id).style.background)
    if(document.getElementById(id).style.background === '' || document.getElementById(id).style.background === 'rgb(108, 117, 125)'){
        document.getElementById(id).style.background='#FF5733';
    }else if (document.getElementById(id).style.background === "rgb(239, 239, 239)"){
        document.getElementById(id).style.background='#FF5733';
    }else if(document.getElementById(id).style.background === "rgb(255, 87, 51)"){
        document.getElementById(id).style.background="#4EFF33";
    }else{
        document.getElementById(id).style.background="#6C757D";
    }
}

function setPlayer(id, character){
    document.getElementById(id).innerText=character;
}

function reset(){
    location.reload();
}