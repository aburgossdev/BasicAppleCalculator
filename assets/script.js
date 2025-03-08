const pantalla = document.querySelector('.pantalla');
const botones = document.querySelectorAll('.btn');

botones.forEach(boton => {
    boton.addEventListener('click', () => {
        let botonApretado = boton.textContent;

        if (boton.id === 'c') {
            pantalla.textContent = '0';
            return;
        }

        if (botonApretado === "+/-") {
            pantalla.textContent = String(-parseFloat(pantalla.textContent) || 0);
            return;
            
        }

        if (botonApretado === ",") {
            if (!pantalla.textContent.includes('.')) {
                pantalla.textContent += '.';
            }
            return;
        }

        if (botonApretado === "x") {
            botonApretado = "*"; // Corrige la multiplicación
        }

        if (boton.id === 'igual') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                pantalla.textContent = 'ERROR';
            }
            return;
        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'ERROR') {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
