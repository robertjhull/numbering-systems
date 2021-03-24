// Number.prototype.toBase = function(
//     base = 10,
//     prefix = false,
// ) {
//     let num = this;
//     let result = [];

//     while (num > 0) {
//         let remainder = num % base;
//         if (base == 16 && remainder > 9) { 
//             remainder = ["A", "B", "C", "D", "E", "F"][remainder - 10];
//         }
//         num = Math.floor(num / base)
//         result.unshift(remainder)
//     }

//     if (prefix) {
//         switch(base) {
//             case 2: 
//                 result.unshift("0b");
//                 break;
//             case 8:
//                 result.unshift("Oo");
//                 break;
//             case 16:
//                 result.unshift("Ox");
//                 break;
//         }
//     }

//     return result.join("");
// }

Number.prototype.toRomanNumeral = function() {
    let num = this;
    let result = [];
    const value = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
    const symbol = ["I", "IV", "V", "IX", "X", "XL", "L", 
                    "XC", "C", "CD", "D", "CM", "M"];
    let i = 12;
    while (num) {
        let quotient = Math.floor(num / value[i]);
        num = num % value[i];
        while (quotient) {
            result.push(symbol[i])
            quotient--;
        }
        i--;
    }
    return result.join("");
}


// console.log((156).toBase(2)) // Should be 10011100
// console.log((343).toBase(2)) // 101010111
// console.log((7652).toBase(2)) // 1110111100100

// console.log((156).toBase(8)) // Should be 234
// console.log((343).toBase(8)) // 527
// console.log((7652).toBase(8)) // 16744

// console.log((156).toBase(16)) // Should be 9C
// console.log((343).toBase(16)) // 157
// console.log((7652).toBase(16)) // 1DE4

// console.log((3549).toRomanNumeral()) // should be MMMDXLIX
// console.log((50).toRomanNumeral())
// console.log((234).toRomanNumeral())