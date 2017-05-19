// can be null
export default function isObject(val) {
    return typeof val === 'object' && !(val instanceof Array);
}