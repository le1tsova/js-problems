/**
 * Напишите функцию getPower(n) возвращающую челочисленное значение степени >= 0,
 * в которую нужно возвести двойку, чтобы получить n
 *
 * Пример:
 *
 * getPower(2) === 1            # 2^1 = 2
 * getPower(3) === undefined
 * getPower(256) === 8          # 2^8 = 256
 *
 * @param {number} n
 * @returns {number|undefined}
 */
function getPower(n) {
    if (n < 2) {
        return 0;
    }

    var powerCount = 1;
    while (true) {
        if (Math.pow(2, powerCount) >= n) {
            break;
        }
        powerCount++;
    }
    if (Math.pow(2, powerCount) === n) {
        return powerCount;
    }
}

module.exports = getPower;
