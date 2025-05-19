function calcularPago() {
    const horas = parseInt(document.getElementById("horas").value);
    const tipo = document.getElementById("tipo").value;
    const resultado = document.getElementById("resultado");

    if (!horas || !tipo) {
        resultado.textContent = "Por favor, complete todos los campos.";
        return;
    }

    let tarifa;

    switch (tipo) {
        case "chico":
            tarifa = 20;
            break;
        case "camioneta":
            tarifa = 30;
            break;
        case "camion":
            tarifa = 40;
            break;
        default:
            resultado.textContent = "Tipo de vehículo no válido.";
            return;
    }

    const total = tarifa * horas;
    resultado.textContent = `Total a pagar: $${total.toFixed(2)} MXN`;
}