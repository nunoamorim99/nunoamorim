metrics = require('metrics');
var metricsServer = new metrics.Server(config.metricsPort || 9091);
metricsServer.addMetric('com.co.thingA', counter);
metricsServer.addMetric('com.co.thingB', hist1);
metricsServer.addMetric('com.co.thingC', hist2);
metricsServer.addMetric('com.co.thingD', meter);
metricsServer.addMetric('com.co.thingE', timer);

var report = new metrics.Report();
report.addMetric('com.co.thingA', counter);
var reporter = new metrics.ConsoleReporter(report);
 
reporter.start(1000);

var Metric = exports = module.exports = function Metrics(messagePasser, eventType) {
  this.messagePasser = messagePasser;
  this.eventType = eventType;
}
 
Metric.prototype.newMetric = function(type, eventType) {
  this.messagePasser.sendMessage({
    method: 'createMetric'
    , type: type
    , eventType: eventType
  });
}
Metric.prototype.forwardMessage = function(method, args) {
  this.messagePasser.sendMessage({
    method: 'updateMetric'
    , metricMethod: method
    , metricArgs: args
    , eventType: this.eventType
  }); 
}
 
Metric.prototype.update = function(val) { return this.forwardMessage('update', [val]); }
Metric.prototype.mark = function(n) { return this.forwardMessage('mark', [n]); }
Metric.prototype.inc = function(n) { return this.forwardMessage('inc', [n]); }
Metric.prototype.dec = function(n) { return this.forwardMessage('dec', [n]); }
Metric.prototype.clear = function() { return this.forwardMessage('clear'); }