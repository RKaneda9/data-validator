export default function isNotEmptyObject(val) {
    return typeof val === 'object' && val && !(val instanceof Array);
}