class Subject {
  observers: Set<Observer>
  constructor() {
    this.observers = new Set()
  }

  add(observer: Observer) {
    return this.observers.add(observer)
  }

  remove(observer) {
    return this.observers.delete(observer)
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
