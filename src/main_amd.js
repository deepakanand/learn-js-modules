requirejs.config({
	baseUrl: 'node_modules/requirejs',
	paths: {
		src: '../../src'
	}
});

requirejs([
	'src/amd'
], function(amd) {

	console.log(amd.getHello());

});