//cambiar imagen de fondo por una lista aleatoria.
$( function(){
    var body = $('body');
    var backgrounds = [ 'fondo-1.jpg','fondo-2.jpg', 'fondo-3.jpg', 'fondo-4.jpg' ];
    var current = 0;
	
function nextBackground(){
	body.css(
		'background',backgrounds[current = ++current % background.length]);
		setTimeout(nextBackground,5000);
	};
	setTimeout(nextBackground,5000);
	body.css('background',backgrounds[0]);
});

