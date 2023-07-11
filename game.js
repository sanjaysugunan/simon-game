var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern=[];

var level=0;

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

$(".btn").click(function(){
   // handler();
    var userChosenColour;
    userChosenColour= $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    animatePress(userChosenColour);
    playSound(userChosenColour);
    checkAnswer(userClickedPattern.length);
});

//function handler(){}

function playSound(name){
    var audio2 = new Audio("sounds/" + name + ".mp3");
    audio2.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function() {$("#"+currentColour).removeClass("pressed");}, 100);
}

$(document).keydown(function(){
    if(gamePattern.length===0){
    nextSequence();
    $("h1").text("Level 0");
    level=0;
    }
    
});

function checkAnswer(currentLevel){
        if(userClickedPattern[currentLevel-1]!=gamePattern[currentLevel-1]){
            var audio3 =new Audio("sounds/wrong.mp3");
            audio3.play();       
            $("h1").text("Game Over, Press Any Key to Restart");
            level=0;
            gamePattern=[];
            userClickedPattern=[];
        }
        
   
        if(currentLevel==gamePattern.length){
            level=level+1;
            userClickedPattern=[];
            $("h1").text("Level "+level);
                    setTimeout(function() {
                        nextSequence();
            
                    }, 1000);
       
    }

}







/*
    function checkAnswer(currentLevel){
        var count=0;
        for(var i=0;i<currentLevel;i++){
            if(userClickedPattern[i]==gamePattern[i]){
                count++;
            }
            else{  
                var audio3 =new Audio("sounds/wrong.mp3");
                audio3.play();       
                $("h1").text("Game Over, Press Any Key to Restart");
                level=0;
                gamePattern=[];
                userClickedPattern=[];
                break;
              
            }
        }
       
        if(count==gamePattern.length){
            level=level+1;
            userClickedPattern=[];
            $("h1").text("Level "+level);
            setTimeout(function() {
                nextSequence();
            
            }, 1000);
           
        }
    
}   
*/