import { _ } from '../../index'

describe('StringUtil', () => {
  describe('is_num', () => {
    test('Valid Number', async () => {
      expect(_.str.isNum('1')).toBeTruthy()
      expect(_.str.isNum('0.1')).toBeTruthy()
      expect(_.str.isNum('0')).toBeTruthy()
      expect(_.str.isNum('-1')).toBeTruthy()
      expect(_.str.isNum('-0.1')).toBeTruthy()
      expect(_.str.isNum('1 ')).toBeTruthy()
      expect(_.str.isNum(' 1')).toBeTruthy()
      expect(_.str.isNum(' 1 ')).toBeTruthy()
    })
    test('Invalid Number', async () => {
      expect(_.str.isNum('192.168.1.1')).toBeFalsy()
      expect(_.str.isNum('')).toBeFalsy()
      expect(_.str.isNum('1a')).toBeFalsy()
      expect(_.str.isNum('a1')).toBeFalsy()
    })
  })

  describe('is_blank', () => {
    test('Blank', async () => {
      expect(_.str.isBlank('')).toBeTruthy()
      expect(_.str.isBlank(' ')).toBeTruthy()
      expect(_.str.isBlank('  ')).toBeTruthy()
      expect(_.str.isBlank(null as any)).toBeTruthy()
      expect(_.str.isBlank(undefined as any)).toBeTruthy()
    })
    test('Not blank', async () => {
      expect(_.str.isBlank('a')).toBeFalsy()
      expect(_.str.isBlank(' a')).toBeFalsy()
      expect(_.str.isBlank('a ')).toBeFalsy()
    })
  })

  test('replace_all', () => {
    expect(
      _.str.replaceAll('the quick brown fox jumps over the lazy wolf', 'the', '那个')
    ).toEqual('那个 quick brown fox jumps over 那个 lazy wolf')
    expect(_.str.replaceAll('the quick brown fox jumps over the lazy wolf', ' ', '.')).toEqual(
      'the.quick.brown.fox.jumps.over.the.lazy.wolf'
    )
  })

  describe('remove', () => {
    test('remove 1 word', () => {
      expect(_.str.remove('the quick brown fox jumps over the lazy wolf', ' ')).toEqual(
        'thequickbrownfoxjumpsoverthelazywolf'
      )
    })
    test('remove 3 words', () => {
      expect(
        _.str.remove('the quick brown fox jumps over the lazy wolf', ['quick', 'brown', 'lazy'])
      ).toEqual('the   fox jumps over the  wolf')
    })
  })

  test('_i - to integer', () => {
    expect(_.str._num('1')).toEqual(1)
    expect(_.str._num('-1')).toEqual(-1)
    expect(_.str._num('1.1')).toEqual(1.1)
  })
})
