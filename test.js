import test from 'ava';
import Benjmark from './index.js';

test.cb('should benchmark elapsed time', t => {
	var benjmark = new Benjmark();
	benjmark.start('myTimer');
	setTimeout(() => {
		benjmark.end();
		t.true(benjmark.totalTime >= 1000 && benjmark.totalTime < 1015);
		t.end();
	}, 1000);
});

test('should allow multiple labels', t => {
	var benjmark = new Benjmark();

	benjmark.start('label01');
	t.is(benjmark.label, 'label01');
	benjmark.end();

	benjmark.start('label02');
	t.is(benjmark.label, 'label02');
	benjmark.end();

	benjmark.start('label03');
	t.is(benjmark.label, 'label03');
	benjmark.end();

	benjmark.start('label04');
	t.is(benjmark.label, 'label04');
	benjmark.end();

	benjmark.start('label05');
	t.is(benjmark.label, 'label05');
	benjmark.end();

	benjmark.start('label06');
	t.is(benjmark.label, 'label06');
	benjmark.end();

	benjmark.start('label07');
	t.is(benjmark.label, 'label07');
	benjmark.end();

	benjmark.start('label08');
	t.is(benjmark.label, 'label08');
	benjmark.end();
});

test('should assign numbers if no labels assigned', t => {
	var benjmark = new Benjmark();

	benjmark.start();
	t.is(benjmark.label, 'benjmark #1');
	benjmark.end();

	benjmark.start();
	t.is(benjmark.label, 'benjmark #2');
	benjmark.end();
});
