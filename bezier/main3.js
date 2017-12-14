window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width = canvas.width = window.innerWidth,
		height = canvas.height = window.innerHeight,
		i = 0,
		p0 = {
			x: 500,
			y: 200
			// x: utils.randomRange(0, width),
			// y: utils.randomRange(0, height)
		},
		p1 = {
			x: 200+i,
			y: 400
			// x: utils.randomRange(0, width),
			// y: utils.randomRange(0, height)
		},
		p2 = {
			x: 500,
			y: 600
			// x: utils.randomRange(0, width),
			// y: utils.randomRange(0, height)
		},
		t = 0,
		direction = 0.01,
		pFinal = {};
	
	
	draw();
		
	function draw() {
		 	
			context.beginPath();
			context.moveTo(p0.x, p0.y);
			
			for (var t=0; t<1; t+=direction) {
				utils.quadraticBezier(p0, p1, p2, t, pFinal);
				context.lineTo(pFinal.x, pFinal.y);
			}
			context.stroke();		
		
	}
}

