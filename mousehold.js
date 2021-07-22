

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