let count = 0;

const buttonAdd = document.getElementById("btn-add");
const buttonSub = document.getElementById("btn-sub");
const buttonRes = document.getElementById("btn-res");

const countText = document.getElementById("count");

buttonAdd.addEventListener("click", function () {
    count++;
    countText.textContent = count;

    if (count >= 10) {
        countText.classList.add("font-big");
    }

    if (count >= 15) {
        countText.classList.add("font-bigger");
    }
});

buttonSub.addEventListener("click", function() {
    if (count > 0) {
        count--;
        countText.textContent = count;
    }
    
});

buttonRes.addEventListener("click", function() {
    count = 0;
    countText.textContent = count;
});