$(document).ready(function() {
		 
		
		  
		 setTimeout("gogo()",1000);
		 fly();
		 levease();
		 redbone();
		 
	   $('.biglogo,.cover,.slogan').hide();
  	   $('.biglogo').fadeIn(2000);
	   $('.cover').delay(1000).fadeIn(3000);
	   $('.slogan').delay(2000).fadeIn(4000);


//----------彈出面板------------//		

        $('.display_panel').hide();
		 
		$('.x_btn').click(function (){
		 
		  $('.display_panel').fadeOut(500);
		 
	 	})	 
		
		
		 $('#s1_point1').click(function (){
		  
		 	 $('#s1panel_1').fadeIn(500);
		 })	 
		 
		  $('#s1_point2').click(function (){
		  
		 	  $('#s1panel_2').fadeIn(500);
		 })	
		 
		  $('#s1_point3').click(function (){
		  
		 	  $('#s1panel_3').fadeIn(500);
		 })	 
		
		 $('#s1_point4').click(function (){
		  
		 	  $('#s1panel_4').fadeIn(500);
		 })	 
		 
		 
		 
		 $('#s1_point5').click(function (){
		  
		 	 $('#s1panel_5').fadeIn(500);
		 })	 
		 
		
		 
		 $('#s2_point1').click(function (){
		  
		 	 $('#s2panel_1').fadeIn(500);
		 })	 
		 
		  $('#s2_point2').click(function (){
		  
		 	  $('#s2panel_2').fadeIn(500);
		 })	
		 
		  $('#s2_point3').click(function (){
		  
		 	  $('#s2panel_3').fadeIn(500);
		 })	 
		
		$('#s2_point4').click(function (){
		  
		 	  $('#s2panel_4').fadeIn(500);
		 })	 
		
		
		
		
		 
		 
		 $('#s5_point1').click(function (){
		  
		 	 $('#s5panel_1').fadeIn(500);
		 })	 
		 
		  $('#s5_point2').click(function (){
		  
		 	  $('#s5panel_2').fadeIn(500);
		 })	
		 
		  $('#s5_point3').click(function (){
		  
		 	  $('#s5panel_3').fadeIn(500);
		 })	 
		
		 $('#s5_point4').click(function (){
		  
		 	  $('#s5panel_4').fadeIn(500);
		 })	 
		 
		
		 $('#s6_point1').click(function (){
		  
		 	 $('#s6panel_1').fadeIn(500);
		 })	 
		 
		  $('#s6_point2').click(function (){
		  
		 	  $('#s6panel_2').fadeIn(500);
		 })	
		 
		  $('#s6_point3').click(function (){
		  
		 	  $('#s6panel_3').fadeIn(500);
		 })	 
		 
		 
		 $('#s7_point1').click(function (){
		  
		 	 $('#s7panel_1').fadeIn(500);
		 })	 
		 
		  $('#s7_point2').click(function (){
		  
		 	  $('#s7panel_2').fadeIn(500);
		 })	
		 
		  $('#s7_point3').click(function (){
		  
		 	  $('#s7panel_3').fadeIn(500);
		 })	 
		 
		  $('#s7_point4').click(function (){
		  
		 	  $('#s7panel_4').fadeIn(500);
		 })	 
		
		
		

	 
		
		 
		 
	



	 
	
          
	
		
		
//----------每個section 的動畫------------//	
		
		
				
	          
			
            
		
		
		//$("#menu li:nth-child(5)").click(function(){

 			
			
			//$(".point").stop(true,false).animate({top:"-=15px"},1000).animate({top:"+=15px"}, 1000).animate({top:"-=15px"},1000).animate({top:"+=15px"}, 1000).animate({top:"-=15px"},1000).animate({top:"+=15px"}, 1000).animate({top:"-=15px"},1000).animate({top:"+=15px"}, 1000);
			//})
		
		
		
					
		
//----------背景的動畫------------//	
		
		
	$('#menu a').click(function () {  
			$('#wrapper').scrollTo($(this).attr('href'), 1000);	
			setPosition($(this).attr('href'), '#cloud1', '0px', '400px', '800px', '1200px', '1600px', '2000px', '2400px')
			setPosition($(this).attr('href'), '#cloud2', '0px', '800px', '1600px', '2400px','3200px','4000px','4800px')
			
			return false; 	
		
	});  
		
	
	function setPosition(check, div, p1, p2, p3, p4, p5, p6 ,p7) {
	if(check=== '#section1')
		{
			$(div).scrollTo(p1, 1000);
			
			 $('.display_panel').hide();
			 
			 	 
		 
		}
	else if(check==='#section2')
		{
			$('.s2_pic1,.s2_pic2,.s2_pic3').hide();
			
			$(div).scrollTo(p2, 1000);
			$('.display_panel').hide();
			$('.s2_intrdouction').delay(4000).css({top:"240",opacity:"0"}).animate({top:"210",opacity:"1"},3000);
			$('.light').animate({opacity:"0"},3000).animate({opacity:"1"},3000).animate({opacity:"0"},3000).animate({opacity:"1"},3000).animate({opacity:"0"},3000).animate({opacity:"1"},3000).animate({opacity:"0"},3000).animate({opacity:"1"},3000);
			
			$('.s2_pic1').fadeIn(1000);
			$('.s2_pic2').fadeIn(2000);
			$('.s2_pic3').fadeIn(3000);
			
			
			
			
	
			
   
			
			
			
			 
		}
	else if(check==='#section3')
		{
			$(div).scrollTo(p3, 1000);
			 $('.display_panel').hide();
			$("#section3 .infors").css({top:"150",opacity:"0"}).animate({top:"130",opacity:"1"},2000);
		     
		}	
		
	else if(check==='#section4')
		{
			$(div).scrollTo(p4, 1000);
			 $('.display_panel').hide();
			  $("#section4 .infors").css({top:"160",opacity:"0"}).animate({top:"140",opacity:"1"},2000);
		      $("#section4 .iani_3")
			
		}	
		
	else if(check==='#section5')
		{
			$(div).scrollTo(p5, 1000);
			$('.display_panel').hide();
			$(".ani_1").css({right:"300", bottom:"280"}).stop(true,false).animate({right:"0",bottom:"760"},8000);
			$("#clouda1").animate({left:"-=500px",opacity:"0"},8000).animate({left:"+=500px",opacity:"1"},8000);
			$("#clouda2").animate({left:"+=300px",opacity:"0"},8000).animate({left:"-=300px",opacity:"1"},8000);
			$("#section5 .infors").css({left:"50", bottom:"40",opacity:"0"}).animate({left:"50",bottom:"80",opacity:"1"},3000);
		 
		
		}
		
	else if(check==='#section6')
		{
			$(div).scrollTo(p6, 1000);
			$('.display_panel').hide();
			$("#section6 .infors").css({top:"180",opacity:"0"}).animate({top:"160",opacity:"1"},3000);
			
		}
				
	else
		{
			$(div).scrollTo(p7, 1000);
			$("#section7 .infors").css({top:"185", left:"300",opacity:"0"}).animate({top:"155", left:"300",opacity:"1"},3000);
			$("#s7_ani_1").css({left:844,top:300,opacity:"1"}).stop(true,false).animate({top:"-300",left:"1000",opacity:"0"},13000)
			$("#s7_ani_2").css({left:750,top:330,opacity:"1"}).stop(true,false).animate({top:"-200",left:"950",opacity:"0"},12000)
			$("#s7_ani_3").css({left:600,top:200,opacity:"1"}).stop(true,false).animate({top:"-200",left:"850",opacity:"0"},12000)
			$("#s7_ani_4").css({left:640,top:330,opacity:"1"}).stop(true,false).animate({top:"-200",left:"800",opacity:"0"},12000)
		
		}	
	
	
	
	};
	
	
	
});
	
	
function gogo(){
	
	$(".point").animate({top:"-=15px"},1000).animate({top:"+=15px"}, 1000)
	setTimeout("gogo()",1000);
	}	
	
//飛機飛		
function fly(){
	
	
	 $(".ani_2").css({top:'400',left:'50',opacity:"1"}).stop(true,false).animate({top:'-200',left:'1000',opacity:"0"},9000);
	
	 setTimeout("fly()",9000);
	}



//樹葉掉下來	
function levease(){
	
	$("#s6_ani_1").css({left:1000,top:-200,opacity:"1"}).stop(true,false).animate({left:600,top:500,opacity:"0"},10000);
	$("#s6_ani_2").css({left:1200,top:-400,opacity:"1"}).stop(true,false).animate({left:500,top:600,opacity:"0"},16000);
	$("#s6_ani_3").css({left:1300,top:-600,opacity:"1"}).stop(true,false).animate({left:400,top:700,opacity:"0"},15000);
	
	setTimeout("levease()",10000);
	
	}
	
function redbone(){
	
	
	$(".redbone").css({top:"350",left:"260",opacity:"0"}).stop(true,false).animate({opacity:"1"},3000).animate({opacity:"0"},3000)
	
	setTimeout("redbone()",10000);
	
	}

	