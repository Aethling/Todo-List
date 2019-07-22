var data  = {
	todo: [],
	completed: []
}
$(document).ready(function(){
	$("button#addActivity").on("click", function(){
		var value = $("#headerInput").val();
		if (value) addItemList(value);
			$("#headerInput").val('');
			data.todo.push(value);
	});
	var input = document.getElementById("topButton");
	input.addEventListener("keyup", function(event) {
  	if (event.keyCode === 13) {
		document.getElementById("input#input").click();
  	}
	});
	}); 
	function addItemList(text) {
		var removeSVG = $('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="fill" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="fill" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="fill" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="fill" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>');
		var doneSVG = $('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><rect y="0" class="nofill" width="22" height="22"/><g><path class="fill" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>');
		var $button1 = $("<button class='remove'></button>").append(removeSVG);
		$($button1).on("click", function() {
			removeItem($button1);
		});
		var $button2 = $("<button class='done'></button>").append(doneSVG);

		$($button2).on("click", function() {
			completeItem($button2);
		});
		$($button2).keypress(function(e){
			if (e.which === 13){
				completeItem($button2);
			}
		});
		var $buttonDiv = $("<div class='buttons'></buttons>").append($button1, $button2);
		
		var $item = $("<li class='item'></li>").text(text).append($buttonDiv);
		$("ul.list").prepend($item);
		AddtoDataObject()
		};
		

	function AddtoDataObject(){
	}
		
	function removeItem($button1) {
		$($button1).parent().parent().remove();
		var theLI = $($button1).parent().parent();
		var value = $(theLI).text();

		var boolean = $(theLI).hasClass("list");
		if (boolean) {
			data.todo.splice(data.todo.indexOf(value), 1); 
		 } else {
	 		data.completed.splice(data.completed.indexOf(value), 1);
		 }
		 AddtoDataObject()
		};
	function completeItem($button2) {
		var theLI = $($button2).parent().parent();
		var theUL = $(theLI).parent();
		var value = $(theLI).text();

		$(theLI).toggleClass("list");
		var boolean = $(theLI).hasClass("list");
		if (boolean) {
			var detached1 = $(theLI).detach();
			$("ul.completed").prepend(detached1);
			data.todo.splice(data.todo.indexOf(value), 1); 
			data.completed.push(value);  //adds value to todo array if not completed
		 } else {
		 	var detached = $(theLI).detach()
		 	$("ul.list").prepend(detached);
		 		data.completed.splice(data.completed.indexOf(value), 1);
			data.todo.push(value); //add value to completed array if completed
		 }
		 AddtoDataObject()
		 console.log(data);
	} 
		
		