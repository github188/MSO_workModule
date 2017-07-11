function scrollScreen() {

	$("span.next-page").click(function(){
		$("body,html").stop(false,true).animate({"scrollTop":"900px"});
	});
}
scrollScreen();