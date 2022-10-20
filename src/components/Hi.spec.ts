import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Hi from "./Hi"

test("hi", () => {
  const wrapper = mount(Hi)
  expect(wrapper.text()).toContain("hi")
})