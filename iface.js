git $(document).ready(function() {
	
	// ANCOR LINK SCROLL
	$(window).scroll(function(){

		mf=$(".modelmenu").offset().top-$(window).scrollTop();
		mr=$(".carline").offset().top-$(window).scrollTop();

		
		if(mf<64)
		{
			$(".modelmenu").addClass("set");
			$(".carline").addClass("set");
		}
		if(mr>=64&&mf>=64)
		{
			$(".modelmenu").removeClass("set");
			$(".carline").removeClass("set");
		}
		
	
		if($(this).scrollTop()>100)
		{
			$(".anchormenu").addClass("mini");
			$(".cbackheader").addClass("set");
		}
		else
		{
			$(".anchormenu").removeClass("mini");
			$(".cbackheader").removeClass("set");
		}
	})
	
	// INPUT TYPE TEXT AND TEXTAREA FOCUS WITH PLACEHOLDER
	$("body").on("focus","input[type='text'], textarea", function() {
		if($(this).val().length==0)
		{
			$(this).before("<div class='placeholder'>"+ $(this).attr('placeholder') +"</div>");
			$(this).attr("replaceholder",$(this).attr('placeholder'));
			$(this).attr("placeholder","");
			$(this).prev().fadeIn(300);
		}
	});
	$("body").on("blur","input[type='text'], textarea", function() {
		if($(this).val().length==0)
		{
			$(this).attr("placeholder",$(this).attr('replaceholder'));
			$(".placeholder").fadeOut(300,function(){ $(this).remove(); });
		}
	});
	
	
	
	// FORM SENDING
	$(document).on('submit', 'form', function () {

	if($(this).find("input[type='checkbox']").is(':checked'))
		{
			$(this).find("label").css('color','#000');
			
			
		// Subscribe
		 if($(this).attr('ordertype')=="subscribe")
		 {
			 
			$("input[type='text'].subscribeemail").removeClass("err");
			$(".subscribeemail.err").slideUp(300);
			
			$.post('./sendforms.php', { 
				ordertype: $(this).attr('ordertype'), 
				fio: $("input[type='text'].tdfio").val(),
				phone: $("input[type='text'].tdphone").val(),
			},
			function(data){
				console.log(data)
					if(data==1)
					{
						$(".subscribeemail.err").slideDown(300);
						$("input[type='text'].subscribeemail").addClass("err");
					}
					if(data==0)
					{
						$(".subscribeemail.form").slideUp(300);
						$(".subscribeemail.ok").slideDown(300);
						$(".subscribeemail.err").slideUp(300);
						$("input[type='text'].subscribeemail").removeClass("err");
						$("input[type='text'].subscribeemail").val("");
						yaCounter62647072.reachGoal('OFFER_SEND');
						ga('gtm1.send', 'event', 'OFFER_SEND', 'Send' );
					}
			});
		 }
		 // Call Back
		 if($(this).attr('ordertype')=="callback")
		 {
			 
			$("input[type='text'].callbackphone").removeClass("err");
			$(".callbackerrmsg").slideUp(300);
			
			$.post('./sendforms.php', { 
				ordertype: $(this).attr('ordertype'), 
				name: $("input[type='text'].callbackname").val(),
				phone: $("input[type='text'].callbackphone").val()
			},
			function(data){
				console.log(data)
					if(data==1)
					{
						$(".callbackerrmsg").slideDown(300);
						$("input[type='text'].callbackphone").addClass("err");
					}
					if(data==0)
					{
						$(".cbform").slideUp(300);
						$(".cbformok").slideDown(300);
						yaCounter62647072.reachGoal('CALLBACK_SEND');
						ga('gtm1.send', 'event', 'CALLBACK_SEND', 'Send' );
					}
			});
		 }
		 
		 // Advant
		 if($(this).attr('ordertype')=="advant")
		 {
			 
			$("input[type='text'].advantphone").removeClass("err");
			$(".advantphoneerr").slideUp(300);
			
			$.post('./sendforms.php', { 
				ordertype: $(this).attr('ordertype'), 
				name: $("input[type='text'].advantname").val(),
				phone: $("input[type='text'].advantphone").val(),
				desc: $("textarea.advantdesc").val()
			},
			function(data){
				
					if(data==1)
					{
						$(".advantphoneerr").slideDown(300);
						$("input[type='text'].advantphone").addClass("err");
					}
					if(data==0)
					{
						$(".advantformhide").slideUp(300);
						$(".advantformok").slideDown(300);
						yaCounter62647072.reachGoal('CALLBACK_SEND');
						ga('gtm1.send', 'event', 'CALLBACK_SEND', 'Send' );
						window.dataLayer.push({'event':'formsend'});
					}
			});
		 }
		 
		 
		 // spinoff
		 if($(this).attr('ordertype')=="spinoff")
		 {
			 
			$("input[type='text'].spinoffphone").removeClass("err");
			$(".spinofferrmsg").slideUp(300);
			
			$.post('./sendforms.php', { 
				ordertype: $(this).attr('ordertype'), 
				name: $("input[type='text'].spinoffname").val(),
				phone: $("input[type='text'].spinoffphone").val(),
				model: $(".spunnoffmodelname").val()
			},
			function(data){
				
					if(data==1)
					{
						$(".spinofferrmsg").slideDown(300);
						$("input[type='text'].spinoffphone").addClass("err");
					}
					if(data==0)
					{
						$(".spinoffform").slideUp(300);
						$(".spinoffok").slideDown(300);
						yaCounter62647072.reachGoal('CAR_RESERV_SEND');
						ga('gtm1.send', 'event', 'CAR_RESERV_SEND', 'Send' );
					}
			});
		 }
		 
		 // getleadcar
		 if($(this).attr('ordertype')=="getleadcar")
		 {
			 
			$("input[type='text'].getleadcarphone").removeClass("err");
			$(".getleadcarerrmsg").slideUp(300);
			
			$.post('./sendforms.php', { 
				ordertype: $(this).attr('ordertype'), 
				name: $("input[type='text'].getleadcarname").val(),
				phone: $("input[type='text'].getleadcarphone").val(),
				tsnum: $("input[type='hidden'].getleadcarnum").val()
			},
			function(data){
					console.log(data);
					if(data==1)
					{
						$(".getleadcarerrmsg").slideDown(300);
						$("input[type='text'].getleadcarphone").addClass("err");
					}
					if(data==0)
					{
						console.log('ok');
						$(".getleadcarform").slideUp(300);
						$(".getleadcarok").slideDown(300);
						yaCounter62647072.reachGoal('CAR_RESERV_SEND');
						ga('gtm1.send', 'event', 'CAR_RESERV_SEND', 'Send' );
					}
			});
		 }
		 
		 // bron
		 if($(this).attr('ordertype')=="bron")
		 {
			 
			$("input[type='text'].bronphone").removeClass("err");
			$(".bronerrmsg").slideUp(300);
			
			$.post('./sendforms.php', { 
				ordertype: $(this).attr('ordertype'), 
				phone: $("input[type='text'].bronphone").val(),
				tsnum: $("input[type='hidden'].broncarnum").val()
			},
			function(data){
					console.log(data);
					if(data==1)
					{
						$(".bronerrmsg").slideDown(300);
						$("input[type='text'].bronphone").addClass("err");
					}
					if(data==0)
					{
						console.log('ok');
						$(".bronform").slideUp(300);
						$(".bronok").slideDown(300);
						yaCounter62647072.reachGoal('CAR_RESERV_SEND');
						ga('gtm1.send', 'event', 'CAR_RESERV_SEND', 'Send' );
					}
			});
		 }
		 }
		else
		{
			$(this).find("label").fadeOut(300).css('color','#a70d19').fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300).fadeOut(300).fadeIn(300);
		}
		 return false;
	});
	
	// popup close
	$("body").on("click",'.popup .close div',  function(e){
		$('.popupholder').fadeOut(300).css('display','table');
	});
	$(document).keyup(function(e) {
		if (e.keyCode == 27) 
		{ 
			$('.popupholder').fadeOut(300).css('display','table');
		}
	});
	$(document).mousedown(function (e){
		var div = $(".popup");
		if (!div.is(e.target)&& div.has(e.target).length === 0) 
			 $('.popupholder').fadeOut(300);
	});

	//menu click
	$("body").on("click",'.cmenu',  function(e){
		$('.cmenu').removeClass("set");
		$(this).addClass("set");
	});
	

	
	// Call order popup
	$("body").on("click",'.getleadcallorder',  function(e){
		$(".popup .popupcontent").html("<div class='ac' style='padding:100px 0px'><img src='./img/loader.gif'></div>");
		$('.popupholder').fadeIn(300).css('display','table');
		$(".popup .popupcontent").load('./popup.php?type=callback',function(){
			
		});
		yaCounter62647072.reachGoal('CALLBACK_CLICK');
		ga('gtm1.send', 'event', 'CALLBACK_CLICK', 'Click' );
		
	
	});
	// Advant order popup
	$("body").on("click",'.getleadmoreadvant',  function(e){
		$(".popup .popupcontent").html("<div class='ac' style='padding:100px 0px'><img src='./img/loader.gif'></div>");
		$('.popupholder').fadeIn(300).css('display','table');
		$(".popup .popupcontent").load('./popup.php?type=advant',function(){
		});
		yaCounter62647072.reachGoal('CALLBACK_CLICK');
		ga('gtm1.send', 'event', 'CALLBACK_CLICK', 'Click' );
	});
	// Spin off order popup
	$("body").on("click",'.getleadspinoff',  function(e){
		$(".popup .popupcontent").html("<div class='ac' style='padding:100px 0px'><img src='./img/loader.gif'></div>");
		$('.popupholder').fadeIn(300).css('display','table');
		$(".popup .popupcontent").load('./popup.php?type=spinoff&ident='+$(this).attr('ident')+'&redprice='+$(this).attr('redprice')+'&price='+$(this).attr('price')+'&pic='+$(this).attr('pic'),function(){
		});	
		yaCounter62647072.reachGoal('CAR_RESERV_CLICK');
		ga('gtm1.send', 'event', 'CAR_RESERV_CLICK', 'Click' );
	});
	
	
	// About car order popup
	$("body").on("click",'.listclick',  function(e){
		console.log($(this).attr('carid'));
		$(".popup .popupcontent").html("<div class='ac' style='padding:100px 0px'><img src='./img/loader.gif'></div>");
		$('.popupholder').fadeIn(300).css('display','table');
		$(".popup .popupcontent").load('./popup.php?type=aboutcar&carid='+$(this).attr('carid'),function(){
		});
		yaCounter62647072.reachGoal('CAR_RESERV_CLICK');
		ga('gtm1.send', 'event', 'CAR_RESERV_CLICK', 'Click' );
	});
	
	
	// Load models in stock
	
	$("body").on("click",'[lpage]',  function(e){
		
		yaCounter62647072.reachGoal('CLICK_STOCK');
		ga('gtm1.send', 'event', 'CLICK_STOCK', 'Click' );
		
		$(".pagecontent").html("<div class='ac' style='padding:100px 0px'><img src='./img/loader.gif'></div>");
		
		$(".dropmenuview").fadeOut(300);
		var fixed_offset = 350;
		$('html,body').stop().animate({ scrollTop: $(".pagecontent").offset().top - fixed_offset }, 1000);
		$(".pagecontent").load('./content.php?type='+$(this).attr('lpage'),function(){
		});
	});
	// Mainpage click
	$("body").on("click",'.mplink',  function(e){
		$(".dropmenuview").fadeOut(300);
		var fixed_offset = 350;
		$('html,body').stop().animate({ scrollTop: $(".pagecontent").offset().top - fixed_offset }, 1000);
		$(".pagecontent").load('./content.php?mainpage=1',function(){
		});
	});
	
	
	// Close drop menu
	$("body").on("click",'.closedropmenu',  function(e){
		$(".dropmenuview").fadeOut(300);
	});
	// Show drop menu
	$("body").on("click",'.dropmenu',  function(e){
		$(".dropmenuview").fadeIn(300);
	});

})
