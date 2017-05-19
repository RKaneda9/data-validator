export default function isNotEmptyString(val) {
    return typeof val == 'string' && val.trim().length;
}