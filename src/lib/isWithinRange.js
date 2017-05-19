import isArray   from './isarray';
import isObject  from './isobject';
import isString  from './isstring';
import isInteger from './isinteger';
import isFloat   from './isfloat';

export default function isWithinRange (val, min, max) {
    let useMin = typeof min == 'number';
    let useMax = typeof max == 'number';

    if (isInteger(val) || isFloat(val)) 
        return (!useMin || val >= min)
            && (!useMax || val <= max);

    if (isString(val)) 
        return val
            && (!useMin || val.trim().length >= min)
            && (!useMax || val.trim().length <= max);

    if (isArray(val))
        return val 
            && (!useMin || val.length >= min)
            && (!useMax || val.length <= max);

    throw new TypeError('isWithinRange() called on an invalid type. Only Numbers, Strings, and Arrays can be used with this function. Type received=' + typeof val);
}