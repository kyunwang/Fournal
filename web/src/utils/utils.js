export const replaceAllNonCharacters = (string, newCharacter) => {
  const regexNonCharacterDigits = /[^a-z-0-9]/gi;
  return string.replace(regexNonCharacterDigits, newCharacter).toLowerCase();
};
