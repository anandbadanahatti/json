$(function (){
	var collection = $('#menu');
	$.ajax({
		type:'GET',
		url:'data/menu.json',
		contentType:'application/json',
		dataType:'json',
		success: function (response){
			var createMenu = function(jsonDatas){alert(171564);
				$.each(response, function(i){
					collection.append('<li>' + response[i].name + '</li>')
					if(response[i].sub.length > 0){
						var subList = $("<ul>");
						$.each(response[i].sub, function(j){
							subList.append((response[j].sub));
						});
						collection.append(subList);
						alert(collection);
					}
				});
			createMenu();
			}
		}
	});
});