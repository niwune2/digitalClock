function drawDigitalClock() {
	const canvas = document.getElementById('clockCanvas');
	const context = canvas.getContext('2d');
	const now = new Date();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	// Clear the canvas
	context.clearRect(0, 0, canvas.width, canvas.height);

	// Set font and alignment
	context.font = '20px Arial';
	context.textAlign = 'center';
	context.textBaseline = 'middle';

	// Display time
	const timeString = padZero(hours) + ':' + padZero(minutes) + ':' + padZero(seconds);
	context.fillText(timeString, canvas.width / 2, canvas.height / 2);
}

function padZero(num) {
	return (num < 10 ? '0' : '') + num;
}

// Update the clock every second
setInterval(drawDigitalClock, 1000);

// Initial draw
drawDigitalClock();


const displayCanvas = document.getElementById('display');
const ctx = displayCanvas.getContext('2d');
const displayWidth = displayCanvas.width;
const displayHeight = displayCanvas.height;

const digits = {
	'0': { A: true, B: true, C: true, D: true, E: true, F: true, G: false },
	'1': { A: false, B: true, C: true, D: false, E: false, F: false, G: false },
	'2': { A: true, B: true, C: false, D: true, E: true, F: false, G: true },
	'3': { A: true, B: true, C: true, D: true, E: false, F: false, G: true },
	'4': { A: false, B: false, C: true, D: false, E: false, F: true, G: true },
	'5': { A: true, B: false, C: true, D: true, E: false, F: true, G: true },
	'6': { A: true, B: false, C: true, D: true, E: true, F: true, G: true },
	'7': { A: true, B: true, C: true, D: false, E: false, F: false, G: false },
	'8': { A: true, B: true, C: true, D: true, E: true, F: true, G: true },
	'9': { A: true, B: true, C: true, D: false, E: false, F: true, G: true },
};

const posA = 35,
	posB = 20,
	posC = 100,
	posD = 150,
	posE = 165,
	posF = 50,
	posG = 250,
	posH = 255,
	transparency = 0.5;

function drawDigit(digit) {
	const segments = digits[digit];
	if (segments.A) display(35, 20, 150, 20, 100, 100, 200, transparency);
	if (segments.B) display(165, 20, 20, 150, 150, 0, 0, transparency);
	if (segments.C) display(165, 150, 20, 150, 0, 200, 0, transparency);
	if (segments.D) display(35, 280, 150, 20, 0, 100, 200, transparency);
	if (segments.E) display(35, 150, 20, 150, 200, 100, 100, transparency);
	if (segments.F) display(35, 20, 20, 150, 100, 200, 100, transparency);
	if (segments.G) display(35, 140, 150, 40, 0, 100, 200, transparency);
}

drawDigit(8);

function display(x, y, width, height, r, g, b, a) {
	ctx.beginPath();
	ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
	ctx.fillRect(x, y, width, height);
	ctx.fill();
}

const x = 35;
const y = 150;
const w = 180;
const h = 20;
const one = [50, 50, 100, 150, 'orange'];

function drawNumber() {
	switch (number) {
		case '1': drawOne(); break;
		default: return;
	}
}

// 角丸の四角形を描画するためのユーティリティ関数
function drawRoundedRect(ctx, x, y, width, height, radius, r, g, b, a) {
	ctx.beginPath();
	ctx.fillStyle = `rgba(${r},${g},${b},${a})`;

	ctx.moveTo(x + radius, y);
	ctx.lineTo(x + width - radius, y);
	ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
	ctx.lineTo(x + width, y + height - radius);
	ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
	ctx.lineTo(x + radius, y + height);
	ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
	ctx.lineTo(x, y + radius);
	ctx.quadraticCurveTo(x, y, x + radius, y);
	ctx.closePath();
	ctx.fill();
}

function drawTrapezoid(x, y, topWidth, bottomWidth, height, r, g, b, a) {
	ctx.beginPath();
	ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
	ctx.moveTo(x, y); // 左上の点
	ctx.lineTo(x + topWidth, y); // 右上の点
	ctx.lineTo(x + bottomWidth, y + height); // 右下の点
	ctx.lineTo(x - (bottomWidth - topWidth), y + height); // 左下の点
	ctx.closePath();
	ctx.fill(); // 塗りつぶし
	// ctx.stroke(); // 輪郭のみ
}

// drawTrapezoid(35, 20, 150, 130, 20, 255, 50, 150, 0.5)


// 使用例
// drawTrapezoid(ctx,50, 50, 130, 150, 75);
// x, y, topWidth, bottomWidth, height

function drawMusk(x, y, width, height) {
	ctx.beginPath();
	ctx.fillStyle = 'rgba(200, 200, 200, 1)';
	ctx.fillRect(x, y, width, height);
}

function drawMaskTriangle(ctx, x1, y1, x2, y2, x3, y3) {
	ctx.beginPath();
	ctx.fillStyle = 'rgba(50, 50, 50, 1)'; // マスキングに使用する色
	ctx.moveTo(x1, y1); // 最初の頂点
	ctx.lineTo(x2, y2); // 2番目の頂点
	ctx.lineTo(x3, y3); // 3番目の頂点
	ctx.closePath(); // パスを閉じる
	ctx.fill(); // 塗りつぶし
}

// 使用例
drawMaskTriangle(ctx, 50, 50, 100, 100, 50, 100); // x1, y1, x2, y2, x3, y3 の座標
