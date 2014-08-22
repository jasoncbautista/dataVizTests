
        
		$(function(){
            var start = null;

            var initialTop  = 200;
            function step(timestamp) {
              var progress;
              if (start === null) start = timestamp;
              progress = timestamp - start;
             var cssRule = "rect({top}px,30000px,30000px,0px)".replace("{top}", initialTop)
              $(".redbar").css("clip", cssRule);
              console.log(cssRule);
              initialTop-=3;
              if (progress < 5000) {
                requestAnimationFrame(step);
                }
            }

            setTimeout(function(){
                requestAnimationFrame(step);
            }, 3000);
          

			 var video = document.getElementsByTagName('video')[0];

			    video.onended = function(e) {
                 console.log("ended");
			    };

                var pauseVid = true;
                video.addEventListener("timeupdate", function(){
                    if(this.currentTime >= 3 && pauseVid) {
                    this.pause();
                    $(".overlay").show();
                    
                    setTimeout(function(){
                        
                    $(".overlay").hide();
                    
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