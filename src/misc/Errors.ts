// TODO: Allow objects to be passed in

export class NotImplementedError extends Error {
  constructor(msg?: string) {
    super(`NotImplementedError: ${msg}`)
    Object.setPrototypeOf(this, NotImplementedError.prototype)
  }
}

export class UninitializedError extends Error {
  constructor(msg?: string) {
    super(`UninitializedError: ${msg}`)
    Object.setPrototypeOf(this, UninitializedError.prototype)
  }
}

export class IllegalStateException extends Error {
  constructor(msg?: string) {
    super(`IllegalStateException: ${msg}`)
    Object.setPrototypeOf(this, IllegalStateException.prototype)
  }
}

export class IllegalArgumentException extends TypeError {
  constructor(msg?: string) {
    super(`IllegalArgumentException: ${msg}`)
    Object.setPrototypeOf(this, IllegalArgumentException.prototype)
  }
}
