export class StringUtil {
  private static is_number(str: string): boolean {
    return !(this.is_blank(str) || isNaN(str as any))
  }

  static is_blank(str: string): boolean {
    return !str || !str.trim()
  }

  static lines(str: string): string[] {
    return str.split('\n')
  }

  static replace_all(str: string, search: string, replacement: string): string {
    return str.replace(new RegExp(search, 'g'), replacement)
  }

  static remove(str: string, ...char: string[]): string {
    for (let i = 0; i < char.length; i++) {
      str = this.replace_all(str, char[i], '')
    }
    return str
  }

  static _i(str: string): number {
    if (!StringUtil.is_number(str)) {
      throw new TypeError(`StringUtil: Unable to parse '${str}' to number`)
    }
    return Number(str)
  }

  static _json<T>(str: string): T {
    return JSON.parse(str)
  }

  static secs(str: string): number {
    return this._i(str) * 1000
  }

  static mins(str: string): number {
    return this._i(str) * 60000
  }

  static hours(str: string): number {
    return this._i(str) * 3600000
  }

  static days(str: string): number {
    return this._i(str) * 86400000
  }
}
