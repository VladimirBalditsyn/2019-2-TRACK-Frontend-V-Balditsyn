/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== 1,
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === 5
 */

 import convertBytesToHuman from './convertBytesToHuman'

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  expect(convertBytesToHuman([1])).toBe(false)
  expect(convertBytesToHuman('backend')).toBe(false)
  expect(convertBytesToHuman(1.456)).toBe(false)
  expect(convertBytesToHuman(Infinity)).toBe(false)
  expect(convertBytesToHuman(NaN)).toBe(false)
  expect(convertBytesToHuman({})).toBe(false)
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe('1 KB')
  expect(convertBytesToHuman(102)).toBe('102 B')
  expect(convertBytesToHuman(123123123)).toBe('117.42 MB')
  expect(convertBytesToHuman(1107296256)).toBe('1.03 GB')
  expect(convertBytesToHuman(422212465065984)).toBe('384 TB')
  expect(convertBytesToHuman(13289)).toBe('12.98 KB')
});

test('Возвращает строку', () => {
  expect(typeof convertBytesToHuman(10)).toBe('string')
})
