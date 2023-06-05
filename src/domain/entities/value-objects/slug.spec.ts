import { expect, test } from "vitest";
import { Slug } from "./slug";

test('it should be able to create a new slug from a text', () => {
  const slug = Slug.createFromText('My question title')

  expect(slug.value).toBe('my-question-title')
})