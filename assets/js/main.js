$("#tab1").on("click", function() {
	$(".withdrawals").hide();
	$(".deposits").show();
	$(this).addClass("active-tab");
	$("#tab2").removeClass("active-tab");
});

$("#tab2").on("click", function() {
	$(".deposits").hide();
	$(".withdrawals").show();
	$(this).addClass("active-tab");
	$("#tab1").removeClass("active-tab");
});