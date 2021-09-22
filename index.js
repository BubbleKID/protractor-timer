var TimeCostPlugin = function () {
    this.startTime;
    this.currentCost;
};

TimeCostPlugin.prototype.onPrepare = function () {
    setTimeout(() => {
        this.startTime = Date.now()
    }, 0);
}

TimeCostPlugin.prototype.postTest = function (passed, testInfo) {
    this.currentCost = (Date.now() - this.startTime) / 1000 + ' secs';
    this.startTime = Date.now();

    Promise.resolve().then(() => console.log('\x1b[36m%s\x1b[0m', this.currentCost));
}

// Export

module.exports = new TimeCostPlugin();
module.exports.TimeCostPlugin = TimeCostPlugin;