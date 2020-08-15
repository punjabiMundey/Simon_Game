var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var headingCounter=0;


var ctr=true;
$(document).keypress(function(){
    if(ctr==true)
    {   ctr=false;
        nextSequence();
    }
})


function playSound(sound)
{
    switch (sound) {
        case "red":
            var audio = new Audio("red.mp3");
            audio.play();
            break;
        case "blue":
            var audio = new Audio("blue.mp3");
            audio.play();
            break;
        case "yellow":
                var audio = new Audio("yellow.mp3");
                audio.play();
            break;
        case "green":
                    var audio = new Audio("green.mp3");
                    audio.play();
            break;
        default:
                var audio = new Audio("wrong.mp3");
                audio.play();
            break;
    }

}



function checkAnswer(currentlevel){

    if(gamePattern[currentlevel]===userClickedPattern[currentlevel])
    {
        console.log("success");
        if(gamePattern.length===userClickedPattern.length)
        {
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }
    else
    {
        var audio =new Audio("wrong.mp3");
        audio.play();
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over")
        },1000);

        $("h1").text("Game Over, Press Any Key to Start");

        // $(document).keypress(function()
        // {
            gamePattern=[];
            userClickedPattern=[];
            ctr=true;
            headingCounter=0;
            
        // })
    }
}



function nextSequence()
{
    userClickedPattern=[];
    headingCounter++;
    var randomNumber=Math.random();
    randomNumber=randomNumber*4;
    randomNumber=Math.floor(randomNumber);
    $("h1").text("level "+headingCounter);
    console.log(randomNumber);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
console.log(gamePattern);

$("."+randomChosenColour).fadeOut(100).fadeIn(100);
playSound(randomChosenColour);

}


function animatePress(colourClicked)
{
    $("."+colourClicked).addClass("pressed");
    setTimeout(function(){
        $("."+colourClicked).removeClass("pressed");
    },100)
}

$(".btn").click(function(){
    userChosenColour=this.id;
    // console.log(userChosenColour);
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    console.log(userClickedPattern);
    animatePress(userChosenColour);
    checkAnswer((userClickedPattern.length)-1);
    console.log(userClickedPattern);
});
