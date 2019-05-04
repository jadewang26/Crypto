console.log("hi");
var something = document.getElementById("timer");
something.innerHTML = "0:00";
function typeWriter(){
  var message = document.getElementById('message');

  var typewriter = new Typewriter(message, {
    loop: false,
    cursor: '_',
    delay: 20,
  });

  typewriter.typeString('<strong>John Tiltman</strong>:<br>')
    .typeString('The Soviet Union seems to be planning an invasion on a country in Eastern Europe. They have been communicating with Germany for a week and their messages have been getting more frequent by the day. Whatever the Axis Powers are planning, they will execute soon. Your job is to decrypt the <mark id="code"> monoalphabetic cipher </mark>messages the Soviet Union have been receiving. That is, unless it proves to be too difficult for a woman like you.')
    .start();
  

clearTimeout(); 
x = 0; 
function addTime(){
  var titleText = document.getElementById("timer");
  var text = titleText.innerHTML;
  var curText = "";
  x++
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

  else if(x<=-1){
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
  if (answer1 == "spain") {
    right('code1');
    document.getElementById("code1").disabled = true;
  }
  else{
    wrong('code1');
    falses += 1;
  }
  if (answer2 == "october seventh nineteen thirty nine") {
    right('code2');
    document.getElementById("code2").disabled = true;
    }
    
  else{
    wrong('code2');
    falses += 1;
    }
  if (answer3 == "an invasion from the eastern border") {
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
    showNext();
    var stopTimer = true;
    return false;

}

function lose() {
  location.replace("https://bad-ending-with-css-changes--birddrawer.repl.co")
}



    
