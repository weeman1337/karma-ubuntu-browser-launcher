var UbuntuBrowser = function(baseBrowserDecorator) {

    baseBrowserDecorator(this);

    this._start = function(url) {
        var self = this;
        self._execCommand(self._getCommand(), [url]);
    };
};

UbuntuBrowser.prototype = {
    name: 'UbuntuBrowser',
    DEFAULT_CMD: {
        linux: 'webbrowser-app'
    }
};

UbuntuBrowser.$inject = ['baseBrowserDecorator'];

module.exports = {
    'launcher:UbuntuBrowser': ['type', UbuntuBrowser]
};
