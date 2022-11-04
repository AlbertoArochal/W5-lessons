export default function factorial(n) {
    if (n < 0) {
        throw "error";
    }
    let contador = 1;
    for (let i = 1; i <= n; i++) {
        contador *= i;
    }
    return contador;
}
