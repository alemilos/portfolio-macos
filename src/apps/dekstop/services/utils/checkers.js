/**
 *  Verify if the email is in the correct format a@b.c
 * @param {string} email
 */
export function validEmail(email) {
  try {
    const [prefix, suffix] = email.split("@");
    const suffixSplit = suffix.split(".");
    if (suffixSplit.length !== 2) return false;

    const [mail, domain] = suffixSplit;
    if (prefix && mail && domain) return true;
    return false;
  } catch (err) {
    return false;
  }
}
