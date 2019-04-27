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

  typewriter.typeString('<strong> Dilly Knox</strong>:<br>')
    .typeString(
"Welcome to Hut 16. I heard you were the one who stopped the Soviet Union from invading Spain by decrypting their messages. I did not think a girl had the mental capacity to do those kinds of things. Impressive. It seems as though the Soviet Union is considering joining forces with the Allied Nations. Unfortunately, we arenâ€™t in the clear yet. Italy is rumored to be planning to invade an unknown neutral country. We are not completely sure how, when, or where they will attack, but we have been intercepting messages that Italy has been sending to Germany. These messages are all encrypted using a <mark> Caesar Cipher</mark>. Your mission is to solve this puzzle and decrypt the messages. I have heard of your previous successes and decided to recruit you onto my team, despite the othersâ€™ concern of including a woman in such an important group. Do not fail me. <br> The first letter of the first code is s.")
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
  if (answer1 == "switzerland") {
    right('code1');
    document.getElementById("code1").disabled = true;
  }
  else{
    wrong('code1');
    falses += 1;
  }
  if (answer2 == "november fifth nineteen forty") {
    right('code2');
    document.getElementById("code2").disabled = true;
    }
    
  else{
    wrong('code2');
    falses += 1;
    }
  if (answer3 == "a series of small missiles dropped into the town of davos from axis bombers") {
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

