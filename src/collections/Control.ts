export async function loop(
  func: () => any,
  func_catch: (e: Error) => void,
  delay?: number
): Promise<void> {
  try {
    await func()
  } catch (e) {
    await func_catch(e)
  }
  setTimeout(() => loop(func, func_catch), delay)
}

export async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, ms)
  })
}

export function rethrow(e1: Error, e2: Error): void {
  e1.stack = e1.stack + '\n' + e2.stack
  throw e1
}

export function Throw(error: Error, error2?: Error): never {
  if (error2) {
    error.stack = error.stack + '\n' + error2.stack
    throw error
  }
  throw error
}
