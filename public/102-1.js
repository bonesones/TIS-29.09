let div= document.querySelector('div');
let button1 = document.querySelector('#a');
let button2 = document.querySelector('#b');
let button3 = document.querySelector('#c');

button1.addEventListener('click', function() {
	fetch('/ajax.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});

button2.addEventListener('click', function() {
	fetch('/second.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});

button3.addEventListener('click', function() {
	fetch('/third.html').then(
		response => {
			return response.text();
		}
	).then(
		text => {
			div.innerHTML = text;
		}
	);
});