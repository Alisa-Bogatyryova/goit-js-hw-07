const input = document.querySelector("#validation-input");
const inputBorder = function(event) {
    input.classList.add('invalid');
    switch (event.currentTarget.value.length) {
        case Number(event.target.dataset.length):
            input.classList.replace("invalid", "valid");
            break;
        case 0:
            input.classList.remove("invalid");
            break;

    }
}
input.addEventListener('input', inputBorder);