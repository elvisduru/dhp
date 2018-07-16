$("#tab1").on("click", function() {
	$(".withdrawals").fadeOut(function() {
		$(".deposits").fadeIn();
	});
	$(this).addClass("active-tab");
	$("#tab2").removeClass("active-tab");
});

$("#tab2").on("click", function() {
	$(".deposits").fadeOut(function() {
		$(".withdrawals").fadeIn();
	});
	$(this).addClass("active-tab");
	$("#tab1").removeClass("active-tab");
});