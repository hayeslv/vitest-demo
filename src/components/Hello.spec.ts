import { test, expect } from "vitest"
import { mount } from "@vue/test-utils"
import Hello from "./Hello.vue"

test("hello", () => {
  const wrapper = mount(Hello)
  expect(wrapper.text()).toContain("hello")
})