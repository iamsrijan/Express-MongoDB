

function del(item) {
	var data = {
		'_id': $(item).attr("data")
	};

	$.ajax({
		type: 'POST',
		data: data,
		url: '/users/delete',
		datatype: 'JSON',
	}).done(function(res){
		if (res.msg==''){
			alert("entry deleted");
			location.reload();
		}
		else
			alert("error deleting");
	});
	}


function EDIT(item){
	var data = {'_id':$(item).attr("data") };
	$(".add").val("Edit");
	console.log(data);

	$.ajax({
		type: 'POST',
		data: data,
		url: '/users/edit',
		datatype: 'JSON',
	}).done(function(res){
		$('#name').val(res[0].name);
		$('#age').val(res[0].age);
		$('#id').val(res[0]._id);
		$('.form').attr('action', '/users/edit1')
		var data1=[{'name':res[0].name}, {'age':res[0].age}];
		
		});
}