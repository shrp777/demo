import { describe, expect, test } from "@jest/globals";
import { add } from "../src/Math.js";

describe("Math", () => {
  test("add should be defined", () => {
    expect(add).toBeDefined();
  });
  test("add(1,1) should equal 2", () => {
    expect(add(1, 1)).toEqual(2);
  });
});
