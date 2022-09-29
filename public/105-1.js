let form = document.querySelector('form');
let input1 = document.querySelector('[name="num1"]');
let input2 = document.querySelector('[name="num2"]');
let input3 = document.querySelector('[name="num3"]');
let input4 = document.querySelector('[name="num2"]');
let input5 = document.querySelector('[name="num3"]');
let div = document.querySelector('div')

form.addEventListener('submit', async function(event) {
    event.preventDefault()
	let promise =  await fetch('/handler/', {
		method: 'POST',
		body: new FormData(this),
	})
	let text = await promise.text();
    console.log(text);
    div.innerHTML = text;
});