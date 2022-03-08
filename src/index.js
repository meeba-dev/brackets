module.exports = function check(str, bracketsConfig) {
  let openedBrackets = [];
  let closedBrackets = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    openedBrackets += String(bracketsConfig[i][0]);
    closedBrackets += String(bracketsConfig[i][1]);
  }
  str = Array.from(str);
  let counter = 0;
  while (str.length != 0) {
    for (let j = 0; j < str.length; j++) {
      if (openedBrackets.includes(str[j])) {
        if (openedBrackets.indexOf(str[j]) == closedBrackets.indexOf(str[j + 1])) {
          str.splice(j, 2);
        }
      }
    }
    counter++;
    if (counter > 30) {
      return false;
    }
  }
  return true;
}
