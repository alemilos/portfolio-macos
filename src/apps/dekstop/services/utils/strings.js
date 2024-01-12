/**
 * Check wether string a contains all the characters of string b
 * @param {string} a
 * @param {string} b
 */
export function contains(a, b) {
  for (let char of b) {
    if (char === " ") continue;
    if (a.includes(char)) {
      a = a.substring(0, a.indexOf(char)) + a.substring(a.indexOf(char) + 1);
    } else {
      return false;
    }
  }
  return true;
}

export function isNully(a) {
  if (a == null || a === "") return true;
  return false;
}
