const fruit = document.getElementById("fruitsLikeI");
fruit.style.color = "green";

fruit.innerText = "changed";

const fruits = document.getElementsByClassName("fruits");
for (const fruite of fruits) {
    fruite.style.color = "purple";
}