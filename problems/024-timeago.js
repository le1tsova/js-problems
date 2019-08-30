/**
 * Петя опубликовал картинку X секунд назад.
 *
 * Напишите функцию timeago(seconds) возвращаю текстовое представление периода прошедшего со времени публикации.
 * Для публикаций опубликованных более четырёх недель назад возвращайте строку 'undefined', ведь их никто не увидит.
 *
 * Пример:
 *
 * timeago(0) === 'just now'
 * timeago(10) === '10 seconds ago'
 * timeago(60) === '1 minute ago'
 * timeago(3600) === '1 hour ago'
 *
 * @param {number} seconds
 * @returns {string}
 */
const HR = 3600;
const TWO_HOURS = 7200;
const DAY = 86400;
const TWO_DAYS = 172800;
const ONE_WEEK = 604800;
const TWO_WEEKS = 1209600;
const FOUR_WEEKS = 2419200;

function timeago(seconds) {
    if (seconds < 10) {
        return "just now";
    }
    if (seconds < 60) {
        return String(seconds / 10)[0] + "0 seconds ago";
    }
    if (seconds < 120) {
        return "1 minute ago";
    }
    if (seconds < 1800) {
        return Math.floor(seconds / 60) + " minutes ago";
    }
    if (seconds < HR) {
        return "30 minutes ago";
    }
    if (seconds < TWO_HOURS) {
        return "1 hour ago";
    }
    if (seconds < DAY) {
        if (Math.floor(seconds / HR) <= 12) {
            return Math.floor(seconds / HR) + " hours ago";
        } else {
            return "12 hours ago";
        }
    }

    if (seconds < TWO_DAYS) {
        return "1 day ago";
    }
    if (seconds < ONE_WEEK) {
        return "a few days ago";
    }
    if (seconds < TWO_WEEKS) {
        return "1 week ago";
    }
    if (seconds < FOUR_WEEKS) {
        return Math.floor(seconds / ONE_WEEK) + " weeks ago";
    }
    return "undefined";
}

module.exports = timeago;
