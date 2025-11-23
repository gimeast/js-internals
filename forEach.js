Array.prototype.customForEach = function (cb, thisArg) {
    for (let i = 0; i < this.length; i++) {
        cb.call(thisArg, this[i], i, this);
    }
};

[1, 2, 'asd'].customForEach(
    function (v, i, arr) {
        console.log(this.name, v, i, arr);
    },
    { name: 'kim' }
);
