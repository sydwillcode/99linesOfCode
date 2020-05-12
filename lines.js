let friends = ["Sydni", "NaTasha", "Cleveland", "Nikki", "Brandon"];

function linesOfCode() {
  for (let names of friends) {
    console.log(names + ":");
    for (let i = 99; i > 0; i--) {
      if (i === 2) {
        console.log(
          `${i} lines of code in the file, ${i} lines of code; ${names} strikes one out, clears it all out, ${i - 1} line of code in the file.`
        );
      } else if (i === 1) {
        console.log(
          `${i} line of code on in the file, ${i} line of code; ${names} strikes one out, clears it all out, no more lines of code in the file`
        );
      } else {
        console.log(
          `${i} lines of code in the file, ${i} lines of code; ${names} strikes one out, clears it all out, ${i - 1} lines of code in the file.`
        );
      }
    }
  }
}
linesOfCode();
