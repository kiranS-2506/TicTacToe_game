let player = "O"
let winner = document.getElementById('win')
let gamestatus = true;
let count = 0;

function cell1(){
    let d = document.getElementById("cell1")
    if (gamestatus && d.innerHTML==""){
        if (player=="O"){
        
            d.innerHTML="O"
            count++;
            checkwin()
            checkdraw()
            player = "X"
    
        }
        else{
            d.innerHTML="X"
            count++;
            checkwin()
            checkdraw()
            player = "O"
    
        }

    }
    
    

}
function cell2(){
    let d = document.getElementById("cell2")
    if (gamestatus && d.innerHTML==""){
        if (player=="O"){
        
            d.innerHTML="O"
            count++;
            checkwin()
            checkdraw()
            player = "X"
    
        }
        else{
            d.innerHTML="X"
            count++;
            checkwin()
            checkdraw()
            player = "O"
    
        }

    }
    
    
    
   
}
function cell3(){
    let d = document.getElementById("cell3")
    if (gamestatus && d.innerHTML==""){
        if (player=="O"){
        
            d.innerHTML="O"
            count++;
            checkwin()
            checkdraw()
            player = "X"
    
        }
        else{
            d.innerHTML="X"
            count++;
            checkwin()
            checkdraw()
            player = "O"
    
        }

    }
    
    
    
}
function cell4(){
    let d = document.getElementById("cell4")
    if (gamestatus && d.innerHTML==""){
        if (player=="O"){
        
            d.innerHTML="O"
            count++;
            checkwin()
            checkdraw()
            player = "X"
    
        }
        else{
            d.innerHTML="X"
            count++;
            checkwin()
            checkdraw()
            player = "O"
    
        }

    }
    
    
}
function cell5(){
    let d = document.getElementById("cell5")
    if (gamestatus && d.innerHTML==""){
        if (player=="O"){
        
            d.innerHTML="O"
            count++;
            checkwin()
            checkdraw()
            player = "X"
    
        }
        else{
            d.innerHTML="X"
            count++;
            checkwin()
            checkdraw()
            player = "O"
    
        }

    }
    
    
    
}
function cell6(){
    let d = document.getElementById("cell6")
    if (gamestatus && d.innerHTML==""){
        if (player=="O"){
        
            d.innerHTML="O"
            count++;
            checkwin()
            checkdraw()
            player = "X"
    
        }
        else{
            d.innerHTML="X"
            count++;
            checkwin()
            checkdraw()
            player = "O"
    
        }

    }
    
   
}
function cell7(){
    let d = document.getElementById("cell7")
    if (gamestatus){
        if (player=="O"){
        
            d.innerHTML="O"
            count++;
            checkwin()
            checkdraw()
            player = "X"
    
        }
        else{
            d.innerHTML="X"
            count++;
            checkwin()
            checkdraw()
            player = "O"
    
        }

    }
    
    

}
function cell8(){
    let d = document.getElementById("cell8")
    if (gamestatus && d.innerHTML==""){
        if (player=="O"){
        
            d.innerHTML="O"
            count++;
            checkwin()
            checkdraw()
            player = "X"
    
        }
        else{
            d.innerHTML="X"
            count++;
            checkwin()
            checkdraw()
            player = "O"
    
        }

    }
    
    
    
}
function cell9(){
    let d = document.getElementById("cell9")
   if (gamestatus && d.innerHTML==""){
        if (player=="O"){
        
            d.innerHTML="O"
            count++;
            checkwin()
            checkdraw()
            player = "X"
    
        }
        else{
            d.innerHTML="X"
            count++;
            checkwin()
            checkdraw()
            player = "O"
    
        }

    }
    
   
}

function checkwin(){
    let c1 = document.getElementById('cell1').innerHTML
    let c2 = document.getElementById('cell2').innerHTML
    let c3 = document.getElementById('cell3').innerHTML
    let c4 = document.getElementById('cell4').innerHTML
    let c5 = document.getElementById('cell5').innerHTML
    let c6 = document.getElementById('cell6').innerHTML
    let c7 = document.getElementById('cell7').innerHTML
    let c8 = document.getElementById('cell8').innerHTML
    let c9 = document.getElementById('cell9').innerHTML
    if ((c1==player&&c2==player&&c3==player)||(c4==player && c5==player&& c6==player)||
    (c7==player && c8==player&& c9==player)||(c1==player && c4==player&& c7==player)||
    (c2==player && c5==player&& c8==player)||(c3==player && c6==player&& c9==player)||
    (c1==player && c5==player&& c9==player)||(c3==player && c5==player && c7==player)){
        winner.textContent=player+" IS WINNER"
        gamestatus = false
        setTimeout(Restart, 5000)

    }
    

}
function checkdraw(){
    if (count== 9 && gamestatus==true){
        winner.textContent = "Match Draw"
        gamestatus=false
        setTimeout(Restart, 5000)
    }

}
function Restart(){
    window.location.reload()

}