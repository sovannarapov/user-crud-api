import validatePassword from '../../lib/validation/password.js';

test("return false if given an empty string", () => {
  expect(validatePassword("")).toBe(false)
})

test("return false if given a password contains a letter or a number, but not 8 characters long", () => {
  expect(validatePassword("a1")).toBe(false)
})

test("return true if given a password 8 characters or longer, a letter, and a number", () => {
  expect(validatePassword("1234567a")).toBe(true)
  expect(validatePassword("1234567A")).toBe(true)
  expect(validatePassword("123456aA")).toBe(true)
})

test("return false if given a password 8 characters long, a number, but no letters", () => {
  expect(validatePassword("12345678")).toBe(false)
})

test("return false if given a password 8 characters long, lowercase, but no numbers", () => {
  expect(validatePassword("abcdefgh")).toBe(false)
})

test("return false if given a password 8 characters long, uppercase, but no numbers", () => {
  expect(validatePassword("ABCDEFGH")).toBe(false)
})
