// Calculator
document.getElementById("calcForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const op = document.querySelector("input[name='op']:checked").value;
    let result;
    if (op === "/" && num2 === 0) {
        alert("Cannot divide by zero.");
        return;
    }
    switch (op) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
    }
    alert("Result: " + result);
});

// Factorial
function factorial(n) {
    if (n < 0) return NaN;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
document.getElementById("factorialForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const num = parseInt(document.getElementById("factNum").value);
    alert("Factorial: " + factorial(num));
});

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
document.getElementById("fibForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const n = parseInt(document.getElementById("fibInput").value);
    alert("Fibonacci(" + n + ") = " + fibonacci(n));
});

// Min, Max, Range
function getStats(a, b, c) {
    const nums = [a, b, c];
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    return {
        min: min,
        max: max,
        range: max - min
    };
}
document.getElementById("rangeForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const val1 = parseFloat(document.getElementById("val1").value);
    const val2 = parseFloat(document.getElementById("val2").value);
    const val3 = parseFloat(document.getElementById("val3").value);
    const stats = getStats(val1, val2, val3);
    alert(Min: ${stats.min}, Max: ${stats.max}, Range: ${stats.range});
});

// Mailing List
const mailForm = document.getElementById("mailForm");
const signupResults = document.getElementById("signupResults");

mailForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const zip = document.getElementById("zip").value;

    const output = <div><strong>${fname} ${lname}</strong> - ${email} - ${zip}</div>;
    signupResults.innerHTML += output;
});