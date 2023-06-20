import "./styles.css";

for (var num = 10; num > 0; num--) {
  var elm = document.createElement("button");
  elm.innerHTML = num;
  elm.setAttribute("id", num);
  elm.setAttribute("class", "circle");
  var function_name = "remove(" + num + ")";
  elm.setAttribute("onclick", function_name);
  document.getElementById("main").appendChild(elm);

  var radius = 30 + Math.floor(Math.random() * 100);
  document.getElementById(num).style.height = "" + radius + "px";
  document.getElementById(num).style.width = "" + radius + "px";
  document.getElementById(num).style.borderRadius = "" + radius + "px";

  var red = 100 + Math.floor(Math.random() * 155);
  var green = 100 + Math.floor(Math.random() * 155);
  var blue = 100 + Math.floor(Math.random() * 155);

  document.getElementById(num).style.backgroundColor =
    "rgb(" + red + "," + blue + "," + green + ")";
}

var next = 1;
document.remove = function (id) {
  if (id === next) {
    var element = document.getElementById(id);
    if (element) {
      document.getElementById("main").removeChild(element);
    }
    next = next + 1;
  }
};

move();
function move() {
  for (var num = 1; num < 11; num++) {
    var left = 10;
    var top = 100;

    left = left + Math.floor(Math.random() * 400);
    top = top + Math.floor(Math.random() * 600);

    var element = document.getElementById(num);
    if (element) {
      document.getElementById(num).style.left = "" + left + "px";
      document.getElementById(num).style.top = "" + top + "px";
    }
  }
  setTimeout(move, 5000);
}
