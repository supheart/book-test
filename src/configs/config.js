module.exports = {
	session: {
		secret: '123456',
		name: 'test-word',
		cookie: { maxAge: 80000 },
		resave: false,
		saveUninitialized: true
	},
	log: {
		appenders: [
			{type: 'console'},
			{
				type: 'dateFile',
				filename: './logs/',
				alwaysIncludePattern: true,
				pattern: 'yyyy-MM-dd.log',
				category: 'normal'
			},
		],
		replaceConsole: true,
		dirname: __dirname + '/../../logs',
		logformat: 'remote-addr(:remote-addr),method(:method),url(:url),http(HTTP/:http-version),state(:status),contentLength(:res[Content-Length]),responseTime(:response-time),referer(:referrer)',
	},
};