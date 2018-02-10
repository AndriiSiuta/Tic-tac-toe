const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');

canvas.height = 600;
canvas.width = 600;

document.body.appendChild(canvas);
const paddingLeft = 200;
const paddingRight = paddingLeft;
const paddingTop = 200;
const paddingBottom = paddingTop;

let mouseX;
let mouseY;

drawPlayField = () => {
    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(paddingLeft, 0);
    ctx.lineTo(paddingLeft, 600);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(canvas.width - paddingRight, 0);
    ctx.lineTo(canvas.width - paddingRight, 600);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, canvas.height - paddingTop);
    ctx.lineTo(600, canvas.height - paddingTop);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(0, paddingTop);
    ctx.lineTo(600, paddingTop);
    ctx.stroke();
    ctx.closePath();
};

drawCircle = () => {

};

drawDagger = () => {

};

eventHandler = (e) => {

};

getMousePosition = (canvas, e) => {
    let rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    }
};

sendCoordinate = (x, y) => {

};

canvas.addEventListener('mousemove', (e) => {
    console.log(e);
    let mousePosition = getMousePosition(canvas, evt);
    sendCoordinate(mousePosition.x, mousePosition.y);
});

drawPlayField();
