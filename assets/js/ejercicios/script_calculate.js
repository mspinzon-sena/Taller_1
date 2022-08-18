function calcular() {
    let num1=parseInt(document.getElementById("num1").value);
    let num2=parseInt(document.getElementById("num2").value);

    let op=document.getElementById("operacion").value;

    switch (op) {
        case "1":
            let sum=num1+num2;
            alert(`El primer número es ${num1} y el segundo número es ${num2} , el resultado de la suma es ${sum} `)
        break;
        case "2":
            let res=num1-num2;
            alert(`El primer número es ${num1} y el segundo número es ${num2} , el resultado de la resta es ${res} `)
        break;
        case "3":
            let mult=num1*num2;
            alert(`El primer número es ${num1} y el segundo número es ${num2} , el resultado de la multiplicación es ${mult} `)
        break;
        case "4":
            let div=num1/num2;
            alert(`El primer número es ${num1} y el segundo número es ${num2} , el resultado de la división es ${div} `)
        break;
        default:
            alert(`Elije alguna operación antes de calcular`)

        break;
    }
}