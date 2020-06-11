import { DateUtil } from '../src/util/DateUtil'

describe('DateUtil', () => {
  test('to_date', async () => {
    let date = new Date(1576598796000)
    expect(DateUtil.to_date(date)).toEqual(date)
    expect(DateUtil.to_date(1576598796000)).toEqual(date)
    expect(DateUtil.to_date(1576598796)).toEqual(date)
    expect(DateUtil.to_date(1576598795)).not.toEqual(date)
    expect(DateUtil.to_date('1576598796000')).toEqual(date)
    expect(DateUtil.to_date('1576598796')).toEqual(date)
    expect(DateUtil.to_date('1576598795')).not.toEqual(date)
    expect(DateUtil.to_date()).toBeInstanceOf(Date)
    // FIXME: expect(DateUtil.to_date()).toEqual(new Date())
  })

  test('invalid to_date', async () => {
    expect(() => DateUtil.to_date('abc')).toThrow(TypeError)
    expect(() => DateUtil.to_date('123a')).toThrow(TypeError)
    expect(() => DateUtil.to_date(null as any)).toThrow(TypeError)
    expect(() => DateUtil.to_date(true as any)).toThrow(TypeError)
  })

  test('utc/epoch', async () => {
    let date = new Date(1576598796987)
    expect(DateUtil.utc(date)).toEqual(1576598796987)
    expect(DateUtil.epoch(date)).toEqual(1576598796)
  })

  test('add/elapsed', async () => {
    let date = DateUtil.now()
    let date2 = DateUtil.add(61234, date)
    expect(DateUtil.elapsed(date, date2)).not.toEqual(61233)
    expect(DateUtil.elapsed(date, date2)).not.toEqual(61235)
    expect(DateUtil.elapsed(date, date2)).toEqual(61234)
    expect(DateUtil.elapsed(date2, date)).toEqual(61234)
  })

  test('subtract/elapsed', async () => {
    let date = DateUtil.now()
    let date2 = DateUtil.subtract(39280, date)
    expect(DateUtil.elapsed(date, date2)).not.toEqual(39279)
    expect(DateUtil.elapsed(date, date2)).not.toEqual(39281)
    expect(DateUtil.elapsed(date, date2)).toEqual(39280)
    expect(DateUtil.elapsed(date2, date)).toEqual(39280)
  })

  test('before', async () => {
    let date = DateUtil.now()
    let date2 = DateUtil.add(1, date)
    expect(DateUtil.is_before(date, date)).toBeTruthy()
    expect(DateUtil.is_before(date, date2)).toBeTruthy()
    expect(DateUtil.is_before(date2, date)).not.toBeTruthy()
  })

  test('before now()', async () => {
    let date = DateUtil.now()
    expect(DateUtil.is_before(date, DateUtil.now())).toBeTruthy()
  })

  test('after', async () => {
    let date = DateUtil.now()
    let date2 = DateUtil.add(1, date)
    expect(DateUtil.is_after(date, date2)).not.toBeTruthy()
    expect(DateUtil.is_after(date2, date)).toBeTruthy()
  })

  test('after now()', async () => {
    let date = DateUtil.add(99999)
    expect(DateUtil.is_after(date, DateUtil.now())).toBeTruthy()
  })

  test('has passed', async () => {
    expect(DateUtil.has_passed(DateUtil.to_date(1576598796000))).toBeTruthy()
    expect(DateUtil.has_passed(DateUtil.to_date(1576598796))).toBeTruthy()
    expect(DateUtil.has_passed(DateUtil.to_date(9976598796))).not.toBeTruthy()
  })
})
