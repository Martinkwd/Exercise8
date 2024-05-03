function dice() {
    var result= randomNumber()
    document.getElementById("result").innerText = result
}

function randomNumber(){
    var result = Math.floor(Math.random() * 6) + 1;
    
    return result  
}

// test unit

var result= randomNumber() 
if (result>=1&&result<=6){
    console.log("test passed")

}
