var x=Math.floor((Math.random() * 20)+1);
console.log(x);
var num=0;
let score=20;
let highscore=0;
document.querySelector('.chance-value').textContent=score;
// document.querySelector('.num').textContent=x;
document.querySelector('.guess-button').addEventListener('click', function(){
    document.querySelector('.button').textContent="AGAIN!";
    num=document.querySelector('.guess').value;
    if(parseInt(num)==x)
    {
        console.log("Good");
        document.querySelector('.message').textContent="Correct Guess 👍";
        document.querySelector('body').style.backgroundColor='rgb(18, 135, 10)';
        document.querySelector('.num').style.width='25rem';
        document.querySelector('.num').textContent=num;
        if(highscore<score)
        {
            highscore=score;
            document.querySelector('.high-score span').textContent=highscore;
        }
    }
    else if(parseInt(num)<x){
        if(score>1)
        {
        document.querySelector('.message').textContent="Too Low😒";
       score--;
        
        document.querySelector('.chance-value').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="You Lost the game"; 
        }
    }
    else if(parseInt(num)>x)
    {
        if(score>1)
        {
        document.querySelector('.message').textContent="Too High😒"; 
        score--;
        document.querySelector('.chance-value').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="You Lost the game"; 
        }
    }
})

document.querySelector('.button').addEventListener('click',function(){
    document.querySelector('.message').textContent="Start Guessing....";
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.num').style.width='100px';
    x=Math.floor((Math.random() * 20)+1);
    document.querySelector('.num').textContent='?';
    score=20;
    document.querySelector('.chance-value').textContent=score;
})