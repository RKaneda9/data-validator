export default function isFloat(val) {
    return typeof val === 'number' && parseFloat(val) == val.toString();
}