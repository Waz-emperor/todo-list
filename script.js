

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  var d = new Date();
  li.appendChild(t);
  if (inputValue === '') {
    alert("You need to write smth");
  } else {
    document.getElementById("myUL").appendChild(li);
   
    document.getElementById("myUL").innerHTML = d;
  }
    document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  li.appendChild(span);
  d.appendChild(txt);
} 


