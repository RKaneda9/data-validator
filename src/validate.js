'use strict';

import isArray          from './lib/isarray';
import isObject         from './lib/isobject';
import isInteger        from './lib/isinteger';
import isFloat          from './lib/isfloat';
import isString         from './lib/isstring';
import notEmpty         from './lib/notempty';
import isNotEmptyArray  from './lib/isnotemptyarray';
import isNotEmptyObject from './lib/isnotemptyobject';
import isNotEmptyString from './lib/isnotemptystring';
import isWithinRange    from './lib/iswithinrange';
import isPhoneNumber    from './lib/isphonenumber';
import isEmail          from './lib/isemail';

class Checker {
    constructor (data) {
        this.data    = data;
        this.isValid = true;
    }

    isArray         () { if (this.isValid) { this.isValid = isArray         (this.data) } return this; }
    isObject        () { if (this.isValid) { this.isValid = isObject        (this.data) } return this; }
    isInteger       () { if (this.isValid) { this.isValid = isInteger       (this.data) } return this; }
    isFloat         () { if (this.isValid) { this.isValid = isFloat         (this.data) } return this; }
    isString        () { if (this.isValid) { this.isValid = isString        (this.data) } return this; }
    notEmpty        () { if (this.isValid) { this.isValid = notEmpty        (this.data) } return this; }
    isNotEmptyArray () { if (this.isValid) { this.isValid = isNotEmptyArray (this.data) } return this; }
    isNotEmptyObject() { if (this.isValid) { this.isValid = isNotEmptyObject(this.data) } return this; }
    isNotEmptyString() { if (this.isValid) { this.isValid = isNotEmptyString(this.data) } return this; }
    isWithinRange   () { if (this.isValid) { this.isValid = isWithinRange   (this.data) } return this; }
    isPhoneNumber   () { if (this.isValid) { this.isValid = isPhoneNumber   (this.data) } return this; }
    isEmail         () { if (this.isValid) { this.isValid = isEmail         (this.data) } return this; }
}

const Validate = function (data) {
    return new Checker(data);
}

Validate.isArray          = isArray;
Validate.isObject         = isObject;
Validate.isInteger        = isInteger;
Validate.isFloat          = isFloat;
Validate.isString         = isString;
Validate.notEmpty         = notEmpty;
Validate.isNotEmptyArray  = isNotEmptyArray;
Validate.isNotEmptyObject = isNotEmptyObject;
Validate.isNotEmptyString = isNotEmptyString;
Validate.isWithinRange    = isWithinRange;
Validate.isPhoneNumber    = isPhoneNumber;
Validate.isEmail          = isEmail;

Object.freeze(Validate);

export default Validate;