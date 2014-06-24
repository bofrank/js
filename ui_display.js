function rotateStartStop() {
	//console.log(rotation);
	//uses global var rotation
	//uses jquery

	if (rotation == true) {
		rotation = false;
		clearinterval();
		$('a.promoButtonSS img').attr("src","https://checkout.netsuite.com/c.3397626/images/play.png");
	}

	else if (rotation == false) {
		rotation = true;
		startRotation();
		$('a.promoButtonSS img').attr("src","https://checkout.netsuite.com/c.3397626/images/pause.png");
	}
}