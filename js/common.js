$(function (){
	var collection = $('#collection');
	$.ajax({
		type:'GET',
		url:'data/collection.json',
		contentType:'application/json',
		dataType:'json',
		success: function (response){
			$.each(response, function(i){
				collection.append('<li><img src=' + response[i].img_src + '></li>')
			});
			
		}
	});
});