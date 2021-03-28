/*검색버튼 클릭시 x전환 스크립트*/
$('header>img').click(function(){
	$(this).hide();
	$('.x').show();
});
$('.x').click(function(){
	$(this).hide();
	$('header>img').show();
	$('header form').slideUp();
	$('.mob_ham_btn').show();
});

/*검색버튼 클릭시 아래폼 스크립트*/
$('header>img').click(function(){
	$('header form').slideDown();
	$('.mob_ham_btn').hide();
});

$('.mob_ham_btn').click(function(){
	$('.mob_ham_btn').children('span').eq(0).toggleClass('top')
});
$('.mob_ham_btn').click(function(){
	$('.mob_ham_btn').children('span').eq(1).toggleClass('middle')
});
$('.mob_ham_btn').click(function(){
	$('.mob_ham_btn').children('span').eq(2).toggleClass('bottom')
});

$('.slider').bxSlider({
	auto: true,
	controls: true,
	autoHover: true,
});