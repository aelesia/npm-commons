import { _ } from '../../index'
import { DateUtil } from '../../src/collections/util/DateUtil'
import { TimeUtil } from '../../src/collections/util/TimeUtil'

describe('TimeUtil', () => {
  test('until', async () => {
    let today = DateUtil.now()
    let tomorrow = DateUtil.add(_.time.days(1), today)
    let yesterday = DateUtil.minus(_.time.days(1), today)
    expect(TimeUtil.until(tomorrow)).toBeCloseTo(_.time.days(1), -1)
    expect(TimeUtil.until(today)).toBeCloseTo(0, -1)
    expect(TimeUtil.until(yesterday)).toBeCloseTo(_.time.days(-1), -1)
  })

  test('since', async () => {
    let today = DateUtil.now()
    let tomorrow = DateUtil.add(_.time.days(1), today)
    let yesterday = DateUtil.minus(_.time.days(1), today)
    expect(TimeUtil.since(tomorrow)).toBeCloseTo(_.time.days(-1), -1)
    expect(TimeUtil.since(today)).toBeCloseTo(0, -1)
    expect(TimeUtil.since(yesterday)).toBeCloseTo(_.time.days(1), -1)
  })

  test('seconds', async () => {
    expect(_.time.secs(1)).toEqual(1000)
  })
  test('minutes', async () => {
    expect(_.time.mins(1) + _.time.secs(1)).toEqual(61000)
  })
  test('hours', async () => {
    expect(_.time.hours(1) + _.time.mins(1) + _.time.secs(1)).toEqual(3661000)
  })
  test('days', async () => {
    expect(_.time.days(1) + _.time.hours(1) + _.time.mins(1) + _.time.secs(1)).toEqual(90061000)
  })

  describe('from', () => {
    test('seconds', async () => {
      expect(_.time.parse({ years: 0, days: 0, hours: 0, mins: 0, secs: 1 })).toEqual(1000)
    })
    test('minutes', async () => {
      expect(_.time.parse({ years: 0, days: 0, hours: 0, mins: 1, secs: 1 })).toEqual(61000)
    })
    test('hours', async () => {
      expect(_.time.parse({ years: 0, days: 0, hours: 1, mins: 1, secs: 1 })).toEqual(3661000)
    })
    test('days', async () => {
      expect(_.time.parse({ years: 0, days: 1, hours: 1, mins: 1, secs: 1 })).toEqual(90061000)
    })
  })

  describe('format', () => {
    test('minutes', async () => {
      expect(_.time._duration(86400000 + 3600000 + 60000 + 1000)).toEqual({
        years: 0,
        days: 1,
        hours: 1,
        mins: 1,
        secs: 1
      })
    })
  })
})
