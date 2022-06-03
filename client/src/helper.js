function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

exports.getUuid = function () {
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
};

exports.getUuid8 = function () {
    return s4() + s4();
};

exports.getUrlParams = function () {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    const params = {};
    vars.map((str) => {
        let temp = str.split('=');
        params[temp[0]] = temp[1];
    });
    return params;
};

exports.getStyleString = function (obj) {
    if (!obj) return;
    let arr = [];
    for (let key in obj) {
        arr.push(`${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${obj[key]}`);
    }
    return arr.join(';');
};

exports.insertAfter = function (newEle, targetEle) {
    let parent = targetEle.parentNode;
    if (parent.lastChild == targetEle) {
        parent.appendChild(newEle);
    } else {
        parent.insertBefore(newEle, targetEle.nextSibling);
    }
};

exports.deepMerge = function (obj, other) {
    let toStr = Object.prototype.toString;
    if (!obj || toStr(obj) !== '[object Object]') return;
    if (!other || toStr(other) !== '[object Object]') return;
    for (let key in other) {
        if (
            obj[key] &&
            toStr(obj[key]) === '[object Object]' &&
            other[key] &&
            toStr(other[key]) === '[object Object]'
        ) {
            deepMerge(obj[key], other[key]);
        } else {
            obj[key] = other[key];
        }
    }
    return obj;
};

exports.arrInsert = function (array, index, value) {
    let arr = [].concat(array);
    if (arr.length) {
        arr.splice(index, 0, value);
    } else {
        arr.push(value);
    }
    return arr;
};

exports.arrDelete = function (array, index) {
    let arr = [].concat(array);
    arr.splice(index, 1);
    return arr;
};

exports.change = function (array, index, value) {
    let arr = [].concat(array);
    deepMerge(arr[index], value);
    return arr;
};

exports.arrExchange = function (array, origin, target) {
    let arr = [].concat(array);
    let temp = arr[origin];
    arr[origin] = arr[target];
    arr[target] = temp;
    return arr;
};
