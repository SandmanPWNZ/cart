export const required = value => (value ? undefined : 'This field is required');
export const num = value => (value && !/^[+0-9]/i.test(value) ? 'Only numbers allowed' : undefined);
export const minLen = min => value => (value && value.length <= min ? undefined : `Minimum ${min} charecters`);
export const minLen3 = minLen(3);
export const exactLen = len => value => (value && value.length === len ? undefined : 'This field should be exactly 9 charecters long');
export const exactLen9 = exactLen(9);
export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined
