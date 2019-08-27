/**
 * Напишите функцию has(path, object) возвращающую true, если в объекте есть свойство
 * описанное массивом path, иначе false
 *
 * Пример:
 *
 * has(['a'], { a: 1 }) === true
 * has(['b'], { a: 1 }) === false
 * has(['o', 'a'], { o: { a: 2 } }) === true
 *
 * @param {string[]} path
 * @param {object} object
 * @returns {boolean}
 */
function has(path, object) {
    let obj = object;

    return path.reduce((result, element) => {
        if (typeof obj !== "object" || obj === null) {
            return false;
        }
        if (Object.prototype.hasOwnProperty.call(obj, element)) {
            obj = obj[element];
        } else {
            return false;
        }
        return true;
    }, true);
}
module.exports = has;
