const process = require("process");
const util = require("util");

function decodeBencode(bencodedValue) {
  console.log(bencodedValue)
  if (!isNaN(bencodedValue[0])) {
    const firstColonIndex = bencodedValue.indexOf(":");
    if (firstColonIndex === -1) {
      throw new Error("Invalid encoded value");
    }
    return bencodedValue.substr(firstColonIndex + 1);
  }else if (bencodedValue[0] === "i" && bencodedValue[bencodedValue.length - 1 ] === "e") {
    return bencodedValue.substring(1, bencodedValue.length - 1 )
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
