// function go(options) {
// 	let {speed = 4, enable: {hyperdrive = false, frobnifier = true}} = options; 

// 	console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
// };
	
// go({speed: 5}) // ошибка: Uncaught TypeError: Cannot destructure property `hyperdrive` of 'undefined' or 'null'.


// // первый способ решения проблемы:
function go(options) {
	let {speed = 4, enable: {hyperdrive = false, frobnifier = true} ={}} = options; 
	// Задаем enable значение {} по умолчанию !

	console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
};

go({speed: 5, enable: {}}); // Задаем в options enable'у значение {}

// // второй способ решения проблемы:
// function go(options) {
// 	let {speed = 4, enable: {hyperdrive = false, frobnifier = true}} = options;
// 	console.log("speed=", speed, "hyperdrive:", hyperdrive, "frobnifier:", frobnifier);
// };

// go({speed: 5, enable: {}}); // Задаем в options enable'у значение {}