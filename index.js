'use strict';
const chalk = require('chalk');
const colors = [chalk.cyan, chalk.magenta, chalk.white, chalk.yellow, chalk.red];

function Benjmark(opts) {
	opts = opts || {};

	this.colorTrack = 0;
	this.benjmarks = 0;
	this.label = 'benjmark';
	this.startTime = 0;
	this.totalTime = 0;
}

Benjmark.prototype.start = function (label) {
	this.benjmarks++;

	if (!label) {
		label = 'benjmark #' + this.benjmarks;
	}
	this.label = label;
	console.log(chalk.gray('start benjmark: ') + this.color(label));
	this.startTime = Date.now();
};

Benjmark.prototype.end = function () {
	this.totalTime = Date.now() - this.startTime;
	console.log(chalk.gray('└─end benjmark: ') + this.color(this.label) + ' : ' + this.color(this.totalTime) + ' ms\n');
	if (++this.colorTrack === colors.length) {
		this.colorTrack = 0;
	}
};

Benjmark.prototype.color = function () {
	return colors[this.colorTrack].apply(null, arguments);
};

module.exports = Benjmark;

