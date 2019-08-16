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
    let curcle = 0;
    let figure = 0;
    let arrow = 0;

    for (let i = 0; i < value.length; i++) {
        switch (value[i]) {
            case "(":
                curcle++;
                break;
            case ")":
                if (curcle === 0) {
                    return false;
                } else {
                    curcle--;
                }
                break;

            case "{":
                figure++;
                break;
            case "}":
                if (figure === 0) {
                    return false;
                } else {
                    figure--;
                }
                break;

            case "<":
                arrow++;
                break;
            case ">":
                if (arrow === 0) {
                    return false;
                } else {
                    arrow--;
                }
                break;
        }
    }

    if (curcle + figure + arrow === 0) {
        return true;
    } else {
        return false;
    }
}

module.exports = parentheses;
