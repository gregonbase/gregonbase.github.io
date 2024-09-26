const comingSoon = document.getElementById('comingSoon');
const caBtn = document.getElementById('ca-btn');
const aboutGreg = document.getElementById("aboutGreg");
const textToCopy = "0x4d5a8915EDa28a0a67cE68CF8BeAF796ee9f517e";

comingSoon.addEventListener("click", () => {
    alert("Coming soon, stay tuned...");
});

caBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(textToCopy);
    alert("Contract address succesfully copied!");
});
