
exports.min = function min(array) {
    return arguments.length > 0 ? array.reduce(function (min, current) {
        return (min < current ? min : current)
    }, 0) : 0;
}

exports.max = function max(array) {
    return arguments.length > 0 ? array.reduce(function (max, current) {
        return (max > current ? max : current)
    }, 0) : 0;
}

exports.avg = function avg(array) {
    return arguments.length > 0 ? array.length > 0 ? array.reduce((avg, current) =>
        (avg + current)) / array.length : 0 : 0;
}
