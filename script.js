$(document).ready(() => {


	const mobile = document.querySelector(".mobile");
	const desktop = document.querySelector(".desktop");

	const hamburger = document.querySelector(".hamburger");
	const emoji = document.querySelector(".emoji");


	document.querySelector("body").addEventListener("click", function () {
		console.log('aaoooo');
		document.querySelector(".hamburger-inner").classList.add("focus");
		setTimeout(function () {
			document.querySelector(".hamburger-inner").classList.remove("focus");
		}, 300)
	})


	hamburger.addEventListener("click", function () {

		hamburger.classList.toggle("is-active");
		document.querySelector('.blue').classList.toggle('is-active');

		setTimeout(function () {
			emoji.classList.toggle('is-active')

			document.querySelector('.imggit').classList.toggle('is-active');
			document.querySelector('.imglink').classList.toggle('is-active');
			document.querySelector('h1').classList.toggle('is-active');
			document.querySelector('body').classList.toggle('is-active');
			document.querySelector('.extra').classList.toggle('is-active');
		}, 300);

		emoji.addEventListener("click", function () {
			// emoji.classList.toggle('is-active');
			if (emoji.innerHTML == '<img src="img/click.svg">🐴') {
				emoji.innerHTML = '<img src="img/fab.svg">🦄'
				document.querySelector('.blue').classList.add('uni');
				document.querySelector('.extra').classList.add('uni');
			} else {
				emoji.innerHTML = '<img src="img/click.svg">🐴'
				document.querySelector('.blue').classList.remove('uni')
				document.querySelector('.extra').classList.remove('uni');
			}
		})
	});

	$('.hello-cont').on("click", function () {
		document.querySelector('.overlay').classList.toggle('is-active');
		if (document.querySelector('.hello').innerHTML === 'hello!') {
			document.querySelector('.hello').innerHTML = 'byebye!';
		} 
		else  {
		 	document.querySelector('.hello').innerHTML = 'hello!';
		 }
	})

	$('.codegif').mouseenter(function (e) {
		console.log('works')
		$("#gifcode").css('opacity', '1');
		$("#gifcode").css({
			left: e.pageX - 400,
			top: e.pageY
		});
	}).on('mouseleave', function () {
		$("#gifcode").css('opacity', '0');
	});

	$('.designgif').mouseenter(function (e) {
		console.log('works')
		$("#gifdesign").css('opacity', '1');
		$("#gifdesign").css({
			left: e.pageX - 400,
			top: e.pageY
		});
	}).on('mouseleave', function () {
		$("#gifdesign").css('opacity', '0');
	});

	$(document).on("mousemove", function (ev) {
		let mouseX = ev.originalEvent.pageX;
		let mouseY = ev.originalEvent.pageY;

		let offsetX = window.innerWidth * 0.01;
		let offsetY = window.innerHeight * 0.1;

		$(".line span").each(function () {
			let imgX = $(this).position().left + offsetX / 2;
			let imgY = $(this).position().top + offsetY / 2;

			let diffX = mouseX - imgX;
			let diffY = mouseY - imgY;

			let radians = Math.atan2(diffY, diffX);

			let angle = (radians * 180) / Math.PI;

			$(this).css("transform", "rotate(" + angle + "deg)");
		});
	});



});