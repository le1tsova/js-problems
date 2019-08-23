/**
 * Лена планирует свой двухнедельный отпуск.
 *
 * Напишите функцию vacation(date) вычисляющую день следующий за отпуском Лены
 *
 * Примечание: вместо ручного подсчета используй класс Date и его методы
 *
 * Пример:
 *
 * vacation('01.01.2020') === '15.01.2020'
 * vacation('27.01.2020') === '10.02.2020'
 *
 * @param {string} date
 * @returns {string}
 */

function formatDate(num) {
    return num < 10 ? "0" + num : num;
}

function vacation(date) {
    const [day, month, year] = date.split(".");

    const holidays = new Date(+year, +month - 1, +day);

    holidays.setDate(holidays.getDate() + 14);
    const lastDay = formatDate(holidays.getDate());
    const lastMonth = formatDate(holidays.getMonth() + 1);

    return lastDay + "." + lastMonth + "." + holidays.getFullYear();
}

module.exports = vacation;
