function LoadPage() {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET", path, false);
	rawFile.onreadystatechange = function ()
	{
		if(rawFile.readyState === 4)
		{
			if(rawFile.status === 200 || rawFile.status == 0)
			{
				var text = rawFile.responseText;
				var content = JSON.parse(text);
				for (var i = 0; i < content.pamiatky.length; i++) {
					var pamiatka = content.pamiatky[i];
					if(pamiatka.tag == 3)
					{
						var leftPanel = document.getElementById("leftPanel");
						var content = "<div class='container'><h1 class='featurette-heading'>" + pamiatka.nazov + "</h1><div class='text-left'>" +
							"<p><span class='glyphicon glyphicon-map-marker'></span>&nbsp;" + pamiatka.poloha + "</p>" +
							"<p><span class='glyphicon glyphicon-flag'></span>&nbsp;" + pamiatka.rokVzniku + "</p></div>";
						content += "<p class='lead text-info'>" + pamiatka.Nazov1 + "</p>";
						content += "<div class='articleText text-justify'>" + pamiatka.paragrafs[0] + "</div>";
						content += "<div class='articleText text-justify'>" + pamiatka.paragrafs[1] + "</div>";
						content += "<div class='articleText text-left'>" + pamiatka.paragrafs[2] + "</div>";
						content += "<img src='" + pamiatka.imgs[0].src + "' alt='" + pamiatka.imgs[0].alt + "' class='images'/>";
						content += "<p class='lead text-info'>" + pamiatka.Nazov2 + "</p>";
						content += "<div class='articleText text-justify'>" + pamiatka.paragrafs[3] + "</div>";
						content += "<img src='" + pamiatka.imgs[1].src + "' alt='" + pamiatka.imgs[1].alt + "' class='images'/>";
						content += "<p class='articleText'>Zdroj: <a href='" + pamiatka.source + "'>tu</a>.</p></div>";
						leftPanel.innerHTML = content;
					}
					else if(pamiatka.tag == 4)
					{
						var rightPanel = document.getElementById("rightPanel");
						var content = "<div class='container'><h1 class='featurette-heading'>" + pamiatka.nazov + "</h1><div class='text-left'>" +
							"<p><span class='glyphicon glyphicon-map-marker'></span>&nbsp;" + pamiatka.poloha + "</p>" +
							"<p><span class='glyphicon glyphicon-flag'></span>&nbsp;" + pamiatka.rokVzniku + "</p></div>";
						content += "<p class='lead text-info'>" + pamiatka.Nazov1 + "</p>";
						content += "<div class='articleText text-justify'>" + pamiatka.paragrafs[0] + "</div>";
						content += "<div class='articleText text-justify'>" + pamiatka.paragrafs[1] + "</div>";
						content += "<img src='" + pamiatka.imgs[0].src + "' alt='" + pamiatka.imgs[0].alt + "' class='images'/>";
						content += "<p class='lead text-info'>" + pamiatka.Nazov2 + "</p>";
						content += "<div class='articleText text-justify'>" + pamiatka.paragrafs[2] + "</div>";
						content += "<img src='" + pamiatka.imgs[1].src + "' alt='" + pamiatka.imgs[1].alt + "' class='images'/>";
						content += "<p class='articleText'>Zdroj: <a href='" + pamiatka.source + "'>tu</a>.</p></div>";
						leftPanel.innerHTML = content;
					}
				}
			}
		}
		rawFile.send(null);
	}
}