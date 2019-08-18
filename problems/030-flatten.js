/**
 * Напишите функцию flatten(array) которая делает вложенный массив плоским
 *
 * Пример:
 *
 * flatten([1, [2, 3]]) === [1, 2, 3]
 * flatten([1, [2, [3, 4]]]) === [1, 2, 3, 4]
 *
 * @param {}
 * @returns {}
 */
function flatten(array) {
    const result = [];
    if (!array.length) {
        return [];
    }

    array.forEach(element => {
        if (typeof element === "number") {
            result.push(element);
        } else {
            result.push(...flatten(element));
        }
    });

    return result;
}

module.exports = flatten;
