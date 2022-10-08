let seconds = 0;
let flag = true;

document.onkeydown = function(){
    if(flag == true){
        testTypingSpeed();
        flag = false;
    }
} 

function testTypingSpeed(){
    setInterval(() => {
        let test = document.querySelector('.test').value;
        let speed = document.querySelector('#speed');
        let words = document.querySelector('#words');
        let time = document.querySelector('#time');
        let wordCount = 0;

        for(let i=0; i<test.length; i++){
            if(test[i] == " "){
                wordCount++;
            }
        }
        seconds = seconds+1;

        let wpm = parseInt(wordCount*60/seconds)

        speed.innerText = wpm;
        words.innerText = wordCount;
        time.innerText = seconds;
    }, 1000);
}

