import { add } from "../src/add"
import HelloWorld from "../src/components/HelloWorld.vue"

test('first test', () => {
  expect(1 + 1).toBe(2)
})

test('add', () => {
  expect(add(1, 2)).toBe(3)
})

test("hello world", () => {
  console.log(HelloWorld)
})