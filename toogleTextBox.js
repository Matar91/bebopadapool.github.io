function toggleTextBox(e) {
  let textBox = "";
  console.log();

  if (e.target.id == "btn1") textBox = "textBox1";
  else if (e.target.id == "btn2") textBox = "textBox2";
  else if (e.target.id == "btn3") textBox = "textBox3";
  else if (e.target.id == "btn4") textBox = "textBox4";
  else if (e.target.id == "btn5") textBox = "textBox5";
  else if (e.target.id == "btn6") textBox = "textBox6";
  else if (e.target.id == "btn7") textBox = "textBox7";
  else if (e.target.id == "btn8") textBox = "textBox8";

  var text = window.document.getElementById(textBox);

  if (text.style.display === "block") {
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
}
