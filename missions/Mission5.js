console.log("hi");
var something = document.getElementById("timer");
something.innerHTML = "20:00";
function typeWriter(){
  var message = document.getElementById('message');

  var typewriter = new Typewriter(message, {
    loop: false,
    cursor: '_',
    delay: 20,
  });

  typewriter.typeString('<strong> Alan Turing</strong>:<br>')
    .typeString("This is extremely urgent. The Germans have deployed their U-boats into the Atlantic ocean and are destroying the Allied powers’ navy. The French are about to withdraw their ships because they have lost too many good men. If we cannot identify the location of the back-up Axis powers ships within the next 24 hours, we will lose all of our allies… and this war. We need your skill to decrypt these <mark>Lorenz ciphers (Vernam cipher)</mark>. The fate of the world as we know it rests on your shoulders. Good luck to you and Godspeed. The key used is 'qwerty'.<br> Instructions for it are below.")
    .start();
  

clearTimeout(); 
x = 1200; 
function addTime(){
  var titleText = document.getElementById("timer");
  var text = titleText.innerHTML;
  var curText = "";
  x--
  var s = x%60; 
  if(s<10){
    var seconds = '0'+s
  }
  else{
    var seconds = s; 
  }
  var m = x/60; 
  var minutes = Math.floor(m); 

  if (stopTimer == true){
    console.log(minutes + ':'+seconds); 
    curText = (minutes + ':'+seconds);
    titleText.innerHTML = curText;
    return false;
  }

  else if(x<=0){
    console.log('HAHA LOSER UR MOM DOESNT LOVE U' );
    curText = '0:00';
    titleText.innerHTML = curText; 
    document.getElementById("timer").style.color ='#e60000';
    lose();
    return false;
  }
  
  else{
    console.log(minutes + ':'+seconds); 
    curText = (minutes + ':'+seconds);
    titleText.innerHTML = curText;
    console.log(stopTimer);
  }
}
setInterval(addTime, 1000); 
}

function showNext(){
  document.getElementById("next").style.visibility='visible';
}

function wrong(element){
  document.getElementById(element).style.color ='#e60000';
}

function right(element){
  document.getElementById(element).style.color ='#00d938ff';
}

var stopTimer = false;

function checkAnswers(){
  var answer1 =document.getElementById("code1").value;;
  console.log(answer1);
  var answer2 =document.getElementById("code2").value;;
  console.log(answer2);
  var answer3 =document.getElementById("code3").value;;
  console.log(answer3);
  var answer2 = answer2.toLowerCase();
  var answer1 = answer1.toLowerCase();
  var answer3 = answer3.toLowerCase();
  var falses = 0;
  if (answer1 == "380 backup u-boats") {
    right('code1');
    document.getElementById("code1").disabled = true;
  }
  else{
    wrong('code1');
    falses += 1;
  }
  if (answer2 == "arriving in 40 hours") {
    right('code2');
    document.getElementById("code2").disabled = true;
    }
    
  else{
    wrong('code2');
    falses += 1;
    }
  if (answer3 == "14.59, 28.67") {
    right('code3');
    document.getElementById("code3").disabled = true;
      }
  else{
      wrong('code3');
      falses += 1;
      }

  if (falses >= 1){
    var stopTimer = false;
    return false;
  }
    location.replace("../endings/GoodEndings.html");
    var stopTimer = true;
    return false;
    

}

function lose() {
  location.replace("../endings/BadEnding.html")
}

clearTimeout(); 
x = 1200; 
function addTime(){
  var titleText = document.getElementById("timer");
  var text = titleText.innerHTML;
  var curText = "";
  x--
  var s = x%60; 
  if(s<10){
    var seconds = '0'+s
  }
  else{
    var seconds = s; 
  }
  var m = x/60; 
  var minutes = Math.floor(m); 

  if (stopTimer == true){
    console.log(minutes + ':'+seconds); 
    curText = (minutes + ':'+seconds);
    titleText.innerHTML = curText;
    return false;
  }

  else if(x<=0){
    console.log('HAHA LOSER UR MOM DOESNT LOVE U' );
    curText = '0:00';
    titleText.innerHTML = curText; 
    document.getElementById("timer").style.color ='#e60000';
    lose();
    return false;
  }
  
  else{
    console.log(minutes + ':'+seconds); 
    curText = (minutes + ':'+seconds);
    titleText.innerHTML = curText;
    console.log(stopTimer);
  }
}
setInterval(addTime, 1000); 

