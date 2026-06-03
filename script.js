const cards = document.querySelectorAll(".card");

cards.forEach(card => {

card.addEventListener("mouseenter", () => {
card.style.transition = "0.3s";
card.style.transform = "translateY(-8px)";
});

card.addEventListener("mouseleave", () => {

if(card.classList.contains("destaque")){
card.style.transform = "scale(1.05)";
}else{
card.style.transform = "translateY(0)";
}

});

});
