console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();

	alert('You have successfully submitted the form!');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);


document.querySelector('img').addEventListener('mouseover', giveCompliment);

function giveCompliment (event) {
	alert(`On a scale of 1 to 10, you're an 11!`)
}
