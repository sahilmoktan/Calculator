let string = "";

//queryselectorAll selects .button class actions
let buttons = document.querySelectorAll(".button");

//make array from buttton and use foreach
//addEventListener listens click  on array function, e is event listen/recorded
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string; // putting outputString in inputfield of html
    } else if (e.target.innerHTML == "Del") {
      string = string.substring(0, string.length - 1);
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "AC") {
      string = " ";
      document.querySelector("input").value = string;
    } else if (e.target.innerHTML == "%") {
      string = string / 100;
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML; //on upper string(let) adding self as more string occor from event
      document.querySelector("input").value = string;
    }
  });
});
