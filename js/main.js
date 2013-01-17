$(function() {
	if ("ontouchstart" in document.documentElement) { 
	    $(".hint").html("<p>Tap on the left or right to navigate</p>");
	}

	$(".runnable").each(function() {
		var code = $(this).find("code").text();
		$(this).parent().find("a").on("click", function() {
			eval(code);
		});
	});

	hljs.tabReplace = '    '; // 4 spaces
	hljs.initHighlighting();
	impress().init();
});