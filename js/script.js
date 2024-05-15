document.getElementById('next').onclick = function function_name() {
	let lists = document.querySelectorAll('.item');
	document.getElementById('slide').appendChild(lists[0]);
	// body...
}

document.getElementById('prev').onclick = function function_name() {
	let lists = document.querySelectorAll('.item');
	document.getElementById('slide').prepend(lists[lists.length - 1]);
	// body...
}