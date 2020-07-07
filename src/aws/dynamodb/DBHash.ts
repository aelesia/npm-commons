export class DBHash<T extends { id: string }> {
  readonly table: string
  db: any
  constructor(table: string) {
    this.table = table
    this.db = {}
  }

  // TODO: Handle table doesn't exist
  async insert(key: string, value: Omit<T, 'id'>): Promise<void> {
    return new Promise<void>(resolve => {
      if (!this.db[this.table]) {
        this.db[this.table] = {}
      }
      this.db[this.table][key] = value
      // console.log(`[DB] [${this.table}] Inserted ${key}`)
      resolve()
    })
  }

  async scan(): Promise<T[]> {
    if (!this.db[this.table]) {
      this.db[this.table] = {}
      return []
    }
    let rows = this.db[this.table]
    return Object.keys(rows).map(key => {
      return Object.assign({ key }, rows[key])
    })
  }

  // TODO: Handle table / key doesn't exist
  async select(key: string): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      // console.log(`[DB] [${this.table}] Selected ${key}`)
      let value = this.db[this.table][key]
      if (value) resolve(value)
      else reject(`[DB] [${this.table}] No such value: ${key}`)
    })
  }

  // TODO: Handle table / key doesn't exist
  async update(key: string, value: T): Promise<void> {
    return new Promise<void>(resolve => {
      const data = this.db[this.table][key]
      const updated_on = { updated_on: new Date().toUTCString() }
      this.db[this.table][key] = { ...data, ...value, updated_on }
      // console.log(`[DB] [${this.table}] Updated ${key} : ${JSON.stringify(value)}`)
      resolve()
    })
  }

  print(): void {
    console.log(this.db[this.table])
  }
}
