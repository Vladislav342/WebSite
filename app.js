//increase of the photo on the website
		$(document).ready(function() {
	
		$(".kuku").click(function(){	
	  			var img = $(this);	
				var src = img.attr('src');
		$("body").append("<div class='popup'>"+ 
						 "<div class='popup_bg'></div>"+ 
						 "<img src="+src+" class='popup_img'>"+ 
						 "</div>"); 
		$(".popup").fadeIn(800);
				$(".popup_bg").click(function(){
					$(".popup").fadeOut(800);
					setTimeout(function() {	
			  			$(".popup").remove();
					}, 800);
				});
			});
 		});



		//the Searching on the website
 		var $$ = function (id) { return document.getElementById(id) };
        var min;
        var max;
        
        function search(parent){
            var count = 0;
            var childs = parent.getElementsByClassName("kiss3");

            for (var i = 0; i < childs.length; i++){
                var string = childs[i].getElementsByTagName("b")[0];
                var price = parseInt(string.innerHTML.replace(/ /g, ''));
                childs[i].parentNode.style.display = 'block';
                if (price < min || price > max){
                	childs[i].parentNode.style.display = 'none';
                } else{
                	count++;
                } 
            }
           	parent.style.display = 'block';
            if (!count) parent.style.display = 'none';
        }
        
        function Search(){
            min = $$("headerwrap").getElementsByTagName("input")[0].value;
            max = $$("headerwrap").getElementsByTagName("input")[1].value;
            search($$('sofa1'));
            search($$('sofa2'));
            search($$('sofa3'));
            search($$('sofa4'));
        }
        

        //the clock on the website
        function watch(){
			let x=new Date();
			let clock=document.getElementById('time');

			let hours=x.getHours();
			if(hours<10) hours='0'+hours;
			clock.children[0].innerHTML=hours;

			let min=x.getMinutes();
			if(min<10) min='0'+min;
			clock.children[1].innerHTML=min;

			let sec =x.getSeconds();
			if(sec<10) sec='0'+sec;
			clock.children[2].innerHTML=sec;
		}		

		function clockStart(){
			setInterval(watch,1000);
			watch();
		}

		clockStart();