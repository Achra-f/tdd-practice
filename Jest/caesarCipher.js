function caesarCipher(str, shift) {
    function shiftChar(char, shift) {
      const charCode = char.charCodeAt(0);
  
      if (charCode >= 65 && charCode <= 90) {
        return String.fromCharCode(((charCode - 65 + shift) % 26 + 26) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters (a-z)
        return String.fromCharCode(((charCode - 97 + shift) % 26 + 26) % 26 + 97);
      } else {
        return char;
      }
    }
  
    const result = str.split('').map(char => shiftChar(char, shift)).join('');
    return result;
  }
  
  module.exports = caesarCipher;
  