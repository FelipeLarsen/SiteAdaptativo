function load() {
  var msg = window.document.getElementById("msg")
  var img = window.document.getElementById("img")
  var data = new Date()
  //var hora = data.getHours()
  var hora = 22

  msg.innerHTML = `Agora são ${hora} horas.`

  if (hora >= 5 && hora < 12 ) {
    img.src= "manha.jpg"
    document.body.style.background = "#4b59aa"
  }else if (hora >=12 && hora <= 18) {
    img.src= "tarde.jpg"
    document.body.style.background = "#2e376b"
  }else {
    img.src= "noite.jpg"
    document.body.style.background = "#282a36"
  }
}
