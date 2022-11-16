class Subject {
  observers: Observer[]
  constructor() {
    this.observers = []
  }

  add(observer: Observer) {
    return this.observers.push(observer)
  }

  remove(observer: Observer) {
    return this.observers.filter((item) => observer !== item)
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

const TestSubject = new Subject()
const observers = [...Array(4).keys()].map(() => {
  const observer = new Observer()
  TestSubject.add(observer)
  return observer
})
const notification = {
    key: true,
  }
TestSubject.notify(notification)

console.log(observers.filter(observer => observer.value === notification))
