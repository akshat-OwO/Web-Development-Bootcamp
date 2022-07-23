var buttonColors = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var started = false;

var level = 0;

$('body').keypress(function(){
    if(!started){
        $('h1').text('Level ' + level);
        nextSequence();
        started = true;
    }
});

$('.btn').click(function(){
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    setTimeout(() => {
        $('.' + userChosenColor).removeClass('pressed');
    }, 100);
});

function nextSequence() {
    userClickedPattern = [];
    var randomNumber = Math.random();
    randomNumber = randomNumber*4;
    randomNumber = Math.floor(randomNumber);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    
    $('#' + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColor);
    
    level++;
    $('h1').text('Level ' + level);
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $('.' + currentColor).addClass('pressed');
}

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log('success');
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() =>{
                nextSequence();
            }, 1000)
        }
    } else{
        console.log('wrong');
        playSound('wrong');
        $('body').addClass('game-over');
        setTimeout(() =>{
            $('body').removeClass('game-over');
        }, 200);
        $('h1').text('Game Over, Press Any Key to Restart');
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}