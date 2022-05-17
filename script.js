// Get the modal
// var modal = document.getElementById("myModal");
// // Get the button that opens the modal
// var btn = document.getElementById("help");
// // When the user clicks the button, open the modal 
// btn.onclick = function() {
// 	modal.style.display = "block";}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];


document.getElementById("help").onclick = function() {
    document.getElementById("helpModal").style.display = "block";
}

// document.getElementById("history").onclick = function() {
//     document.getElementById("histModal").style.display = "block";
// }

// document.getElementById("submitButton").onclick = function() {
//     document.getElementById("startModal").style.display = "block";
// }

// document.getElementById("startButton").onclick = function() {
//     document.getElementById("loadModal").style.display = "block";
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    document.getElementById("helpModal").style.display = "none";
}

// span2.onclick = function() {
//     document.getElementById("histModal").style.display = "none"; //DOESNT WORK STILL
// }

span3.onclick = function() {
    document.getElementById("startModal").style.display = "none"; //DOESNT WORK STILL
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("helpModal")) {
        document.getElementById("helpModal").style.display = "none";
    }
    // if (event.target == document.getElementById("histModal")) {
    //     document.getElementById("histModal").style.display = "none";
    // }
    if (event.target == document.getElementById("startModal")) {
        document.getElementById("startModal").style.display = "none";
    }
}

//closes modal when history color is clicked on
// function closeModalWhenHistColClicked(){
//     document.getElementById("histModal").style.display = "none";
// }

function closeModalWhenStartClicked(){
    document.getElementById("startModal").style.display = "none";
}

//for user to check if right color
function changeColor(color){
    var newColor = checkHash(color);
    document.getElementsByName('hex')[0].value= newColor;

    var element = document.getElementById("box");
    element.style.backgroundColor = newColor;	
}
function changeColor2(color){
    var newColor = checkHash(color);
    document.getElementsByName('hex2')[0].value= newColor;

    var element = document.getElementById("box");
    element.style.backgroundColor = newColor;	
}
function changeColor3(color){
    var newColor = checkHash(color);
    document.getElementsByName('hex3')[0].value= newColor;

    var element = document.getElementById("box");
    element.style.backgroundColor = newColor;	
}
function changeColor4(color){
    var newColor = checkHash(color);
    document.getElementsByName('hex4')[0].value= newColor;

    var element = document.getElementById("box");
    element.style.backgroundColor = newColor;	
}

//to check color box has value
function isThereAValue(){
    let text = document.getElementsByName('hex')[0].value;
    let length = text.length;

    if (text.length==0){
        document.getElementsByName('hex')[0].value = "none";
        return false;
    }
    else{
        return true;
    }
}

function removeImage(){
    var element = document.getElementById("box");
    element.style.backgroundImage = 'none';	
}

function insertHexCode(val){
    document.getElementsByName('hex')[0].value= val;
}

function checkHash(val){
    var hash ='#';
    if (val.substr(0,1)!= "#"){
        var newVal = hash.concat(val);
        return newVal;
    }
    return val;
}
 


//for volume slider in progress
// function volume(range, vol)

var slider = document.getElementById("myRange");
var output = document.getElementById("myVol");

output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("myVol2");

output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}

var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("myVol3");

output3.innerHTML = slider3.value;

slider3.oninput = function() {
  output3.innerHTML = this.value;
}

var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("myVol4");

output4.innerHTML = slider4.value;

slider4.oninput = function() {
  output4.innerHTML = this.value;
}
