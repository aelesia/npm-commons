export class ArrayUtil {
  // Finds the maximum number in an array
  static max(arr: number[]): number {
    // eslint-disable-next-line prefer-spread
    return Math.max.apply(Math, arr)
  }

  // Checks if an array is empty
  static is_empty<T>(arr: Array<T>): boolean {
    return arr.length === 0
  }

  // Returns a random value from an array
  static random<T>(arr: Array<T>): T {
    return arr[Math.floor(Math.random() * arr.length)]
  }

  // Returns the first item in an array
  static first<T>(arr: Array<T>): T {
    return arr[0]
  }

  // Returns the last item in an array
  static last<T>(arr: Array<T>): T {
    return arr[arr.length - 1]
  }
}
