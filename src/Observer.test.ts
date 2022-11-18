import { Observer, Subject } from "./Observer"

describe("Observer", () => {
  it("should add Observer to Subject list of handlers", () => {
    const subject = new Subject()
    const observer = new Observer()
    subject.add(observer)
    expect(subject.observers.size).toBe(1)
  })

  it("should remove Observer from Subject list of handlers", () => {
    const subject = new Subject()
    const observer = new Observer()
    subject.remove(observer)
    expect(subject.observers.size).toBe(0)
  })

  it("should notify all observers of change", () => {
    const subject = new Subject()
    const observers = [...Array(4).keys()].map(() => {
      const observer = new Observer()
      subject.add(observer)
      return observer
    })
    const notification = {
      key: true,
    }
    subject.notify(notification)
    observers.map((observer) => {
      expect(observer.value).toEqual(notification)
    })
  })
})
