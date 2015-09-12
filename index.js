var Etcd = require('node-etcd')
var q = require('q')


var EtcdQ = function(host, port) {
    var chost = '127.0.0.1';
    var cport = '4001';
    if(host !== undefined) {
        chost = host;
    }

    if(port !== undefined) {
        cport = port;
    }

    this.etcd = new Etcd();
    this.defer = q.defer(); 
}

EtcdQ.prototype.set = function(key, value) {
    return this.defer.reject(this.etcd.set(key, value, console.log));
}

EtcdQ.prototype.get = function(key) {
    return this.defer.reject(this.etcd.get(key, console.log));
}

EtcdQ.prototype.del = function(key) {
    return this.defer.reject(this.etcd.del(key, console.log));
}

module.exports = EtcdQ;