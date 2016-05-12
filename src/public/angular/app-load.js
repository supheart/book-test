angular.forEach(app_config.controllers, function(data, index){
	document.write('<script src="' + '/angular/controller/' + data + '.js"></script>');
});

angular.forEach(app_config.directives, function(data, index){
	document.write('<script src="' + '/angular/directive/' + data + '.js"></script>');
});