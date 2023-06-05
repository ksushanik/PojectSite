function toggleText(button) {
    var hiddenText = button.parentElement.querySelector(".hidden-text");
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
        button.innerHTML = "Скрыть";
    } else {
        hiddenText.style.display = "none";
        button.innerHTML = "Читать далее...";
    }
}