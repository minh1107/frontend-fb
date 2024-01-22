//  Make ID function, I use this to create random ID
// credit : https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const makeid = (length:number) => {
  var result = "";
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export { makeid}
