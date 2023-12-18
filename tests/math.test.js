import { describe, expect, test } from "@jest/globals";
import { add, multiply, square } from "../src/Math.js";

describe("Math", () => {
  test("add should be defined", () => {
    expect(add).toBeDefined();
  });
  test("multiply should be defined", () => {
    expect(multiply).toBeDefined();
  });
  test("square should be defined", () => {
    expect(square).toBeDefined();
  });
  test("add(1,1) should equal 2", () => {
    expect(add(1, 1)).toEqual(2);
  });
  test("multiply(2,5) should equal 10", () => {
    expect(multiply(2, 5)).toEqual(10);
  });
  test("square(3) should equal 9", () => {
    expect(square(3)).toEqual(9);
  });
});
