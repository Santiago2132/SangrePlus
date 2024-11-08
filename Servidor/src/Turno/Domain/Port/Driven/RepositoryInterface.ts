export default interface Repository<E, T> {
  findAll: () => Promise<T[]>
  findById: (id: E) => Promise<T>
  save: (item: T) => Promise<Boolean>
  update: (id: E, item: Partial<T>) => Promise<Boolean>
  delete: (id: E) => Promise<boolean>
}