const comingSoon = document.getElementById('comingSoon');
const caBtn = document.getElementById('ca-btn');
const aboutGreg = document.getElementById("aboutGreg");
const textToCopy = "";

comingSoon.addEventListener("click", () => {
    alert("Coming soon, stay tuned...");
});

caBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(textToCopy);
    alert("To be announced!");
});
