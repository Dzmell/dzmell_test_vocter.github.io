$(document).ready(function(){
	
		$(".rightPlans ul:first-child li:nth-child(4)").css({"background-color":"#eb5346" , "color": "#ffffff"});
		$(".planLi").prepend('<img class="blue" src="img/red.png">');
		$(".partialLi").prepend('<img class="blue" src="img/red.png">');
		
		
		var str = { 'минимальный' : 2000, 'стандарт' : 3000, 'стандарт+' : 4000, 'стандарт++' : 5000, 'стандарт+++' : 6000, 'целиком' : 7000};
		var mzd = { 'минимальный' : 3000, 'стандарт' : 4000, 'стандарт+' : 5000, 'стандарт++' : 6000, 'стандарт+++' : 7000, 'целиком' : 8000};
		var mrs = { 'минимальный' : 4000, 'стандарт' : 5000, 'стандарт+' : 6000, 'стандарт++' : 7000, 'стандарт+++' : 8000, 'целиком' : 9000};
			var auto = [ 'str', 'mzd', 'mrs'];
			var model = [ str, mzd, mrs];
			var rub = ' руб.';
		
		
			var folder = "img/";
	
		$(".carClass").click(function(){
		
			var car = $(this).attr("id");
			//console.log(car);
			$(".arrow img").css({"display":"none"});
			$("#"+car+" .arrow img").css({"display":"block"});
			
			var def = "/стандарт++.jpg";
			$("#mainPic").removeAttr("src").attr("src",folder+car+def);
			$(".planLi").css({"background-color":"#ffffff" , "color": "black"});
			$(".rightPlans ul:first-child li:nth-child(4)").css({"background-color":"#eb5346" , "color": "#ffffff"});
			
						
				for(i=0;i<auto.length; i++){
					if(auto[i]==car){
						var n = i;
						var modelPlan = model[n];
					}
				}
				$("#cost").html(modelPlan['стандарт++']+rub);
		});
		
		$(".planLi").mouseenter(function(){
			$(".planLi").css({"background-color":"#ffffff" , "color": "black"});
			$(this).css({"background-color":"#eb5346" , "color": "#ffffff"});
			var plan = $(this).html().slice(36).toLowerCase();
			
			var plansrc = $("#mainPic").attr("src").slice(0,8)+plan+$("#mainPic").attr("src").slice(-4);
			
			$("#mainPic").removeAttr("src").attr("src",plansrc);
									
				for(i=0;i<auto.length; i++){
					if(auto[i]==$("#mainPic").attr("src").slice(4,7)){
						
						$("#cost").html(model[i][plan]+rub);
					}
				}
		});
		
		$(".partialLi").mouseenter(function(){
			//$(".partialLi").css({"background-color":"#ffffff" , "color": "black"});
			//$(this).css({"background-color":"#eb5346" , "color": "#ffffff"});
			var plan = $(this).html().slice(36).toLowerCase();
			
			var plansrc = $("#mainPic").attr("src").slice(0,8)+plan+$("#mainPic").attr("src").slice(-4);
			
			$("#mainPic").removeAttr("src").attr("src",plansrc);
		});
		
		$(".rightPlans ul:first-child li:last-child").mouseenter(function(){
			var s = $("#mainPic").attr("src").slice(4,7);
			$("#mainPic").removeAttr("src").attr("src","img/"+s+"/чистый.jpg");
			$("#cost").html(0);
		});
		
		$(".rightPlans ul:first-child li:last-child").click(function(){
			$(".parts ul").fadeOut();//{"display":"none"});
			
			$(".partialLi").toggle('display');
			$(".partialLi").click(function(){
				
				$(".parts ul").fadeIn().css({"display":"flex"});
				});
		});
		
		$(".parts ul li").click(function(){
			
			var str = { 'fenders' : 200, 'fog_lights' : 300, 'front_bumper' : 400, 'handle' : 600, 'hood' : 1000, 'lights' : 400, 'mirror' : 300, 'rear_bumper' : 800, 'thresholds' : 350};
			var mzd = { 'fenders' : 300, 'fog_lights' : 400, 'front_bumper' : 500, 'handle' : 700, 'hood' : 1100, 'lights' : 500, 'mirror' : 400, 'rear_bumper' : 900, 'thresholds' : 450};
			var mrs = { 'fenders' : 400, 'fog_lights' : 500, 'front_bumper' : 600, 'handle' : 800, 'hood' : 1200, 'lights' : 600, 'mirror' : 500, 'rear_bumper' : 1000, 'thresholds' :550};
			var mdl = [ str, mzd, mrs];
			var s = $("#mainPic").attr("src").slice(4,7);
			
			var z = this;
			var x = $(z).html();
			
			var V = parseInt($("#cost").html());
			
			var src = $(x).attr("src").slice(12, -4);
			
			for(i=0;i<auto.length; i++){
				if(auto[i]==s){
					
					var v =mdl[i][src];
					var Vv = +V+v;
					$("#cost").html(Vv+rub);
				}
			}
			
		});
	
		

	
});