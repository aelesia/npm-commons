import { _ } from '../../index'
import { TimeUtil } from '../../src/collections/util/TimeUtil'

describe('Format', () => {
  let consoleWarn: any
  beforeEach(() => {
    consoleWarn = spyOn(console, 'warn')
  })

  describe('Email', () => {
    test('Email', () => {
      expect(_.format.email('AbC@xYz.cOm')).toEqual('abc@xyz.com')
    })
    test('Invalid Email', () => {
      expect(_.format.email(123 as any)).toEqual('ERR')
      expect(consoleWarn).toBeCalled()
    })
  })

  describe('timeAgo', () => {
    test('seconds', () => {
      expect(_.format.timeAgo(0)).toEqual('0 seconds')
      expect(_.format.timeAgo(TimeUtil.secs(1))).toEqual('1 seconds')
      expect(_.format.timeAgo(TimeUtil.secs(59))).toEqual('59 seconds')
      expect(_.format.timeAgo(TimeUtil.secs(60))).not.toEqual('59 seconds')
    })
    test('minutes', () => {
      expect(_.format.timeAgo(TimeUtil.secs(60))).toEqual('1 minutes')
      expect(_.format.timeAgo(TimeUtil.mins(1))).toEqual('1 minutes')
      expect(_.format.timeAgo(TimeUtil.mins(59))).toEqual('59 minutes')
      expect(_.format.timeAgo(TimeUtil.mins(60))).not.toEqual('60 minutes')
    })
    test('hours', () => {
      expect(_.format.timeAgo(TimeUtil.mins(60))).toEqual('1 hours')
      expect(_.format.timeAgo(TimeUtil.hours(1))).toEqual('1 hours')
      expect(_.format.timeAgo(TimeUtil.hours(23))).toEqual('23 hours')
      expect(_.format.timeAgo(TimeUtil.hours(24))).not.toEqual('24 hours')
    })
    test('days', () => {
      expect(_.format.timeAgo(TimeUtil.hours(24))).toEqual('1 days')
      expect(_.format.timeAgo(TimeUtil.days(1))).toEqual('1 days')
      expect(_.format.timeAgo(TimeUtil.days(30))).toEqual('30 days')
    })
    test('invalid', () => {
      expect(_.format.timeAgo('abc' as any)).toEqual('ERR')
      expect(consoleWarn).toBeCalled()
    })
  })
})
