var config = require((global.CONF_PATH || '../configs/') + 'config');

/**
  * 获取或设置配置文件的值，key可以是key1.key2.key3的形式往下取值
  */
exports.conf = function(key, value){
	if(value !== undefined){
		config[key] = value;
		return value;
	}else{
		var conf = config;
		var keylist = key.split('.');

		for(var k in keylist){
			if(conf[keylist[k]] === undefined){
				return false;
			}
			conf = conf[keylist[k]];
		}
		return conf;
	}
}