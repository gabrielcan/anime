let cont1 = 0;
let cont2 = 0;
let cont3 = 0;

/* document.getElementById("1").onclick= cambio_img;
document.getElementById("2").addEventListener("click",cambio_img);
document.getElementById("3").addEventListener("click",cambio_img);
 */
function cambio_img(valor_id) {
  if (valor_id == 1 && cont1 < 1) {
    document.getElementById(valor_id).src = "/img/img_01.jpeg";
    document.getElementById("1-1").innerHTML =
      "Aqui hay gato escondido y sera dificil descubir el fondo de todo ésto.";
    cont1++;
  } else if (valor_id == 1 && cont1 >= 1) {
    document.getElementById(valor_id).src = "/img/img_02.jpeg";
    document.getElementById("1-1").innerHTML =
      "L tiene un misterio que que solo él y su intelecto podran dar con el responsables.";
    cont1 = 0;
  } else if (valor_id == 2 && cont2 < 1) {
    document.getElementById(valor_id).src = "/img/img_03.jpeg";
    document.getElementById("2-2").innerHTML =
      "Amor en Dragon Ball Z, la pareja que mas dispareja y adorada entre los fans.";
    cont2++;
  } else if (valor_id == 2 && cont2 >= 1) {
    document.getElementById(valor_id).src = "/img/img_04.jpeg";
    document.getElementById("2-2").innerHTML =
      "Some quick example text to build on the card title and make up the bulk of the card's content.";
    cont2 = 0;
  } else if (valor_id == 3 && cont3 < 1) {
    document.getElementById(valor_id).src = "/img/img_05.jpeg";
    cont3++;
  } else {
    document.getElementById(valor_id).src = "/img/img_06.jpeg";
    cont3 = 0;
  }
}
