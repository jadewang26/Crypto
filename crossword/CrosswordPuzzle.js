
//Globals
var x;
var puzzleArrayData;
//Loads the Crossword
function initializeScreen(){
	var puzzleTable = document.getElementById("puzzle");
	puzzleArrayData = preparePuzzleArray();
	for ( var i = 0; i < puzzleArrayData.length ; i++ ) {
		var row = puzzleTable.insertRow(-1);
		var rowData = puzzleArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: uppercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';

			}else{
				cell.style.backgroundColor  = "#171717ff;";
			}
		}
	}
	addHint();
}
//Adds the hint numbers
function addHint(){
	document.getElementById("txt_0_3").placeholder = "1";
	document.getElementById("txt_0_6").placeholder = "2";
	document.getElementById("txt_2_1").placeholder = "3";
	document.getElementById("txt_4_5").placeholder = "4";
	document.getElementById("txt_5_8").placeholder = "5";
	document.getElementById("txt_8_5").placeholder = "6";
	document.getElementById("txt_7_6").placeholder = "7";
	document.getElementById("txt_11_4").placeholder = "8";
	//document.getElementById("txt_11_14").placeholder = "9";
	document.getElementById("txt_13_12").placeholder = "9";
	document.getElementById("txt_18_8").placeholder = "10";
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
//Returns Array
function preparePuzzleArray(){

	var items =[
[0,	0,	0,	'B',	0,	0,	 'C',	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,0,	0,		0],
[0,	0,	0,	'R',	0,	0,	 'A',	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,0,		0],
[0,'S',	'W', 'I',	'T',	'Z',	'E',	'R',	'L',	'A',	'N',	'D',0,		0,	0,	0,	0,	0,	0,	0],
[0,0,	0,	'T',	0,	0,'S',	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,0,	0],
[0, 0,	0,	'I',	0,	'W',	'A',	'R',	0,	0,	0,	0,	0,	0,	0,0,	0,	0,	0,	0],
[0, 0 ,	0,	'S'	,0,	0,	'R',	0,	'I',	0,	0,	0,	0,	0,	0,	0,	0,0,	0,	0],
[0, 0 ,	0,	'H',	0,	0,	0,	0,	'T',	0,	0,	0,	0,	0,	0,	0,	0,0,	0,	0],
[0, 0 ,	0,	0,	0,	0,'C',	0,	'A',	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0, 0 ,	0,	0,	0,'H',	'I',	'T',	'L',	'E',	'R',	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,0,	'P',	0,	'Y',	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,	0,0,	'H',	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,'B',	'L',	'E',	'T',	'C',	'H',	'T',	'L',	'Y',	 'P',	'A',	'R',	'K',	'S', 0, 0],
[0,	0,	0,	0,0,	0,	'R',	0,	0,	0,	0,	0,	 0,	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,0,	0,	0,	0,	0,	0,	0,	0,	'G',	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,0,	0,	0,	0,	0,	0,	0,	0,	'E',	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,0,	0,	0,	0,	0,	0,	0,	0,	'R',	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,0,	0,	0,	0,	0,	0,	0,	0,	'M',	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,0,	0,	0,	0,	0,	0,	0,	0,	'A',	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,0,	0,	0,	0,	'J',	'A',	'P',	'A',	'N',	0,	0,	0,	0,	0,	0,	0],
[0,	0,	0,	0,0,	0,	0,	0,	0,	0,	0,	0,	'Y',	0,	0,	0,	0,	0,	0,	0]
];				
			
			
return items;
}
//Clear All Button
function clearAllClicked(){
	currentTextInput = '';
	var puzzleTable = document.getElementById("puzzle");
	puzzleTable.innerHTML = '';
    initializeScreen();
}
//Check button
function checkClicked(){
	var correct = 0;
	console.log(puzzleArrayData.length);
	console.log(puzzleArrayData[0].length);
	for ( var i = 0; i < puzzleArrayData.length ; i++ ) {
		var rowData = puzzleArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				
				if(selectedInputTextElement.value != puzzleArrayData[i][j]){
					selectedInputTextElement.style.backgroundColor = '#e60000';
					
				}else{
					selectedInputTextElement.style.backgroundColor = "#00d938ff";
					document.getElementById("selectedInputTextElement").disabled = true;
					correct++;
				}
			}
		}
	}
	console.log("correct: " + correct);
	if (correct === 63) {
		showNext();
	}
}
//Clue Button
function clueClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		document.getElementById(temp1).value = puzzleArrayData[row][column];
		//checkClicked();
	}
}
//Solve Button
function solveClicked(){
	if (currentTextInput != null){
		var temp1 = currentTextInput;
		var token = temp1.split("_");
		var row = token[1];
		var column = token[2];
		
		// Print elements on top
		for(j = row; j >= 0; j--){
			if(puzzleArrayData[j][column] != 0){
				document.getElementById('txt' + '_' + j + '_' + column).value = puzzleArrayData[j][column];
				}else break;
		}
		// Print elements on right
		for(i = column; i< puzzleArrayData[row].length; i++){
			if(puzzleArrayData[row][i] != 0){
				document.getElementById('txt' + '_' + row + '_' + i).value = puzzleArrayData[row][i];
				}else break;
		}
		
		// Print elements below
		for(m = row; m< puzzleArrayData.length; m++){
			if(puzzleArrayData[m][column] != 0){
				document.getElementById('txt' + '_' + m + '_' + column).value = puzzleArrayData[m][column];
				}else break;
		}
		// Print elements on left
		for(k = column; k >= 0; k--){
			if(puzzleArrayData[row][k] != 0){
				document.getElementById('txt' + '_' + row + '_' + k).value = puzzleArrayData[row][k];
				}else break;
		}
		// Done!
		
	}
}
function showNext(){
  document.getElementById("next").style.visibility='visible';
}
