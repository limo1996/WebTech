function LoadPage(tag1, tag2, path) {
	var rawFile = new XMLHttpRequest();
		rawFile.open("GET", path, false);
		rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var text = rawFile.responseText;
				var contentJ = JSON.parse(text);
				var length = contentJ.pamiatky.length;
				for (var i = 0; i < length; i++) {
					var pamiatka = contentJ.pamiatky[i];
					if(pamiatka.tag == tag1 || pamiatka.tag == tag2)
					{
						var content;
						var panel = document.getElementById("leftPanel");
						if(pamiatka.tag == tag2)
							panel = document.getElementById("rightPanel");

						var content = "<div class='container'><h1 class='featurette-heading'>" + pamiatka.nazov + "</h1><div class='text-left'>";
						if(pamiatka.poloha)
							content += "<p><span class='glyphicon glyphicon-map-marker'></span>&nbsp;" + pamiatka.poloha + "</p>";
						if(pamiatka.autor)
							content += "<p><span class='glyphicon glyphicon-user'></span>&nbsp;" + pamiatka.autor + "</p>";
						if(pamiatka.rokVzniku)
							content += "<p><span class='glyphicon glyphicon-flag'></span>&nbsp;" + pamiatka.rokVzniku + "</p></div>";
						
						content += "<p class='lead text-info'>" + pamiatka.Nadpis1 + "</p>";
						content += "<div class='articleText text-justify'>" + pamiatka.paragrafs[0] + "</div>";
						content += "<div class='articleText text-justify'>" + pamiatka.paragrafs[1] + "</div>";

						content += "<img src='" + pamiatka.imgs[0].src + "' alt='" + pamiatka.imgs[0].alt + "' class='images'/>";
						content += "<p class='lead text-info'>" + pamiatka.Nadpis2 + "</p>";
						content += "<div class='articleText text-justify'>" + pamiatka.paragrafs[2] + "</div>";
						content += "<img src='" + pamiatka.imgs[1].src + "' alt='" + pamiatka.imgs[1].alt + "' class='images'/>";
						content += "<p class='articleText'>Zdroj: <a href='" + pamiatka.source + "'>tu</a>.</p></div>";
						panel.innerHTML = content;
					}
				}
			}
		}
	}
	rawFile.send(null);
}