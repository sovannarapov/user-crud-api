import { MIN_LENGTH } from '../helper/password.js'

export default function validatePassword(password) {
  const validLength = password.length >= MIN_LENGTH
  const containLetter = /[a-zA-Z]/g.test(password)
  const containNumber = /[0-9]/g.test(password)

  return validLength && containLetter && containNumber
}
