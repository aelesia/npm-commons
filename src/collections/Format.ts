export class Format {
  static email(value: string): string
  static email(value: unknown): string {
    if (typeof value === 'string') {
      return value.toLowerCase()
    }
    console.warn(new TypeError(`Unable to parse value as string: ${value}`))
    return 'ERR'
  }
}
