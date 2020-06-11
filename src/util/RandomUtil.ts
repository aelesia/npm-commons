export class RandomUtil {
  static random(min: number, max: number): number {
    return Math.floor(Math.random() * Math.floor(max + 1 - min)) + min
  }

  static maybe(): boolean {
    return RandomUtil.random(0, 1) === 0
  }

  static chance(percentage: number): boolean {
    return percentage > RandomUtil.random(0, 99)
  }
}
