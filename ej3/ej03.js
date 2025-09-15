/*
# Ejercicio 03.

La función `showRandomDigit` está asociada al click en el display. Al ejecutarse
debe definir un valor aleatorio entre 0 y 9 y mostrar el dígito correspondiente.
*/

const segA = document.getElementById("seg-a");
const segB = document.getElementById("seg-b");
const segC = document.getElementById("seg-c");
const segD = document.getElementById("seg-d");
const segE = document.getElementById("seg-e");
const segF = document.getElementById("seg-f");
const segG = document.getElementById("seg-g");

function showRandomDigit() {
  segA.style.display = "block";
  segB.style.display = "block";
  segC.style.display = "block";
  segD.style.display = "block";
  segE.style.display = "block";
  segF.style.display = "block";
  segG.style.display = "block";


  let numeroRandom = Math.floor(Math.random() * 10);
  if (numeroRandom == 0) {
    segG.style.display = "none";
  }
  if (numeroRandom == 1) {
    segA.style.display = "none";
    segD.style.display = "none";
    segE.style.display = "none";
    segF.style.display = "none";
    segG.style.display = "none";
  }
  if (numeroRandom == 2) {
    segC.style.display = "none";
    segF.style.display = "none";
  }
  if (numeroRandom == 3) {
    segE.style.display = "none";
    segF.style.display = "none";
  }
  if (numeroRandom == 4) {
    segA.style.display = "none";
    segD.style.display = "none";
    segE.style.display = "none";
  }
  if (numeroRandom == 5) {
    segB.style.display = "none";
    segE.style.display = "none";
  }
  if (numeroRandom == 6) {
    segB.style.display = "none";
  }
  if (numeroRandom == 7) {
    segD.style.display = "none";
    segE.style.display = "none";
    segF.style.display = "none";
    segG.style.display = "none";
  }
  if (numeroRandom == 9) {
    segE.style.display = "none";
  }

}
