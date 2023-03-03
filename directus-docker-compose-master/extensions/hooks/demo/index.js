"use strict";

module.exports = ({ init, action }) => {
    init('app.after', () => {
		console.log('Custom init hook: App Started');
	});

	action('server.start', () => {
		console.log('Custom action hook: Server Started');
	});
};
