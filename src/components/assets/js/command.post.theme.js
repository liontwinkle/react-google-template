$(function(){
	// Apply theme at page loading
	var hasMode = Cookies.get('df-mode');
    if(hasMode) {
		$('head').append('<link id="dfMode" rel="stylesheet" href="assets/css/skin.'+hasMode+'.css">')
		$('body').addClass('dark-mode');
		$('.btn-dark-mode').addClass('active');
		$('.btn-white').addClass('btn-dark').removeClass('btn-white');
		$('.btn-dark-mode').attr('data-title', 'classic');
		$('.btn-dark-mode').attr('title', 'Switch to classic mode');
    } else {
		$('body').removeClass('dark-mode');
		$('.btn-dark-mode').removeClass('active');
		$('.btn-dark').addClass('btn-white').removeClass('btn-dark');
		$('.btn-dark-mode').attr('data-title', 'dark');
		$('.btn-dark-mode').attr('title', 'Switch to dark mode');
    }
	
	// Switch mode button is clicked
	$('body').on('click', '.btn-dark-mode', function(e){
      e.preventDefault();
      var mode = $(this).attr('data-title');

      if(mode === 'dark') {
		$('head').append('<link id="dfMode" rel="stylesheet" href="assets/css/skin.'+mode+'.css">');
		$('body').addClass('dark-mode');
		$(this).addClass('active');
        $('.btn-white').addClass('btn-dark').removeClass('btn-white');
		$(this).attr('data-title', 'classic');
		$(this).attr('data-original-title', 'Switch to classic mode');
		Cookies.set('df-mode', mode);
      } else {
		$('#dfMode').remove();
		$('body').removeClass('dark-mode');
		$(this).removeClass('active');
        $('.btn-dark').addClass('btn-white').removeClass('btn-dark');
		$(this).attr('data-title', 'dark');
		$(this).attr('data-original-title', 'Switch to dark mode');
        Cookies.remove('df-mode');
      }
    })
});