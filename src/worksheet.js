let reOBJ = new RegExp('[[][a-z \s]+[]]', 'g' )

function findReg(string) {
  console.log(reOBJ.exec(string), string.match(/\[[^\]]+\]/, 'g'));
}

findReg("The Owner has invited you to join Situation 25121 [Mail system down]\nPlease follow this link to open Situation Room: http://www.moogsoft.com")
