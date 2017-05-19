import isArray  from './isarray';
import isObject from './isobject';
import isString from './isstring';

export default function notEmpty(val) {
    if (isArray (val)) return val && val.length;
    if (isObject(val)) return val && Object.keys(val).length; 
    if (isString(val)) return val && val.trim().length;

    throw new TypeError('notEmpty() called on an invalid type. Only Array, Objects, and Strings can be used with this function. Type received=' + typeof val);
}