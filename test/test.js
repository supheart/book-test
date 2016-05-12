var chai = require('chai'); //引入chai断言库
var assert = chai.assert; 
var expect = chai.expect;

var comop = require('../src/core/commonutil');

describe('开始测试用例', function() {
	before(function(){
		console.log('用例初始化');
	});

	after(function(){
		console.log('用例完成');
	});

	it('测试读取配置文件', function(){
		expect(comop.conf('session.secret')).to.equal('123456');
		expect(comop.conf('log.replaceConsole')).to.equal(true);
	});

	it('测试写入配置文件', function(){
		expect(comop.conf('test', 'test by mocha')).to.equal(comop.conf('test'));
		expect(comop.conf('test1', 'test by mocha1')).to.equal(comop.conf('test1'));
	})

	it('测试读取写入配置文件', function(){
		expect(comop.conf('test')).to.equal('test by mocha');
		expect(comop.conf('test2')).to.not.equal('test by mocha2');
	})

	beforeEach(function(){
		console.log('单元用例初始化');
	});

	afterEach(function(){
		console.log('单元用例完成');
	});
});