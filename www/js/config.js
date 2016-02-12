
// define constants
var config_module = angular.module('PhatThanhTinLanh.config', []);
var config_data = {
	'GENERAL_CONFIG': {
		'APP_NAME': 'Phat Thanh Tin Lanh - Vietnamese Christian Broadcast',
		'APP_VERSION': '1.0',
		'CREDIT_URL': 'http://www.cloudberrysoft.com',
		'CREDIT_NAME': 'Cloudberry Software'
	}
}

angular.forEach(config_data,function(key,value) {
  config_module.constant(value,key);
});