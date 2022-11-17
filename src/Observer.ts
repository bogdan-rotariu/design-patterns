class Subject {
  observers: Observer[]
  constructor() {
    this.observers = []
  }

  add(observer: Observer) {
    return this.observers.push(observer)
  }

  getIndex(observer: Observer) {
    return this.observers.findIndex((handler) => handler === observer)
  }

  removeAt(id: number) {
    return this.observers.splice(id, 1)
  }

  notify(context: unknown) {
    return this.observers.forEach((observer) => observer.update(context))
  }
}

class Observer {
  value: unknown

  update(value) {
    this.value = value
  }
}

export { Observer, Subject }
