var COFFEEPICKER = COFFEEPICKER || {

	init: function() {
		var _centerWrapper = document.getElementById('centerWrapper'),
			_coffee = document.getElementById('coffee'),
			_swatches = document.getElementsByClassName('swatch'),
			_sfxPour = document.getElementById('pour'),
			l = _swatches.length,
			i;

		setSize();
		window.onorientationchange = setSize;
		
		document.ontouchmove = function(e) {
			e.preventDefault();
		};

		for ( i = 0; i < l; i++ ) {
			if (i != 4) {
				_swatches[i].addEventListener('click', fillCup, false);
			}
		}

		function fillCup(e) {
			var swatchStyle = window.getComputedStyle(this),
				t,
				tt;

			_coffee.style.backgroundColor = swatchStyle.backgroundColor;


			_centerWrapper.className = '';
			t = setTimeout(function(){_centerWrapper.className = 'active';}, 200);

			tt = setTimeout(function(){_sfxPour.play();}, 2200);

		}

		function setSize() {
			var wrapper = document.getElementById('mainWrapper');
			wrapper.style.height = window.innerHeight.toString() + 'px';
			wrapper.style.width = window.innerWidth.toString() + 'px';
		}

	}

};

window.onload = function() {
	COFFEEPICKER.init();
};
