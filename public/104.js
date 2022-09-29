let form = document.querySelector('form');
let input1 = document.querySelector('[name="num1"]');
let input2 = document.querySelector('[name="num2"]');
let input3 = document.querySelector('[name="num3"]');
let div = document.querySelector('div');

form.addEventListener('submit', async function(event) {
	let searchParams = new URLSearchParams();
	
	searchParams.set('num1', input1.value);
	searchParams.set('num2', input2.value);
    searchParams.set('num3', input2.value);
	
	let path = '/handler/?' + searchParams.toString();
	event.preventDefault();
    
	const response = await fetch(path);
    const text = await response.text();

    div.innerHTML = text;
    
	
});