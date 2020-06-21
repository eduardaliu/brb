$(document).ready(() => {


	const hamburger = document.querySelector(".hamburger");
	const emoji = document.querySelector(".emoji");
	




	hamburger.addEventListener("click", function () {

		emoji.classList.toggle('is-active')

		hamburger.classList.toggle("is-active");
		document.querySelector('.blue').classList.toggle('is-active');

		setTimeout(function () {
			document.querySelector('.imggit').classList.toggle('is-active');
			document.querySelector('.imglink').classList.toggle('is-active');
			document.querySelector('h1').classList.toggle('is-active');
			document.querySelector('body').classList.toggle('is-active');
			document.querySelector('.extra').classList.toggle('is-active');
		}, 300);

		emoji.addEventListener("click", function () {
			// emoji.classList.toggle('is-active');
			if (emoji.innerHTML == '🌦') {
				emoji.innerHTML = '🦄'
				document.querySelector('body').classList.add('uni')
				document.querySelector('.blue').classList.toggle('uni');

			} else {
				emoji.innerHTML = '🌦'
				document.querySelector('body').classList.remove('uni')
				
			}
	
		})


	});













});

// $(document).on("mousemove", function (ev) {
// 	console.log('asas')
// 	let mouseX = ev.originalEvent.pageX;
// 	let mouseY = ev.originalEvent.pageY;

// 	let offsetX = window.innerWidth * 0.01;
// 	let offsetY = window.innerHeight * 0.1;

// 	$("span").each(function () {
// 		let imgX = $(this).position().left + offsetX / 2;
// 		let imgY = $(this).position().top + offsetY / 2;

// 		let diffX = mouseX - imgX;
// 		let diffY = mouseY - imgY;

// 		let radians = Math.atan2(diffY, diffX);

// 		let angle = (radians * 180) / Math.PI;

// 		$(this).css("transform", "rotate(" + angle + "deg)");
// 	});
// });