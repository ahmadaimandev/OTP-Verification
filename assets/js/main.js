const input = document.querySelectorAll("input"),
button = document.querySelector("button");

input.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input,
        nextInput = input.nextElementSibling,
        prevInput = input.previousElementSibling;

        if(currentInput.value.length > 1) {
            currentInput.value = "";
            return
        }
    })
})