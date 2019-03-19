/**
 * Самый простой способ зашифровать строку – сдвиг букв.
 * Под сдвигом понимается замена буквы на предыдущую в алфавите.
 * Если предыдущей буквы нет, она заменяется на последнюю букву алфавита (в этой задаче мы имеем дело с английским алфавитом).
 *
 * Вам прислали секретное сообщение, зашифрованное способом, описанным выше и состоящее из строчных английских букв.
 *
 * Напишите функцию decrypt(secret) которая расшифрует и вернет его.
 *
 * Пример:
 *
 * decrypt('bnqqdbs') === 'correct'
 * decrypt('zmc vd hfmnqd rozbdr') === 'and we ignore spaces'
 *
 * @param {string} secret
 * @returns {string}
 */
function decrypt(secret) {
    var distionary = "abcdefghijklmnopqrstuvwxyz";
    var alphabet = distionary.split("");
    var secretArr = secret.split("");
    var result = [];
    secretArr.forEach(function(element) {
        if (alphabet.indexOf(element) === 25) {
            result.push(alphabet[0]);
        }
        if (element === " ") {
            result.push(" ");
        } else {
            var indexAlp = alphabet.indexOf(element);
            result.push(alphabet[indexAlp + 1]);
        }
    });

    return result.join("");
}

module.exports = decrypt;
