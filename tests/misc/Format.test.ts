import { _ } from '../../index'

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
})
