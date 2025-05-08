document.addEventListener("DOMContentLoaded", () => {
    const mensaje = document.querySelector("h1");

    mensaje.addEventListener("mousemove", (event) => {
        const bodyRect = document.body.getBoundingClientRect();
        const maxX = bodyRect.width - mensaje.offsetWidth;
        const maxY = bodyRect.height - mensaje.offsetHeight;

        const x = Math.random() * maxX;
        const y = Math.random() * maxY;

        mensaje.style.position = "absolute";
        mensaje.style.left = `${x}px`;
        mensaje.style.top = `${y}px`;
    });
});