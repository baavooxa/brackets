module.exports = function check(str, bracketsConfig) {
    for (let i = 0; i < str.lenght; i++) {
        bracketsConfig.forEach(fn);
        var fn = function (bracket) {
            let pairBrackets = bracket.join('');
            if (str.indexOf(pairBackets) !== -1) {
                str = str.replace(pairBrackets, '');
            }
        };
    }
    return !str;
};