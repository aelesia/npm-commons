import { DateUtil } from '../../src/collections/util/DateUtil'
import { _ } from '../../index'

describe('DateUtil', () => {
  test('to_date', async () => {
    let date = new Date(1576598796000)
    expect(DateUtil.parse(date)).toEqual(date)
    expect(DateUtil.parse(1576598796000)).toEqual(date)
    expect(DateUtil.parse(1576598796)).toEqual(date)
    expect(DateUtil.parse(1576598795)).not.toEqual(date)
    expect(DateUtil.parse('1576598796000')).toEqual(date)
    expect(DateUtil.parse('1576598796')).toEqual(date)
    expect(DateUtil.parse('1576598795')).not.toEqual(date)
    expect(DateUtil.parse()).toBeInstanceOf(Date)
    // FIXME: expect(DateUtil.to_date()).toEqual(new Date())
  })

  test('invalid to_date', async () => {
    expect(() => DateUtil.parse('abc')).toThrow(TypeError)
    expect(() => DateUtil.parse('123a')).toThrow(TypeError)
    expect(() => DateUtil.parse(null as any)).toThrow(TypeError)
    expect(() => DateUtil.parse(true as any)).toThrow(TypeError)
  })

  test('utc/epoch', async () => {
    let date = new Date(1576598796987)
    expect(DateUtil.utc(date)).toEqual(1576598796987)
    expect(DateUtil.epoch(date)).toEqual(1576598796)
  })

  test('add/elapsed', async () => {
    let today = DateUtil.now()
    let tomorrow = DateUtil.add(_.time.days(1), today)
    let yesterday = DateUtil.minus(_.time.days(1), today)
    expect(DateUtil.elapsed(yesterday, tomorrow)).toEqual(_.time.days(2))
    expect(DateUtil.elapsed(today, tomorrow)).toEqual(_.time.days(1))
    expect(DateUtil.elapsed(today, today)).toEqual(0)
    expect(DateUtil.elapsed(tomorrow, today)).toEqual(_.time.days(-1))
    expect(DateUtil.elapsed(tomorrow, yesterday)).toEqual(_.time.days(-2))
  })

  test('until', async () => {
    let today = DateUtil.now()
    let tomorrow = DateUtil.add(_.time.days(1), today)
    let yesterday = DateUtil.minus(_.time.days(1), today)
    expect(DateUtil.until(tomorrow)).toBeCloseTo(_.time.days(1), -1)
    expect(DateUtil.until(today)).toBeCloseTo(0, -1)
    expect(DateUtil.until(yesterday)).toBeCloseTo(_.time.days(-1), -1)
  })

  test('since', async () => {
    let today = DateUtil.now()
    let tomorrow = DateUtil.add(_.time.days(1), today)
    let yesterday = DateUtil.minus(_.time.days(1), today)
    expect(DateUtil.since(tomorrow)).toBeCloseTo(_.time.days(-1), -1)
    expect(DateUtil.since(today)).toBeCloseTo(0, -1)
    expect(DateUtil.since(yesterday)).toBeCloseTo(_.time.days(1), -1)
  })

  test('before', async () => {
    let date = DateUtil.now()
    let date2 = DateUtil.add(1, date)
    expect(DateUtil.isBefore(date, date)).toBeTruthy()
    expect(DateUtil.isBefore(date, date2)).toBeTruthy()
    expect(DateUtil.isBefore(date2, date)).not.toBeTruthy()
  })

  test('before now()', async () => {
    let date = DateUtil.now()
    expect(DateUtil.isBefore(date, DateUtil.now())).toBeTruthy()
  })

  test('after', async () => {
    let date = DateUtil.now()
    let date2 = DateUtil.add(1, date)
    expect(DateUtil.isAfter(date, date2)).not.toBeTruthy()
    expect(DateUtil.isAfter(date2, date)).toBeTruthy()
  })

  test('after now()', async () => {
    let date = DateUtil.add(99999)
    expect(DateUtil.isAfter(date, DateUtil.now())).toBeTruthy()
  })

  test('isPast', async () => {
    let today = new Date()
    let tomorrow = DateUtil.add(_.time.days(1), today)
    let yesterday = DateUtil.minus(_.time.days(1), today)
    expect(DateUtil.isPast(yesterday)).toBeTruthy()
    expect(DateUtil.isPast(tomorrow)).toBeFalsy()
  })

  test('isFuture', async () => {
    let today = new Date()
    let tomorrow = DateUtil.add(_.time.days(1), today)
    let yesterday = DateUtil.minus(_.time.days(1), today)
    expect(DateUtil.isFuture(tomorrow)).toBeTruthy()
    expect(DateUtil.isFuture(yesterday)).toBeFalsy()
  })
})
