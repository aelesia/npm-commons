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
})
