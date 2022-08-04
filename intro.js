function animate() {
    setTimeout(scramble, 0, "title", 125);
    setTimeout(typeWriter, 4500, "subtitle", 50);
    setTimeout(next, 6000, "next_button");
}
function scramble(element, speed) {
    var titleText = document.getElementById(element);
    var text = titleText.innerHTML;
    var textArray = text.split("");
    console.log(textArray);
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var displayTime = speed;
    var curText = "";
    titleText.innerHTML = curText;
    titleText.style.visibility = "visible";
    //add random letters to the display one by one
    for (var i = 0; i < text.length; i++) {
        setTimeout(function () {
            curText += randomLetters(1);
            titleText.innerHTML = curText;
            //console.log("curText:", curText, "i:", i)
        }, (i + 1) * displayTime);
    }
    var part1Time = text.length * displayTime; 
    
    //randomly scramble the letters n times
    var scrambleNum = 10; //times to scramble
    for (var i = 0; i < scrambleNum; i++) {
        setTimeout(function () {
            curText = randomLetters(text.length);
            titleText.innerHTML = curText;
            //console.log("curText:", curText, "i:", i)
        }, (i + 1) * displayTime + part1Time);
    }
    var part2Time = scrambleNum * displayTime + part1Time;
    
    var base = "";
    var bLoop = 3; //number of times to loop b
    for (var a = 0; a < text.length; a++) {
        setTimeout(partA, a * displayTime * (bLoop) + part2Time - 50, a)
        for (var b = 0; b < bLoop; b++) {
            setTimeout(partB, a * displayTime * (bLoop) + b * displayTime + part2Time, text.length - a - 1) 
        }
    }
    var part3Time = text.length * bLoop * displayTime + part2Time;

    //helper functions:
    function partA(n) {
        base += textArray[n];
    }
    function partB(n) {
        curText = base + randomLetters(n);
        titleText.innerHTML = curText;
        //console.log("curText:", curText, "a:", a, "b:", b);
    }
    //randomLetters: return string of n random letters
    function randomLetters(n) {
        var str = "";
        for (var i = 0; i < n; i++) {
            str += alphabet.charAt(Math.floor(Math.random(0, 1) * 26));
        }
        return str;
    }
}

function next(element) {
    $("#" + element).fadeIn("slow");
}
function typeWriter(elem, spd) {
    var i = 0; 
    var element = document.getElementById(elem);
    var text = element.innerHTML;
    console.log(text);
    element.innerHTML = " ";
    element.style.visibility = "visible";
    var speed = spd;
    
    typing();
    
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
}
