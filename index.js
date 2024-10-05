var buttonColours=["red", "blue", "green", "yellow"];
var gamePattern=[];
var userPattern=[];
var started=false;
var level=0;

$(document).keypress(function(){
  if(!started){
    nextSequence();
    started=true;
  }
});

$(".btn").click(function(){
  var userColour=$(this).attr("id");
  userPattern.push(userColour);
  $(this).addClass("pressed");
  setTimeout(function(){
    $("#"+userColour).removeClass("pressed");
  }, 100);
  checkAnswer(userPattern.length-1);
});

function nextSequence(){
  userPattern=[];
  level++;
  $("#level-title").text("Level "+level);
  var randomNumber=Math.floor(Math.random()*4);
  var randomColour=buttonColours[randomNumber];
  gamePattern.push(randomColour);
  $("#"+randomColour).addClass("pressed");
  setTimeout(function() {
    $("#" + randomColour).removeClass("pressed");
  }, 300);
}

function checkAnswer(currentLevel){
if(gamePattern[currentLevel]===userPattern[currentLevel])
{
    if(userPattern.length===gamePattern.length)
    {
      setTimeout(function(){
        nextSequence();
      }, 1000);
    }
} 
else
{
  $("#level-title").text("Game Over, Press Any Key to Restart");
  startOver();
}
}

function startOver() 
{
  level=0;
  gamePattern=[];
  started=false;
}

$(".inst_button").click(function(){
  $('.inst_button').addClass('active');
  setTimeout(function() {
    $('.inst_button').removeClass('active');
  }, 1000);
  window.location.href = "./index.html";
});

$(".game_button").click(function(){
  $('.game_button').addClass('active');
  setTimeout(function() {
    $('.game_button').removeClass('active');
  }, 1000);
  window.location.href = "./game.html";
});
