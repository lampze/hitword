function mouse() {
	$('.hit')[0].focus();
	$('input').keyup(function (event) {
		var thisNum = $('.hit').index(this);
		if ($(this).val().length >= 1 && thisNum != 197) {
			if (((event.keyCode < 65) || (event.keyCode > 90)) && event.keyCode != 189 && event.keyCode != 187 && event.keyCode != 16) {
				$('.hit')[thisNum + 1].focus();
			}
		}
	});
	$('input').keydown(function (event) {
		var thisNum = $('.hit').index(this);
		if (event.keyCode == 8 && thisNum != 0 && $(this).val().length == 0) {
			$('.hit')[thisNum - 1].focus();
		}
	});
}
