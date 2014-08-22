
        
    var grayPoints = 0.55;
    var redPoints = 1.0;

		$(function(){
            $(".redbar").mouseover(function(){
              $(".rightCard").show();
            });
             $(".redbar").mouseout(function(){
              $(".rightCard").hide();
            });
            
            

            var start = null;

            var initialTop  = 300;
            function step(timestamp) {
              var progress;
              if (start === null) start = timestamp;
              progress = timestamp - start;


             if (initialTop >=  (1 - redPoints) * 300){
             var cssRule = "rect({top}px,3000px,30000px,0px)".replace("{top}", initialTop  )
              $(".redbar").css("clip", cssRule);
              //console.log(cssRule);
              }



             if (initialTop >  (1 - grayPoints) * 300){
                console.log("wtf");
               var cssRule = "rect({top}px,3000px,30000px,0px)".replace("{top}", initialTop );
                $(".graybar").css("clip", cssRule);
              }
              //console.log(cssRule);
              initialTop-=3;




              if (progress < 5000) {
                requestAnimationFrame(step);
                }
            }

            setTimeout(function(){
                requestAnimationFrame(step);
            }, 3800);
          

			 var video = document.getElementsByTagName('video')[0];

			    video.onended = function(e) {
                 console.log("ended");
			    };

                var pauseVid = true;
                video.addEventListener("timeupdate", function(){


                    if(this.currentTime >= 2.9 && pauseVid) {
                      $(".leftCard").fadeIn(1800);

                    }

                    if(this.currentTime >= 2.9 && pauseVid) {
                      $(".rightCard").fadeIn(1800);

                    }
                    if(this.currentTime >= 3.0 && pauseVid) {
                    this.pause();
                    // $(".overlay").show(); // showing the text
                    
                    setTimeout(function(){
                        
                    // $(".overlay").hide();
                    
                        // pauseVid = false;
                        //video.play();
                        }, 3000);
                    }
                    });

            var lightsOff= true;
            $(".overlay2 .button").click(function(){
                console.log("clicked lights off");
                lightsOff = !lightsOff;
                if(lightsOff ){
                    $("body").css("background", "black");
                } else {
                    
                    $("body").css("background", "white");
                }

            });

		});