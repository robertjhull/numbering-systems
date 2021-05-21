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
