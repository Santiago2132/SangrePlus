export default interface Repository<E, T> {
  findAll: () => Promise<T[]>
  findById: (id: E) => Promise<T>
  save: (item: T) => Promise<boolean>
  update: (id: E, item: Partial<T>) => Promise<boolean>
  delete: (id: E) => Promise<boolean>
}