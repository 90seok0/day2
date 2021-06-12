

$('.popClose').click(function(){
	$('.pop3').hide().delay(5000).fadeIn();
	$('.pop4').show();
});

$('.pop1').draggable();
$('.pop2').draggable();
$('.pop5').draggable();
$('.pop51').draggable();

$('.close').click(function(){
	$('.pop4').hide();
})

$('.pop5').click(function(){
	$(this).hide();
})

setTimeout(function(){
	$('.pop5').show();
},7000);


$('.pop5').click(function(){
	$('.pop51').show();
});

$('.pop51').draggable();

$('.pop51').click(function(){
	$(this).hide();
	$('.pop5').show();
})