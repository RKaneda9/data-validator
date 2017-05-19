// can be null
export default function isString(val) {
    return typeof val === 'string' || val == null;
}