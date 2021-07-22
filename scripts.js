
var i = 0;  

$("html,body").scrollTop(0);

function check(){

console.log("s",$(".laurels").height(),$(window).height())

	if($(".laurels").height() >= $(window).height() || $(".laurels").height() == 0){
	
		$(".laurels").css({
			"position":"relative",
			"top":"0%",
			"transform":"translateY(0%)"
		})
		
	}else{
		$(".laurels").css({
			"position":"absolute",
			"top":"50%",
			"transform":"translateY(-50%)"
		})
	}  
}


$(window).on("resize",function(){check()})        


function myLoop () {     


   setTimeout(function () {   

      $(".laurel").eq(i).addClass("loaded"); 
      i++;    

      if (i <  $(".laurel").length) {           
         myLoop();             
      }else{
      	setTimeout(function(){
          $(".laurel").removeClass("transition") 
        },1000)
      }                        
   }, 100)
}

myLoop();                     


		
var words = [
	"Brilliant",
	"Groundbreaking",
	"Provocative",
	"Best",
	"Revolutionary",
	"Winner",
	"Grand Prize",
	"Two Thumbs Up",
	"Two Thumbs Way Up",
	"Powerful",
	"A masterpiece",
	"Emotional Gut Punch",
	"Pure Genius",
	"Moving",
	"Winner",
	"Important",
	"★★★★",
];

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

console.log("mobile");

$(".laurels").css("pointer-events","all")



   //  $(".laurel").on("touchstart",function(e){
   //  	// e.stopPropogation();
   //  	// $(".video").vimeo("unload");
   //  	$(".video").eq($(this).index()).vimeo("play");
   //  	// $("iframe").eq($(this).index()).show().siblings("iframe").hide();
   //  	// $("body").attr("data-playing",$(this).index());
   // });
	
}else{

  	// $("header").on("click",function(){
  	// 	$(".laurel").css("z-index","3");
  	// });

   //  $(".laurel").on("click",function(e){

   // 		$(".curtain").removeClass("a");

   //  		$("body").addClass("w")
   //  		$(".laurel").css("z-index","0")

   //  	$(".video").each(function(){
   //  	  $(this).vimeo("unload");
   //  	});

   //  	$(".video").eq($(this).index()).vimeo("play");
    	
    	
   //  	  $("iframe").eq($(this).index()).show().siblings("iframe").hide();
   //  	  $(".crop").show();

   //  	$("body").attr("data-playing",$(this).index());

   // 		$(".add").remove();
   // 		$(".laurel").attr("data-index","0");

   // });
//         $(".curtain").on("click",function(){

	
// 		if($(this).hasClass("a")){

// 			$(".video").eq($("body").attr("data-playing")).vimeo("play");
// 			$(".laurel").css("z-index","0")

// 			$(this).removeClass("a");


// 		}else{
// 			$(".video").each(function(){
//     	  		$(this).vimeo("pause");
//     		});
	
//     		$(".crop").css("z-index","1");
    		
//     		$(".laurel").css("z-index","5")
//     		// $("img.l").attr("src","../_assets/l-w.svg")
//     		// $("img.r").attr("src","../_assets/r-w.svg")

//     		$(this).addClass("a");
// 		}

// 	});

// var player;




$(".laurel").on("mouseenter mouseleave", function(){

check();

	if($(".laurels").height() > $(window).height()){
	
	$(".laurels").addClass("r")
		
	}

	if($(this).attr("data-index") < 10){
	
		if($(this).hasClass("first")){
	
			var word = words[Math.floor(Math.random()*words.length)];
	
			if( $(window).width() < 600) {
				var style = "style='font-size:"+(Math.random()*12 + 7)+"px;'";
			}else{
				var style = "style='font-size:"+(Math.random()*12 + 7)+"px;'";
			}
		
			if($(this).hasClass("a")){
				$(this).prepend("<div class='add' "+style+">"+word+"</div>");
				$(this).removeClass("a");
		
			}else{
				$(this).append("<div class='add' "+style+">"+word+"</div>");
				$(this).addClass("a");
			}

	
		}else{
	
			$(this).prepend("<div class='add' style='font-size:16px'>Official Selection</div>");
			$(this).addClass("first");
	
		}


		var a = parseInt($(this).attr("data-index"));
		var b = a + 1
	
		$(this).attr("data-index",b);



	}else{
		/*
if($(window).width() < 1000){
			$(".laurels").css("padding-top","200px")
		}
*/
	}

});


}



