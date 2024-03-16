const process = require("process");
const util = require("util");

function decodeBencode(bencodedValue) {
  if (!isNaN(bencodedValue[0])) {
    const firstColonIndex = bencodedValue.indexOf(":");
    if (firstColonIndex === -1) {
      throw new Error("Invalid encoded value");
    }
    const returnValue = bencodedValue.substring(firstColonIndex+1,bencodedValue.length)
    return returnValue
  }else if (bencodedValue[0] === "i" && bencodedValue[bencodedValue.length - 1 ] === "e") {
    const string = bencodedValue.substring(1, bencodedValue.length - 1 )
    const toInt = parseInt(string)
    if(toInt){
      return toInt
    }else{
      throw new Error("Only Integar are supported at the moment");
    }
  } else {
    throw new Error("Only strings are supported at the moment");
  }
}


function main() {
  const command = process.argv[2];

  if (command === "decode") {
    const bencodedValue = process.argv[3];

    console.log(JSON.stringify(decodeBencode(bencodedValue)));
  } else {
    throw new Error(`Unknown command ${command}`);
  }
}

main();
