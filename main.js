
        
    var grayPoints = 0.8;
    var redPoints = 1;

		$(function(){
            var start = null;

            var initialTop  = 300;
            function step(timestamp) {
              var progress;
              if (start === null) start = timestamp;
              progress = timestamp - start;

             var cssRule = "rect({top}px,3000px,30000px,0px)".replace("{top}", initialTop * redPoints)
              $(".redbar").css("clip", cssRule);
              //console.log(cssRule);



             if (initialTop >  grayPoints * 200){
                console.log("wtf");
               var cssRule = "rect({top}px,3000px,30000px,0px)".replace("{top}", initialTop );
                $(".graybar").css("clip", cssRule);
              }
              //console.log(cssRule);
              initialTop-=2;




              if (progress < 5000) {
                requestAnimationFrame(step);
                }
            }

            setTimeout(function(){
                requestAnimationFrame(step);
            }, 3200);
          

			 var video = document.getElementsByTagName('video')[0];

			    video.onended = function(e) {
                 console.log("ended");
			    };

                var pauseVid = true;
                video.addEventListener("timeupdate", function(){
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