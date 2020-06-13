export type Duration = {
  years?: number
  days?: number
  hours?: number
  mins?: number
  secs?: number
}

export class TimeUtil {
  static ONE_SECOND = 1000
  static ONE_MINUTE = 60000
  static ONE_HOUR = 3600000
  static ONE_DAY = 86400000
  static ONE_YEAR = 31557600000

  static secs(seconds: number): number {
    return seconds * this.ONE_SECOND
  }

  static mins(minutes: number): number {
    return minutes * this.ONE_MINUTE
  }

  static hours(hours: number): number {
    return hours * this.ONE_HOUR
  }

  static days(days: number): number {
    return days * this.ONE_DAY
  }

  static parse(duration: Duration): number {
    let ms = 0
    ms += duration.secs ? this.secs(duration.secs) : 0
    ms += duration.mins ? this.mins(duration.mins) : 0
    ms += duration.hours ? this.hours(duration.hours) : 0
    ms += duration.days ? this.days(duration.days) : 0
    return ms
  }

  static _duration(ms: number): Duration {
    const years = Math.floor(ms / this.ONE_YEAR)
    ms -= years * this.ONE_YEAR
    const days = Math.floor(ms / this.ONE_DAY)
    ms -= this.days(days)
    const hours = Math.floor(ms / this.ONE_HOUR)
    ms -= this.hours(hours)
    const mins = Math.floor(ms / this.ONE_MINUTE)
    ms -= this.mins(mins)
    const secs = Math.floor(ms / this.ONE_SECOND)
    return { years, days, hours, mins, secs }
  }
}
