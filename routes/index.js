
/*
 * GET home page.
 */

'use strict'

var siteName = 'Arush'

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index', {
			title: siteName + ' Home'
		});
	});

	app.get('/about', function(req, res) {
		res.render('about', {
			title: siteName + ' About'
		});
    });

	app.get('/contact', function(req, res) {
		res.render('contact', {
			title : siteName + ' Contact'
		});
	});

};
