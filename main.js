// set count
let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn")

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(e.target.innerHTML == "Decrease"){
            count--;
        }

        if(e.target.innerHTML == "Increase"){
            count++;
        }

        if(e.target.innerHTML == "Reset"){
            count = 0;
        }

        value.textContent = count;
    })
})