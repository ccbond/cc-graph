export function invariant(check: boolean, message: string, scope = 'cc-graph') {
    if (!check) {
        throw new Error(
            `${scope ? '[' + scope + ']' : ''} Invariant failed: ${message}`
        );
    }
}
// https://github.com/lodash/lodash/blob/3.0.8-npm-packages/lodash.isfunction/index.js
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';
var objectToString = Object.prototype.toString;
function isObject(value: any) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
}
export function isFunction(value: any): boolean {
    var tag = isObject(value) ? objectToString.call(value) : '';
    return tag == funcTag || tag == genTag;
}


/**
 * 判断对象是否存在
 * @param {*} val - 待判断的对象
 * @param {bool} andString - 也要考虑字符串的 'undefined' 和 'null' 情况
 */
export function isExist(val: any, andString = true): boolean {
    const result = typeof val !== 'undefined' && val !== null;

    if (andString) {
        return result && val !== 'undefined' && val !== 'null';
    } else {
        return result;
    }
}