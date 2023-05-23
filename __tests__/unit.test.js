// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// tests for isPhoneNumber

test('(123) 456-7890 is a valid phone number', () => {
  expect(functions.isPhoneNumber('(123) 456-7890')).toBeTruthy();
});

test('555 555-5555 is a valid phone number', () => {
  expect(functions.isPhoneNumber('555 555-5555')).toBeTruthy();
});

test('(ABC) DEF-GHIJ is not a valid phone number', () => {
  expect(functions.isPhoneNumber('(ABC) DEF-GHIJ')).toBeFalsy();
});

test('ABC DEF-GHIJ is not a valid phone number', () => {
  expect(functions.isPhoneNumber('123')).toBeFalsy();
});

// tests for isEmail

test('johndoe@example.com is a valid email', () => {
  expect(functions.isEmail('johndoe@example.com')).toBeTruthy();
});

test('iLikePie@mariecallenders.com is a valid email', () => {
  expect(functions.isEmail('iLikePie@mariecallenders.com')).toBeTruthy();
});

test('gmail.com@john.doe is not a valid email', () => {
  expect(functions.isEmail('gmail.com@john.doe')).toBeFalsy();
});

test('taxservices@irs.gov-WpFegTW.com is not a valid email', () => {
  expect(functions.isEmail('taxservices@irs.gov-WpFegTW.com')).toBeFalsy();
});

// tests for isStrongPassword

test('str0ng_paSswoRd is a strong password', () => {
  expect(functions.isStrongPassword('str0ng_paSswoRd')).toBeTruthy();
});

test('pa_s is a strong password', () => {
  expect(functions.isStrongPassword('pa_s')).toBeTruthy();
});

test('1tr0ng_paSswoRd is not a strong password', () => {
  expect(functions.isStrongPassword('1tr0ng_paSswoRd')).toBeFalsy();
});

test('str0ng_paSswoRd_that_is_also_very_very_very_very_long is not a strong password', () => {
  expect(functions.isStrongPassword('str0ng_paSswoRd_that_is_also_very_very_very_very_long')).toBeFalsy();
});

// tests for isDate

test('05/22/2023 is a valid date', () => {
  expect(functions.isDate('05/22/2023')).toBeTruthy();
});

test('5/2/2023 is a valid date', () => {
  expect(functions.isDate('5/2/2023')).toBeTruthy();
});

test('05/2/223 is not a valid date', () => {
  expect(functions.isDate('05/2/223')).toBeFalsy();
});

test('5-22-2023 is not a valid date', () => {
  expect(functions.isDate('5-22-2023')).toBeFalsy();
});

// tests for isHexColor

test('#A13 is a valid hex color', () => {
  expect(functions.isHexColor('#A13')).toBeTruthy();
});

test('#ABFC23 is a valid hex color', () => {
  expect(functions.isHexColor('#ABFC23')).toBeTruthy();
});

test('#A13B is not a valid hex color', () => {
  expect(functions.isHexColor('#A13B')).toBeFalsy();
});

test('ABF$23 is not a valid hex color', () => {
  expect(functions.isHexColor('ABF$23')).toBeFalsy();
});

