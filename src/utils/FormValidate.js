export const required = value => (value ? undefined : 'Required');
export const minLen = min => value => (value && value.length <= min ? undefined : 'Required');
export const minLen3 = minLen(3);
export const exactLen = len => value => (value && value.length === len ? undefined : 'Required');
export const exactLen9 = exactLen(9);
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
