
function convertColor() {
    color = document.getElementById("color01").value;
    if (color == "") {
        validateColor();
        return;
    }
    color = color.toLowerCase();
    color = color.replace(/;/g, ","); //replace any semicolon with a comma
    //document.getElementsByTagName("h1")[0].style.color = w3color(color).toRgbString();
    c = w3color(color);
    if (c.valid) {
        document.getElementById("resultTable").style.display = "table";
        document.getElementById("error01").innerHTML = "";
        document.getElementById("result01").style.backgroundColor = c.toRgbaString();
        if (c.toName() == "") {
            document.getElementById("name01").style.fontStyle = "italic";
            document.getElementById("name01").style.color = "#757575";
            document.getElementById("name01").innerHTML = "no name";
        } else {
            document.getElementById("name01").style.fontStyle = "normal";
            document.getElementById("name01").style.color = "#000000";
            document.getElementById("name01").innerHTML = c.toName();
        }
        document.getElementById("helpname01").innerHTML = "Name";
        document.getElementById("hex01").innerHTML = c.toHexString();
        document.getElementById("helphex01").innerHTML = "<a href='colors_hexadecimal.asp?color=" + c.toHexString().substr(1) + "'>Hex</a>";
        document.getElementById("cmyk01").innerHTML = c.toCmykString();
        document.getElementById("helpcmyk01").innerHTML = "<a href='colors_cmyk.asp?color=" + c.toCmykStringDecimal() + "'>Cmyk</a>";
        document.getElementById("helpncol01").innerHTML = "<a href='colors_ncol.asp?color=" + c.toNcolStringDecimal() + "'>Ncol</a>";
        if ((color.indexOf("rgba") > -1 || color.indexOf("hsla") > -1 || color.indexOf("hwba") > -1 || color.indexOf("ncola")) > -1
            || (color.indexOf("cmyk") == -1 && color.split(",").length == 4)
            || (color.indexOf("cmyk") > -1 && color.split(",").length == 5)) {
            document.getElementById("rgb01").innerHTML = c.toRgbaString();
            document.getElementById("hsl01").innerHTML = c.toHslaString();
            document.getElementById("hwb01").innerHTML = c.toHwbaString();
            document.getElementById("ncol01").innerHTML = c.toNcolaString();
            document.getElementById("helprgb01").innerHTML = "Rgba";
            document.getElementById("helphsl01").innerHTML = "Hsla";
            document.getElementById("helphwb01").innerHTML = "Hwba";
        } else {
            document.getElementById("rgb01").innerHTML = c.toRgbString();
            document.getElementById("hsl01").innerHTML = c.toHslString();
            document.getElementById("hwb01").innerHTML = c.toHwbString();
            document.getElementById("ncol01").innerHTML = c.toNcolString();
            document.getElementById("helprgb01").innerHTML = "<a href='colors_rgb.asp?color=" + c.toRgbString() + "'>Rgb</a>";
            document.getElementById("helphsl01").innerHTML = "<a href='colors_hsl.asp?color=" + c.toHslStringDecimal() + "'>Hsl</a>";
            document.getElementById("helphwb01").innerHTML = "<a href='colors_hwb.asp?color=" + c.toHwbStringDecimal() + "'>Hwb</a>";
        }

        document.getElementById("linktocp").innerHTML = "<hr style='border-color:#dfdfdf'><p><a href='colors_picker.asp?color=" + c.toHexString().substr(1) + "'>Use this color in our Color Picker</a></p>";
        
    } else {
        validateColor();
    }
}
function validateColor() {
    var color, c, x, i, l;
    color = document.getElementById("color01").value;
    c = c.replace(/;/g, ","); //replace any semicolon with a comma    
    c = w3color(color);
    if (color == "" || !c.valid) {
        document.getElementById("result01").style.backgroundColor = "#f1f1f1";
        document.getElementById("resultTable").style.display = "none";
        document.getElementById("error01").innerHTML = "Not a legal color value";
        document.getElementById("hex01").innerHTML = "";
        document.getElementById("rgb01").innerHTML = "";
        document.getElementById("hsl01").innerHTML = "";
        document.getElementById("hwb01").innerHTML = "";
        document.getElementById("ncol01").innerHTML = "";
        document.getElementById("helpname01").innerHTML = "";
        document.getElementById("helphex01").innerHTML = "";
        document.getElementById("helprgb01").innerHTML = "";
        document.getElementById("helphsl01").innerHTML = "";
        document.getElementById("helphwb01").innerHTML = "";
        document.getElementById("helpncol01").innerHTML = "";
    } else {
        document.getElementById("resultTable").style.display = "table";
        document.getElementById("error01").innerHTML = "";
    
        convertColor();
    }
}
function submitOnEnter(e) {
    keyboardKey = e.which || e.keyCode;
    if (keyboardKey == 13) {
        validateColor();
    }
}

convertColor();