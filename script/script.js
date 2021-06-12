$('.namebox').click(function(){
	$(this).fadeOut();
})

$('.titlebox').click(function(){
	$(this).fadeOut();
})

$('.statementbox').click(function(){
	$(this).slideUp(3000);
})





$('.preface').click(function(){
	$(this).slideUp(1000);
})

$('.receipt').draggable();
$('.candle').draggable();
$('.candle2').draggable();
$('.candle3').draggable();
$('.popup').draggable();

setTimeout(function(){
	$('.popup').show();
},40000);


setTimeout(function(){
	$('.smoke').fadeOut();
	$('.smoke2').fadeOut();
	$('.smoke3').fadeOut();
},30000)

$('.iphone').click(function(){
	alert('확인할 수 없습니다.');
});






