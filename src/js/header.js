var $NavList = $('.nav .nav-list')
$NavList.click(function () {
	$(this).addClass('active').siblings('.nav-list').removeClass('active')
})
