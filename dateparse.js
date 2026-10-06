// Разбор даты из строки. Поддерживается формат ГГГГ-ММ-ДД.

function parseDate(text) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(text.trim());
  if (!m) {
    return null;
  }
  return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) };
}

module.exports = { parseDate };