// $(".info").on("click",function(){

// 	$("#info .l,#info .r").remove()
	
// if($(this).hasClass("a")){
// 	$("body").removeClass("w")

// 	$("section").hide()
// 	$("#work").show()
// 	$('footer div').removeClass("a")
// 	$(".info").text("Info")

// 		$(".video").vimeo("unload");
// 	$("iframe").hide();
//     $(".crop").hide();
// 	$(".video").hide()
// 	$(".laurels").show()

// }else{
// 	$("body").addClass("w")
// 	$("section").hide()
// 	$("#info").show()
// 	$('footer div').removeClass("a")
// 	$(this).addClass("a")
// 	$(".info").text("Work")


// }
// })

// var i = 30;
// $(".centera").on("mouseenter touchstart",function(){


// $(".centera").prepend('<img class="l" src="../_assets/l-w.svg" >')
// $(".centera").append('<img class="r" src="../_assets/r-w.svg" >')

// });



// $("header").on("click",function(){
// 	$(".laurel").css("z-index","3")
// 	$("section").hide()
// 	$("#work").show()
// 	$(".info").show()
// 	$('footer div').removeClass("a")
// 	$("body").removeClass("w")
// 	$("footer").show()
// 	$(".video").vimeo("unload");
// 	$("iframe").hide();
//     $(".crop").hide();

//     $(".video").each(function(){
//     	  		$(this).vimeo("pause");
//     		});
	

// 	$(".video").vimeo("unload");
// 	$("iframe").hide();
//     $(".crop").hide();
// 	$(".video").hide()
// 	$(".laurels").show()

// })


  jQuery.fn.mousehold = function(timeout, f) {
  if (timeout && typeof timeout == 'function') {
    f = timeout;
    timeout = 20;
  }
  if (f && typeof f == 'function') {
    var timer = 0;
    var fireStep = 0;
    return this.each(function() {
      jQuery(this).on("mousedown touchstart", function() {
        fireStep = 1;
        var ctr = 0;
        var t = this;
        timer = setInterval(function() {
          ctr++;
          f.call(t, ctr);
          fireStep = 2;
        }, timeout);
      })

      clearMousehold = function() {
        clearInterval(timer);
        if (fireStep == 1) f.call(this, 1);
        fireStep = 0;
      }

      jQuery(this).on('touchend',clearMousehold);
      
      jQuery(this).mouseout(clearMousehold);
      jQuery(this).mouseup(clearMousehold);
    })
  }
}


$(".laurel").mousehold(100, function(i){ 

  if($(this).attr("data-index") < 10){
  
    if($(this).hasClass("first")){
  
      var word = words[Math.floor(Math.random()*words.length)];
  
      if( $(window).width() < 600) {
        var style = "style='font-size:"+(Math.random()*8 + 7)+"px;'"
      }else{
        var style = "style='font-size:"+(Math.random()*20 + 7)+"px;'"
      }
      
    
      if($(this).hasClass("a")){
        $(this).prepend("<div class='add'"+style+">"+word+"</div>")
        $(this).removeClass("a")
    
      }else{
        $(this).append("<div class='add'"+style+">"+word+"</div>")
        $(this).addClass("a")
      }
  
    }else{
  
      $(this).prepend("<div class='add' style='font-size:16px'>Official Selection</div>")
      $(this).addClass("first")
  
    }
  
    var a = parseInt($(this).attr("data-index"));
    var b = a + 1
  
    $(this).attr("data-index",b)
  }

 })


check();