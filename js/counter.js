const CounterPlugin = function ({ initialValue=0, step=1} = {}) {
this._value = initialValue;
    this._step = step;
};
CounterPlugin.prototype.increment = function () {
    this._value += this._step;
};
CounterPlugin.prototype.decrement = function () {
    this._value -= this._step;
};
const counter = new CounterPlugin({ step: 10 });
console.log("🚀 ~ file: counter.js ~ line 12 ~ counter", counter)
console.log('bbbbbbbbbb')