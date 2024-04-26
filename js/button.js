var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
        var img = document.createElement("img");
        img.src = "https://www.pngall.com/wp-content/uploads/11/Cute-Puppy-PNG-Cutout.png";
        document.getElementById("demo").appendChild(img);
    }
}