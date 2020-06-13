import { StringUtil } from './StringUtil'
import dayjs from 'dayjs'

export type AnyDate = Date | number | string

export class DateUtil {
  static now(): Date {
    return new Date()
  }

  static parse(date?: AnyDate): Date {
    if (date instanceof Date) {
      return date
    } else if (typeof date === 'number') {
      return this.from_number(date)
    } else if (typeof date === 'string') {
      // FIXME: Dates could be ISO strings too
      return this.from_number(StringUtil._i(date))
    } else if (typeof date === 'undefined') {
      return new Date()
    }
    throw new TypeError(`Time: Unable to parse ${date} to date`)
  }

  private static from_number(timestamp: number): Date {
    if (timestamp <= 99999999999) {
      return new Date(timestamp * 1000)
    }
    return new Date(timestamp)
  }

  /**
   * Returns the number of MILLISECONDS since 1970
   */
  static utc(date?: AnyDate): number {
    return this.parse(date).getTime()
  }

  /**
   * Returns the number of SECONDS since 1970
   */
  static epoch(date?: AnyDate): number {
    return Math.trunc(this.parse(date).getTime() / 1000)
  }


  /**
   * Returns the number of milliseconds to go from date1 until date2
   */
  static until(date: AnyDate): number {
    let date_utc = this.parse(date).getTime()
    let now = this.now().getTime()
    return date_utc - now
  }

  /**
   * The number of milliseconds that has elapsed from date1 since date2
   */
  static since(date: AnyDate): number {
    return -this.until(date)
  }

  /**
   * Returns the number of milliseconds from date2 to date1
   */
  static elapsed(date: AnyDate, date2: AnyDate): number {
    let date_utc = this.parse(date).getTime()
    let date2_utc = this.parse(date2).getTime()
    return date2_utc - date_utc
  }

  static add(ms: number, date?: AnyDate): Date {
    date = this.parse(date)
    return new Date(date.getTime() + ms)
  }

  static minus(ms: number, date?: AnyDate): Date {
    date = this.parse(date)
    return new Date(date.getTime() - ms)
  }

  /**
   * Returns true if first date is equal to or before second date OR now()
   */
  static isBefore(date: AnyDate, date2: AnyDate): boolean {
    let date_utc = this.parse(date).getTime()
    let date2_utc = this.parse(date2).getTime()
    return date_utc <= date2_utc
  }

  static isAfter(date: AnyDate, date2: AnyDate): boolean {
    let date_utc = this.parse(date).getTime()
    let date2_utc = this.parse(date2).getTime()
    return date_utc > date2_utc
  }

  static hasPassed(date: AnyDate): boolean {
    return this.isBefore(date, new Date())
  }

  static _f(date: AnyDate, format: string): string {
    let new_date = this.parse(date)
    return dayjs(new_date).format(format)
  }
}
