"use strict";
/* Pasos para desarrollar el codigo

1. Definir el canvas y establecer el contexto 2D.
2. Crear una función para la creación de varios circulos.
3. Añadir el movimiento a cada uno de esos circulos.
4. Añadir el rebote al canvas cuando los circulos salen de las bordas.

*/
// Esta sección define el canvas y establece el contexto 2D. Paso 1.0
let canvas = document.querySelector('canvas');
if (!canvas)
    throw new Error('Canvas not found');
let ctx = canvas.getContext('2d');
if (!ctx)
    throw new Error('Context not available');
// Tamaño del canvas.
canvas.width = 780;
canvas.height = 780;
// Variables para la animación.
let radius = 20;
let x = Math.random() * (canvas.width - radius * 2) + radius;
let y = Math.random() * (canvas.height - radius * 2) + radius;
let dx = 2;
let dy = 2;
for (let i = 0; i < 5; i++) {
    function drawCircle() {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        // Establece la sombra
        // Primera sombra
        ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.fill();
        // Segunda sombra
        ctx.shadowColor = "rgba(255, 0, 0, 0.3)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = -5;
        ctx.shadowOffsetY = -5;
        ctx.fill();
        // Tercera sombra
        ctx.shadowColor = "rgba(255, 0, 0, 0.3)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = -5;
        ctx.fill();
        // Cuarta sombra
        ctx.shadowColor = "rgba(0, 0, 0, 0.3)";
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = -5;
        ctx.shadowOffsetY = 5;
        ctx.fill();
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fill();
        ctx.closePath();
    }
    drawCircle();
    /*
    function update(): void {
        ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
        drawCircle();
    
        let randomNumber = Math.random() + 1;
    
        x += dx;
        y += dy;
    
        if (x + radius > canvas!.width || x - radius < 0) {
            dx = -dx;
        }
        if (y + radius > canvas!.height || y - radius < 0) {
            dy = -dy;
        }
    
        requestAnimationFrame(update);
    }
    
    update();
    */
}
