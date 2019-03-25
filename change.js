if (document.getElementsByClassName("user-select-contain")[2]) {
	document.getElementsByClassName("user-select-contain")[2].innerHTML = "git add .";
	document.getElementsByClassName("user-select-contain")[0].parentElement.removeChild(document.getElementsByClassName("user-select-contain")[0]);
}