/**
 * В доме решили провести перепись всех жильцов и составили список,
 * в котором указали возраст и пол каждого жильца.
 *
 * Напишите функцию census(list) возвращающую номер в списке самого старшего жителя мужского пола.
 *
 * Пример:
 *
 * census([{ age: 12, gender: 'Male' }, { age: 40, gender: 'Male' }]) === 2
 * census([{ age: 40, gender: 'Female' }]) === undefined
 *
 * @param {object[]} list
 * @returns {undefined|number}
 */
function census(list) {
    var currentAge = 0;
    var elder;

    list.forEach(function(element, index) {
        if (element.gender === "Male" && element.age > currentAge) {
            currentAge = element.age;
            elder = index + 1;
        }
    });

    return elder;
}
module.exports = census;
