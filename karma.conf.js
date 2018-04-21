// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  var configuration = {
    basePath: '',
    frameworks: ['jasmine', '@angular/cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-phantomjs-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular/cli/plugins/karma')
    ],
    client:{
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },
    angularCli: {
      environment: 'dev'
    },
    reporters: ['progress', 'kjhtml'],
    // 测试结果报告的类型
    coverageReporter:{
        reporters: [{
            type:'text-summary'
        }, {
            type: 'html',
            dir: 'test/coverage'
        }, {
            // 这就是Codecov支持的文件类型
            type: 'cobertura',
            subdir: '.',
            dir: 'test/coverage'
        }]
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    
    // start these browsers
    browsers: ['PhantomJS'],

    singleRun: false
  };

  config.set(configuration);
};
