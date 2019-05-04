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

  typewriter.typeString('<strong> Hugh Foss</strong>:<br>')
    .typeString("You are becoming the talk of the hut. Perhaps women are more capable than we have thought. We have discovered hidden messages between Japanese forces and we suspect an attack on a western country. A <mark>Vigenere Cipher</mark> is used in the intercepted codes. Your mission is to decipher the following codes and figure out how, when, and where the Japanese will attack. <br> The vingere table and instructions are below. The keyword appears to be 'Japan'.")
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
  if (answer1 == "usa") {
    right('code1');
    document.getElementById("code1").disabled = true;
  }
  else{
    wrong('code1');
    falses += 1;
  }
  if (answer2 == "december seventh nineteen forty one") {
    right('code2');
    document.getElementById("code2").disabled = true;
    }
    
  else{
    wrong('code2');
    falses += 1;
    }
  if (answer3 == "multiple navy fleets plan to corner an american fleet off the west coast") {
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




// Make the DIV element draggable:
dragElement(document.getElementById("vigenereChart"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function showChart() {
	document.getElementById("vigenereChart").style.display = "block";  
}
