const FRM_CALCULAR = document.querySelector("#frmCalcula");

FRM_CALCULAR.addEventListener("submit", function (event) {
    event.preventDefault();
});

let elementosIngresados = [];

document.getElementById("botones").addEventListener("click", function () {
    let numeroIngresado = parseInt(document.querySelector("#txtNumero").value);
    let numeroIngresadoInput = document.querySelector("#txtNumero");

    if (numeroIngresadoInput.value.trim() == "") {
        alert("Ingresa un valor en la caja de texto");
        return;
    }

    elementosIngresados = [];

    for (let i = 0; i < numeroIngresado; i++) {
        const num = prompt(`Ingrese el elemento # ${i + 1}:`);

        if (!num) {
            alert('Por favor, ingrese un número válido.');
            return;
        }

        elementosIngresados.push(Number(num));
    }

    const originalArray = [...elementosIngresados];
    printArray('resultado', originalArray);

    document.getElementById("botones").style.display = "none";
    document.getElementById("ordenar").style.display = "block";
    document.getElementById("ordenSelect").style.display = "block";
});

document.getElementById("ordenar").addEventListener("click", function () {
    let ordenSeleccionado = document.querySelector("#ordenSelect").value;
    if (ordenSeleccionado==='nada') {
        alert('por favor sellecione un tipo de ordenamiento');
        return;
    }

    const arrayCopy = [...elementosIngresados];

    shellsort(arrayCopy, ordenSeleccionado);

    printArray('resultado2', arrayCopy);
});

function printArray(elementId, array) {
    document.getElementById(elementId).textContent = array.join(', ');
}

function shellsort(array, orden) {
    const n = array.length;
    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const temp = array[i];
            let j = i;
            while (j >= gap && (orden === 'ascendente' ? array[j - gap] > temp : array[j - gap] < temp)) {
                array[j] = array[j - gap];
                j -= gap;
            }
            array[j] = temp;
        }
    }
}
document.getElementById("imprimir").addEventListener("click", function () {
    location.reload();
});

