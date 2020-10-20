/* LOGIN */

function Loguin() {
  let ususario = document.getElementById("usu").value;
  let pass = document.getElementById("pass").value;

  console.log(pass);
  console.log(ususario);

  if (pass == "123456" && ususario == "gabriel") {
    alert("LOG OK");
    location.href="index.html";
  
  } else {
    alert("LOG NO OK");
  }
}
