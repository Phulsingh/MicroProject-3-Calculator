let inputbox = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons);
let string = '';

buttonArray.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const operators = ['+', '-', '*', '/'];
        const lastChar = string.charAt(string.length - 1);

        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            inputbox.value = string;
        } else if (e.target.innerHTML == 'RESET') {
            string = '';
            inputbox.value = string;
        } else if (e.target.innerHTML == '=') {
            try {
                string = eval(string).toString();
                inputbox.value = string;
            } catch (err) {
                inputbox.value = 'Error';
                string = '';
            }
        } else {
            // Prevent multiple consecutive operators
            if (operators.includes(e.target.innerHTML) && operators.includes(lastChar)) {
                return;
            }
            string += e.target.innerHTML;
            inputbox.value = string;
        }
    });
});