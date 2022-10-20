import { add } from "../src/add"

test('first test', () => {
  expect(1 + 1).toBe(2)
})

test('add', () => {
  expect(add(1, 2)).toBe(3)
})
