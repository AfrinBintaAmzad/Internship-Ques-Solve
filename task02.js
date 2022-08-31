var romanInt = function (s) {
    const romanMap = new Map();

    romanMap.set('I', 1);
    romanMap.set('V', 5);
    romanMap.set('X', 10);
    romanMap.set('L', 50);
    romanMap.set('C', 100);
    romanMap.set('D', 500);
    romanMap.set('M', 1000);
    const n = s.length;

    let result = romanMap.get(s[n - 1]);
    for (let i = n - 2; i >= 0; i--) {
        if (romanMap.get(s[i]) >= romanMap.get(s[i + 1])) {
            result += romanMap.get(s[i]);
        } else {
            result -= romanMap.get(s[i]);
        }
    }
    return result;
};
console.log(romanInt("V"));
console.log(romanInt("IV"));
console.log(romanInt("X"));
console.log(romanInt("LXC"));

