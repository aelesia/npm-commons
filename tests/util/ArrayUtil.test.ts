import { _ } from '../../index'

describe('ArrayUtil', () => {
  test('first', async () => {
    let arr = ['a', 'b', 'c']
    expect(_.arr.first(arr)).toEqual('a')
  })

  test('first on empty array', async () => {
    let arr: any = []
    expect(() => _.arr.first(arr)).toThrowError()
  })

  test('last', async () => {
    let arr = ['a', 'b', 'c']
    expect(_.arr.last(arr)).toEqual('c')
  })

  test('last on empty array', async () => {
    let arr: any = []
    expect(() => _.arr.last(arr)).toThrowError()
  })

  test('is_not_empty', async () => {
    let arr = ['a', 'b', 'c']
    expect(_.arr.isEmpty(arr)).toEqual(false)
  })

  test('is_empty', async () => {
    let arr: [] = []
    expect(_.arr.isEmpty(arr)).toEqual(true)
  })

  test('max', async () => {
    let arr = [33, 64, -23]
    expect(_.arr.max(arr)).toEqual(64)
  })

  test('random', async () => {
    let arr = ['a', 'b', 'c']
    expect(arr.includes(_.arr.random(arr))).toBeTruthy()
  })

  describe('groupBy', () => {
    test('sample1', () => {
      const groupByLetter = _.arr.groupBy(['a', 'ab', 'b', 'bb', 'bc', 'cc'], it => it[0])
      expect(groupByLetter).toEqual({ a: ['a', 'ab'], b: ['b', 'bb', 'bc'], c: ['cc'] })
    })

    test('sample2', () => {
      const groupByOddEven = _.arr.groupBy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], it =>
        it % 2 === 0 ? 'even' : 'odd'
      )
      expect(groupByOddEven).toEqual({ even: [0, 2, 4, 6, 8], odd: [1, 3, 5, 7, 9] })
    })

    const berlin = { name: 'Berlin', sex: 'F' }
    const bob = { name: 'Bob', sex: 'M' }
    const alice = { name: 'Alice', sex: 'F' }
    const carol = { name: 'Carol', sex: 'F' }
    const dan = { name: 'Dan', sex: 'M' }
    const aiden = { name: 'Aiden', sex: 'NB' }
    const cheryl = { name: 'Cheryl', sex: 'F' }
    const ppl = [berlin, bob, alice, carol, dan, aiden, cheryl]

    test('sex', () => {
      const groupBySex = _.arr.groupBy(ppl, it => it.sex)
      expect(groupBySex).toEqual({
        F: [berlin, alice, carol, cheryl],
        M: [bob, dan],
        NB: [aiden]
      })
    })

    test('letter', () => {
      const groupByLetter = _.arr.groupBy(ppl, it => it.name[0])
      expect(groupByLetter).toEqual({
        A: [alice, aiden],
        B: [berlin, bob],
        C: [carol, cheryl],
        D: [dan]
      })
    })

    test('filtered', () => {
      const filtered = ppl.filter(it => it.sex === 'F')
      const groupByLetter = _.arr.groupBy(filtered, it => it.name[0])
      expect(groupByLetter).toEqual({
        A: [alice],
        B: [berlin],
        C: [carol, cheryl]
      })
    })

    test('sort', () => {
      const sorted = ppl.slice().sort((a, b) => (a.name < b.name ? 1 : -1))
      const groupByLetter = _.arr.groupBy(sorted, it => it.name[0])
      expect(groupByLetter).toEqual({
        A: [alice, aiden],
        B: [bob, berlin],
        C: [cheryl, carol],
        D: [dan]
      })
    })

    test('map', () => {
      const groupByLetterCount = _.arr.groupBy(
        ppl.map(it => ({
          ...it,
          letterCount: it.name.length
        })),
        it => it.letterCount
      )
      function wrap<T extends { name: string }>(object: T): T & { letterCount: number } {
        return {
          ...object,
          letterCount: object.name.length
        }
      }
      expect(groupByLetterCount).toEqual({
        3: [wrap(bob), wrap(dan)],
        5: [wrap(alice), wrap(carol), wrap(aiden)],
        6: [wrap(berlin), wrap(cheryl)]
      })
    })
  })
})
