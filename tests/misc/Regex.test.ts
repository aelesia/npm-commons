import { _ } from '../../index'

describe('Regex', () => {
  // describe('RubyISOString', () => {
  //   test('Ruby ISO String', () => {
  //     expect(_.regex.is.isoDate('2020-02-06T00:00:00.000+08:00')).toBeTruthy()
  //   })
  //   test('rubbish', () => {
  //     expect(_.regex.is.isoDate('rubbish')).toBeFalsy()
  //   })
  //   test('Limit end of string', () => {
  //     expect(_.regex.is.isoDate('2020-02-06T00:00:00.000+08:00 ')).toBeFalsy()
  //   })
  //   test('Limit start of string', () => {
  //     expect(_.regex.is.isoDate(' 2020-02-06T00:00:00.000+08:00')).toBeFalsy()
  //   })
  // })
  describe('ISODateString', () => {
    test('ISODateString', () => {
      expect(_.regex.is.isoDate('2020-02-06')).toBeTruthy()
    })
    test('Do not parse ISODateString <= 1899', () => {
      expect(_.regex.is.isoDate('1899-02-06')).toBeFalsy()
    })
    test('Do not parse ISODateString >= 2100', () => {
      expect(_.regex.is.isoDate('2100-02-06')).toBeFalsy()
    })
    test('Invalid Month 0', () => {
      expect(_.regex.is.isoDate('2020-00-06')).toBeFalsy()
    })
    test('Invalid Month 13', () => {
      expect(_.regex.is.isoDate('2020-13-06')).toBeFalsy()
    })
    test('Invalid Date 0', () => {
      expect(_.regex.is.isoDate('2020-02-00')).toBeFalsy()
    })
    test('Invalid Date 32nd', () => {
      expect(_.regex.is.isoDate('2020-02-32')).toBeFalsy()
    })
    test('Invalid Format missing leading 0', () => {
      expect(_.regex.is.isoDate('2020-2-6')).toBeFalsy()
    })
    test('ISODateString', () => {
      expect(_.regex.is.isoDate('2020-02-06')).toBeTruthy()
    })
    test('rubbish', () => {
      expect(_.regex.is.isoDate('rubbish')).toBeFalsy()
    })
    test('Limit end of string', () => {
      expect(_.regex.is.isoDate('2020-02-06 ')).toBeFalsy()
    })
    test('Limit start of string', () => {
      expect(_.regex.is.isoDate(' 2020-02-06')).toBeFalsy()
    })
  })
})
