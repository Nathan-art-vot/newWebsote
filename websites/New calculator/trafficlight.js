var traffic_lights = "green";
var result;
switch (traffic_lights) {
  case "red": {
    console.log("Stop");
    result ="stop"
    break;
  }
  case "yellow": {
    console.log("warning");
    result = "warning"
    break;
  }
  case "green": {
    console.log("Go");
    result = "Go"
    break;
  }
}
document.getElementById("traffic_lights").innerHTML = traffic_lights


document.getElementById("resultTrafic").innerHTML = result;