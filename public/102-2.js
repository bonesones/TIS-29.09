let div= document.querySelector('div');
let button = document.querySelector('#a');
let  array = ["./ajax.html", "./second.html", "./third.html", "./fourth.html", "./fifth.html"]
let counter = 0;
button.addEventListener('click', async function(){
    const response = await fetch(array[counter]);
    const text = await response.text();
    div.innerHTML = text;
    counter++;
    if (counter === array.length){
        counter = 0;
    }
});