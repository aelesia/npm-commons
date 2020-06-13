import { _ } from '../../index'

describe('TimeUtil', () => {
  test('seconds', async () => {
    expect(_.time.secs(1)).toEqual(1000)
  })
  test('minutes', async () => {
    expect(_.time.mins(1)).toEqual(60000)
  })
  test('hours', async () => {
    expect(_.time.hours(1)).toEqual(3600000)
  })
  test('days', async () => {
    expect(_.time.days(1)).toEqual(86400000)
  })

  describe('from', () => {
    test('seconds', async () => {
      expect(_.time.parse({ secs: 1 })).toEqual(1000)
    })
    test('minutes', async () => {
      expect(_.time.parse({ mins: 1 })).toEqual(60000)
    })
    test('hours', async () => {
      expect(_.time.parse({ hours: 1 })).toEqual(3600000)
    })
    test('days', async () => {
      expect(_.time.parse({ days: 1 })).toEqual(86400000)
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
