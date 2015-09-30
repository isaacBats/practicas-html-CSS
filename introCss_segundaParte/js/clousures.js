function f () {
	// body...
	var b = "b";
	return function () {
		// body...
		return b;
	}
}

var n = f();
n();

function aumentarfuente (size) {
	// body...
	return function(){
		document.body.style.fontSize = size + 'px';
	}
}

var size30 = aumentarfuente(30);
var size80 = aumentarfuente(80);

var Contador = (function(){
	var _contadorPrivado = 0;
	function _cambiarValor (valor) {
		// body...
		_contadorPrivado += valor;
	};
	return{
		incrementar: function(){
			_cambiarValor(1);
		},
		decrementar: function(){
			_cambiarValor(-1);
		},
		valor: function () {
			// body...
			return _contadorPrivado;
		}
	};
})();
