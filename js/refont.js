function refont(str) {
	for(var i = 0; i < 6; i++) {
		for(var t = 0; t < 33; t++) {
			if (str.length == 0) {
				return str;
			} else if (str[0] == "\n"){
				t = 33;
				str = str.substr(1);
			} else {
				document.getElementById("line"+(i+1)).getElementsByClassName("read")[t].innerHTML = str[0];
				str = str.substr(1);
			}
		}
	}
	return str;
}
