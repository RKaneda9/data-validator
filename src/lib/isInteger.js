// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger

export default function isInteger(val) {
    return typeof val === 'number' && isFinite(val) && Math.floor(val) === val;
}