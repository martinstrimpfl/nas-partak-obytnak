$(document).ready(function() {

	if (document.getElementById("fb-root") != null)
		{return;}
     var div = document.createElement("div"); div.id = "fb-root";
	 document.body.appendChild(div);

// 	window.fbAsyncInit = function() { FB.init({status: true, xfbml: true}); };
// 	$("body").append('<div id="fb-root"></div><script type="text/javascript" src="'+document.location.protocol+'//connect.facebook.net/cs_CZ/all.js#xfbml=1"></script>');

	$(".tabulka tbody tr:even").addClass("licha");

	$("a[ href ^= '#' ]").each(function() {
        var href = window.location + $(this).attr("href").replace("/#.*/i","");
        $(this).attr("href",href);
		});

	$("body").append('<img src="https://toplist.cz/dot.asp?id=83915&amp;http='+escape(document.referrer)+'&amp;wi='+escape(window.screen.width)+'&amp;he='+escape(window.screen.height)+'&amp;cd='+escape(window.screen.colorDepth)+'&amp;t='+escape(document.title)+'" width="1" height="1" border="0" alt="TOPlist banan" style="border: 0 !important; padding: 0 !important; margin: 0 !important; background: transparent; visibility: hidden;" />');

	});
