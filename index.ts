/* Pasos para desarrollar el codigo

1. Definir el canvas y establecer el contexto 2D.            Listo
2. Crear una función para la creación de varios circulos.    Listo
3. Añadir el movimiento a cada uno de esos circulos.         En progreso
4. Añadir el rebote al canvas cuando los circulos salen de las bordas.

*/

// Configuración básica del canvas y el contexto
let canvas = document.querySelector('canvas');
if (!canvas) throw new Error('Canvas not found');

let ctx = canvas.getContext('2d');
if (!ctx) throw new Error('Context not available');

// Redimensiona el canvas al tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Estructura de datos para los círculos
interface Circle {
    x: number;
    y: number;
    radius: number;
    baseY: number;  // Posición Y base alrededor de la cual flota el círculo
    angle: number;  // Ángulo para la función seno
    speed: number;  // Velocidad de la animación
    amplitude: number;  // Amplitud del movimiento
}

let circles: Circle[] = [];
let firstcirclesQuantity = window.innerWidth / 8;  // Optimiza el rendimiento para pantallas chicas
let fQN = Math.floor(firstcirclesQuantity);  // Redondea hacia abajo
    

// Crear los círculos iniciales
for (let i = 0; i < fQN; i++) {
    let radius = Math.random() * 4 + 2;  // Radio del círculo
    let x = Math.random() * (canvas.width - radius * 3) + radius * 1.5; // Posicion horizontal
    let baseY = Math.random() * (canvas.height - radius * 3) + radius * 1.5; // Posicion vertical
    let speed = (radius * 0.004);  // Velocidad ajustada
    let angle = Math.random() * Math.PI;  // Ángulo inicial aleatorio
    let amplitude = radius;  // Amplitud del movimiento basada en el tamaño

    circles.push({ radius, x, y: baseY, baseY, speed, angle, amplitude });
}

// Dibujar los círculos y aplicar la animación
function draw() {
    ctx!.clearRect(0, 0, canvas!.width, canvas!.height);  // Limpia el canvas

    circles.forEach(circle => {
        // Calcular la nueva posición Y usando una función seno
        circle.y = circle.baseY + Math.sin(circle.angle) * circle.amplitude;

        // Actualizar el ángulo para el siguiente frame
        circle.angle += circle.speed;

        // Dibuja el círculo
        ctx!.beginPath();
        ctx!.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(0, 0, 0, 1)";
        ctx!.fill();
        ctx!.closePath();

        // Aplicar sombras
       ctx!.shadowColor = "rgba(0, 0, 0, 1)";
       ctx!.shadowBlur = 5;
       ctx!.shadowOffsetX = 0;
       ctx!.shadowOffsetY = 0;
       ctx!.fill();

    });

    requestAnimationFrame(draw);  // Llama a draw para el siguiente frame
}

// Redimensionar el canvas y redibujar los círculos
function resize() {
    canvas!.width = window.innerWidth;
    canvas!.height = window.innerHeight;
    let circlesQuantity = window.innerWidth / 8;  // Optimiza el rendimiento para pantallas chicas
    let circlesQuantityNumber = Math.floor(circlesQuantity);  // Redondea hacia abajo
    // Redibuja el contenido después de redimensionar
    circles = [];
    for (let i = 0; i < circlesQuantityNumber; i++) {
        let radius = Math.random() * 2 + 2;
        let x = Math.random() * (canvas!.width - radius * 3) + radius * 1.5;
        let baseY = Math.random() * (canvas!.height - radius * 3) + radius * 1.5;
        let speed = (Math.random() * 0.02) + 0.01;  // Velocidad ajustada
        let amplitude = radius * 2;  // Amplitud del movimiento basada en el tamaño
        let angle = Math.random() * Math.PI * 2;  // Ángulo inicial aleatorio

        circles.push({ x, y: baseY, radius, baseY, angle, speed, amplitude });
    }
}

// Agrega el listener para redimensionar la ventana
window.addEventListener('resize', resize);

// Iniciar la animación
draw();

