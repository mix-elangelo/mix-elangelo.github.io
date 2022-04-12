// Get the modal
// var modal = document.getElementById("myModal");
// // Get the button that opens the modal
// var btn = document.getElementById("help");
// // When the user clicks the button, open the modal 
// btn.onclick = function() {
// 	modal.style.display = "block";}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];


document.getElementById("help").onclick = function() {
    document.getElementById("helpModal").style.display = "block";
}

document.getElementById("history").onclick = function() {
    document.getElementById("histModal").style.display = "block";
}

document.getElementById("submitButton").onclick = function() {
    document.getElementById("startModal").style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    document.getElementById("helpModal").style.display = "none";
}

span2.onclick = function() {
    document.getElementById("histModal").style.display = "none"; //DOESNT WORK STILL
}

span3.onclick = function() {
    document.getElementById("startModal").style.display = "none"; //DOESNT WORK STILL
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("helpModal")) {
        document.getElementById("helpModal").style.display = "none";
    }
    if (event.target == document.getElementById("histModal")) {
        document.getElementById("histModal").style.display = "none";
    }
    if (event.target == document.getElementById("startModal")) {
        document.getElementById("startModal").style.display = "none";
    }
}

//closes modal when history color is clicked on
function closeModalWhenHistColClicked(){
    document.getElementById("histModal").style.display = "none";
}

//to check color
function changeColor(color){
    var newColor = checkHash(color);
    document.getElementsByName('hex')[0].value= newColor;

    var element = document.getElementById("box");
    element.style.backgroundColor = newColor;	
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
 

//for volume slider
var slider = document.getElementById("myRange");
var output = document.getElementById("myVol");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

function convertToCMYK(hexCode){
    document.getElementsByName('cmykDisplay')[0].value= hexCode;

}