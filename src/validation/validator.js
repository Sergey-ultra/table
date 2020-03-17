export const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const maxLength = max => value =>
    value && value.length > max ? `Должно быть меньше ${max} символов` : undefined;

export const maxLength15 = maxLength(15);

const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const minLength2 = minLength(2)

export const number = value =>
    value && isNaN(Number(value)) ? 'Должно быть число' : undefined;

const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;

export const minValue13 = minValue(13);

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Неправильный имейл'
        : undefined

export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Неправильный телефон, должно быть 9 цифр'
        : undefined