
function sum() {
    let array = document.querySelector(".input_a").value.split('');
    let sum = 0;
    array.forEach(element => {
        sum += Number(element);
    });
    let output = document.querySelector(".output_");
    output.innerHTML = sum;

}

function inputSomeValue() {
    var userAnswer = prompt("Введіть число:", "Ваше значення")
    if (isNaN(userAnswer)) {
        alert("Це не цифра :( Попробуйте ще раз.")
        inputSomeValue();
    } else {

    }
}

function multiply() {
    let array = document.querySelector(".input_a").value.split('');
    let mult = 1;
    array.forEach(element => {
        mult *= Number(element);
    });
    let output = document.querySelector(".output_");
    output.innerHTML = mult;
}

function find_sim() {
    let array = document.querySelector(".input_b").value.split('');
    let result = {};
    for (let i = 0; i < array.length; i++) {
        var a = array[i];
        if (result[a] != undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    for (var key in result)
        document.write('Число ' + key + ' == ' + result[key] + 'раз(а) <br>');

}

function fl() {
    let string = document.querySelector(".input_c ").value;
    let newstr = string[0].toLocaleUpperCase() + string.slice(1, string.length);
    let output = document.querySelector(".output_c");
    output.innerHTML = newstr;

}

