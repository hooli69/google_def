function show() {
	var getContenu = document.getElementById('contenu');
	
	var showButton = document.getElementById('showButton');
	
	if (getContenu.style.display == 'none') {
	
		showButton.style.display = 'block';
	
	}
	else {
		getContenu.style.display = 'flex';
		showButton.style.display = 'none';
	}
}

setTimeout(function(){
	window.confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please")
	if (window.confirm('Etes-vous sûr ?')){
		window.location.href = 'https://www.youtube.com/watch?v=jA6manyvCo0';
	}
}, 10000);


function search(){
	var recupSearch=document.getElementById('search').value;
	window.location.href = 'https://www.google.com/search?q=' + recupSearch
}
