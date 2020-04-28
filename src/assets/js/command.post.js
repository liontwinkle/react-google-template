$(function(){
	// Turn the preloader off
	$('.preloader').fadeOut('slow');
	//$('.preloader').delay("3000").fadeOut('slow');
	
	//Force SignIn Dialog if Session has problems
	function forceSignInDialog () {
		clearInterval(refreshIntervalId);
		$('#sessionTimeoutModal').modal('show');
		$('#sessionTimeoutMessage').html('<div class="alert alert-danger mb-0" id="sessionTimeoutMessage">Your session has been expired. Please <a href="signin.php">Sign In</a>.</div>');
	}
	
	//Session Timeout continious check
	function sessionTimeOutCheck (callback = function() {} ) {
		$.ajax({
			url: 'common.php',
			type: 'POST',
			data: {
				pref: 'check-session-timeout'
			},
			success: function(response){
				if(response !== 'signout') callback();
			}
		});
	}
	
	//Start interval checking
	var refreshIntervalId = setInterval(function(){
		sessionTimeOutCheck ();
	}, 180000);  //180000 means 3 minute
	
	//Listener for 'signout' response after any Ajax event
	$(document).ajaxSuccess(function(event, xhr, settings) {
		if(xhr.responseText == 'signout') {
			forceSignInDialog ();
		}
	});
	
	//Main menu item is clicked
	$(".change-section").click(function() {
		//Get section name from caller's data-attribute
		var sectionName = $(this).attr("data-section-name");
		sessionTimeOutCheck(function() {
			if (sectionName){
				$("#sectionContainer").html('<div class="preloader"></div>');
				$(".main-menu span.nav-link:not('.btn-dark-mode')").removeClass('active');
				$.ajax({
					url: 'sections/'+sectionName+'.php',
					type: 'POST',
					data: {},
					success: function(response){
						$('.main-menu span.nav-link[data-section-name="'+sectionName+'"]').addClass('active');
						$("#sectionContainer").html(response);
						//Relaunch feather icons after Ajax redraw
						feather.replace();
					}
				});
			}
		});
	});
	
	//Dark mode button is clicked
	$(".btn-dark-mode").click(function() {
		console.log('Dark mode button is clicked');
		var sectionName = $(this).attr("data-section-name");
		sessionTimeOutCheck(function() {
			if (sectionName){
				$("#sectionContainer").html('<div class="preloader"></div>');
				$('.main-menu span.nav-link').removeClass('active');
				$.ajax({
					url: 'sections/'+sectionName+'.php',
					type: 'POST',
					data: {},
					success: function(response){
						$('.main-menu span.nav-link[data-section-name="'+sectionName+'"]').addClass('active');
						$("#sectionContainer").html(response);
						//Relaunch feather icons after Ajax redraw
						feather.replace();
					}
				});
			}
		});
	});

  $('[data-toggle="tooltip"]').tooltip();

/*	 // reply form
  var quill = new Quill('#editor-container', {
	modules: {
	  toolbar: '#toolbar-container'
	},
	placeholder: 'Compose an epic...',
	theme: 'snow'
  });

  // compose form
  var quill2 = new Quill('#editor-container2', {
	modules: {
	  toolbar: '#toolbar-container2'
	},
	placeholder: 'Write your message here',
	theme: 'snow'
  }); */

  $('#mailComposeBtn').on('click', function(){
	$('#mailCompose').addClass('show');
  })

  $('#mailComposeClose').on('click', function(e){
	e.preventDefault()

	if($('#mailCompose').hasClass('minimize') || $('#mailCompose').hasClass('shrink')) {
	  $('#mailCompose').addClass('d-none');

	  setTimeout(function(){
		$('#mailCompose').attr('class', 'mail-compose');
	  },500);

	} else {
	  $('#mailCompose').removeClass('show');
	}
  })

  $('#mailComposeShrink').on('click', function(e){
	e.preventDefault()
	$('#mailCompose').toggleClass('shrink')
	$('#mailCompose').removeClass('minimize')
  })

  $('#mailComposeMinimize').on('click', function(e){
	e.preventDefault()
	$('#mailCompose').toggleClass('minimize')
  })


  $('#mailSidebar').on('click touchstart', function(e){
	e.preventDefault()
	
	if(window.matchMedia('(max-width: 767px)').matches) {
		$('.chat-columns').css('width', '');
		$('.chat-columns').css('transform', '');
	}

	if($('body').hasClass('mail-content-show')) {
	  $('body').removeClass('mail-content-show');
	} else {
	  $('body').addClass('mail-sidebar-show');

	  $('#mailSidebar').addClass('d-none');
	  $('#mainMenuOpen').removeClass('d-none');
	}

	if(window.matchMedia('(min-width: 768px)').matches) {
	  $('#mailSidebar').addClass('d-md-none');
	  $('#mainMenuOpen').addClass('d-md-flex');
	}
  })

  $(document).on('click touchstart', function(e){
	e.stopPropagation();

	// closing of sidebar menu when clicking outside of it
	if(!$(e.target).closest('.burger-menu').length) {
	  var sb = $(e.target).closest('.mail-sidebar').length;
	  if(!sb) {
		$('body').removeClass('mail-sidebar-show');

		$('#mailSidebar').removeClass('d-none');
		$('#mainMenuOpen').addClass('d-none');
	  }
	}
  });

  // closing mail content in lg breakpoint only
  $('#mailContentClose').on('click', function(e){
	e.preventDefault()
	$('body').removeClass('mail-content-show');
  })

  // set one mail item as selected in xl breakpoint by default
  // for demo purpose only
  if(window.matchMedia('(min-width: 1200px)').matches) {
	$('.mail-group-body .media:nth-of-type(2)').addClass('selected');

	$('.mail-content-header').removeClass('d-none');
	$('.mail-content-body').removeClass('d-none');
  }

});

//Css animation handler function for 'assets/css/animate.min.css'
function animateCSS(element, animationName, callback) {
	element.addClass('animated', animationName);
	function handleAnimationEnd() {
		element.removeClass('animated', animationName);
		element.off('animationend');
		if (typeof callback === 'function') callback();
	}
	element.on('animationend', handleAnimationEnd);
}