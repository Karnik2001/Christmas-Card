function opencard()
{
	let cover = document.getElementById('cover');
	cover.className = 'open-card';
}

function closecard()
{
	let cover = document.getElementById('cover');
	cover.className = '';
}

var messages = ['Happy Birthday!','You are the best person I have known','I hope you have a great day'];

var i = messages.length;
var s = Math.floor(Math.random() * i);