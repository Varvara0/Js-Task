let button = document.querySelector('input');

button.addEventListener('click', func);
function func(event) {
	if (event.ctrlKey) {
		button.value = '1';
	}
	if (event.altKey) {
		button.value = '2';;
	}
	if (event.shiftKey) {
		button.value = '3';;
	}
}