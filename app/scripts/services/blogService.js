function change(){
	this.test = function (input) {
		return window.encodeURI(input)+" with encode";
	}
}