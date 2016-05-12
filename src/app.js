var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var log4js = require('log4js');

//----start-设置全局变量------
global.CONF_PATH = path.join(__dirname, '/configs/');
//-----end--设置全局变量------

var commonutil = require('./core/commonutil')

var projectId = 'test-word';
var app = express();

//----start-配置express参数和中间件------
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('.html', require('ejs').__express);
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(session(commonutil.conf('session')));
//-----end--配置express参数和中间件------

//----start-设置日志处理------
var logconf = commonutil.conf('log');
log4js.configure(logconf);
logger = log4js.getLogger('normal');
logger.setLevel('INFO');
app.use(log4js.connectLogger(logger, {level: log4js.levels.INFO, format: logconf.logformat}));
logger.info('start log..');
//-----end--设置日志处理------

//----start-设置路由------
var indexroute = require('./route/index');
indexroute(app);
//-----end--设置路由------

//----start-设置错误处理------
app.use(function(req, res, next){
	var domain = require('domain').create();
	domain.enter();
	domain.on('error', function(error){
		logger.info('domain catch error:', error);
		res.statusCode = 200;
		res.json({state: false, message: '服务器错误', data: {}});
		domain.dispose();
	});
	domain.add(req);
	domain.add(res);
	domain.run(next);
});
//-----end--设置错误处理------

//----start-启动服务器------
var port = '3008';
app.listen(port, function(){
	logger.info('start server, listen port ' + port);
});
//-----end--启动服务器------