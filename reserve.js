
/* Don't know if there's any other ways to make this flow happen but changing display state is the easiest I can think of */

function openPopup() {
    document.getElementById("reserve-popup").style.display = "block";
}

function closePopup() {
    document.getElementById("reserve-popup").style.display = "none";
}
  
function confirmPopup1() {
    document.getElementById("reserve-popup").style.display = "none";
    document.getElementById("recorded").style.display = "block";
}

function confirmPopup2() {
    document.getElementById("recorded").style.display = "none";
}