/**
 * Ранее мы уже решали задачу валидации последовательности скобок в строке.
 *
 * На этот раз напишите функцию parentheses(value) валидирующую строку с несколькими типами скобок.
 *
 * Пример:
 *
 * parentheses('<>') === true
 * parentheses('<}') === false
 *
 * @param {string} value – строка из набора символов (, ), {, }, <, >.
 * @returns {boolean}
 */
function parentheses(value) {
    if (value.length === 0) {
        return false;
    }
    const parent = {
        "}": "{",
        ">": "<",
        ")": "("
    };

    let stack = [];

    for (let i = 0; i < value.length; i++) {
        let element = value[i];

        if (Object.keys(parent).includes(element)) {
            if (stack.pop() === parent[element]) {
                continue;
            }

            return false;
        }

        stack.push(element);
    }
    return stack.length === 0;
}

module.exports = parentheses;
