const comingSoon = document.getElementById('comingSoon');
const caBtn = document.getElementById('ca-btn');
const aboutGreg = document.getElementById("aboutGreg");
const textToCopy = "0xFAcED20d2ec854729702E153953F31d637C05eFE";

comingSoon.addEventListener("click", () => {
    alert("Coming soon, stay tuned...");
});

caBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(textToCopy);
    alert("Contract address copied!");
});
