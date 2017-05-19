import isNotEmptyString from './isnotemptystring';

/*********************************************

    TODO:

    http://stackoverflow.com/questions/123559/a-comprehensive-regex-for-phone-number-validation
    http://search.cpan.org/~kennedyh/Number-Phone-US-1.5/lib/Number/Phone/US.pm
    https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers

*********************************************/
export default function isPhoneNumber(val) {
    if (!isNotEmptyString(val)) return false;

    let parsed = val.match(/\d/g).join('');

    return parsed.length == 5 ||
           parsed.length == 7 ||
           parsed.length >= 10;
}