import { ArrayUtil as _ } from '../src/util/ArrayUtil'

describe('ArrayUtil', () => {
  test('first', async () => {
    let arr = ['a', 'b', 'c']
    expect(_.first(arr)).toEqual('a')
  })

  test('last', async () => {
    let arr = ['a', 'b', 'c']
    expect(_.last(arr)).toEqual('c')
  })

  test('is_not_empty', async () => {
    let arr = ['a', 'b', 'c']
    expect(_.is_empty(arr)).toEqual(false)
  })

  test('is_empty', async () => {
    let arr: [] = []
    expect(_.is_empty(arr)).toEqual(true)
  })

  test('max', async () => {
    let arr = [33, 64, -23]
    expect(_.max(arr)).toEqual(64)
  })

  test('random', async () => {
    let arr = ['a', 'b', 'c']
    expect(arr.includes(_.random(arr))).toBeTruthy()
  })
})
