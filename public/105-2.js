let obj = {
	a: 1,
	b: 2,
	c: 3
}
let formData = new FormData();

for(let [item, value] of Object.entries(obj)){
    formData.set(item, value);
}

let promise = fetch('/handler/', {
	method: 'POST',
	body: formData,
});