const exportedObjects = require("./functions.js");

describe("alltests", () => {
  test("find the string length", () => {
    expect(exportedObjects.functions.StringLength("mustafa")).toBe(7);
    expect(exportedObjects.functions.StringLength("m")).not.toBe(7);
    expect(exportedObjects.functions.StringLength("mustfa")).toBe(6);
  });
  test("Reversing a String", () => {
    expect(exportedObjects.functions.reverseString("mustfa")).toBe("aftsum");
  });
  test("Capitalize a String", () => {
    expect(exportedObjects.functions.capitalize("mustafa")).toBe("Mustafa");
    expect(exportedObjects.functions.capitalize("abdul")).toBe("Abdul");
    expect(exportedObjects.functions.capitalize("ali")).toBe("Ali");
  });
});

describe("Calculator", () => {
  test("Calculator", () => {
    expect(exportedObjects.Calculator.add(2, 3)).toBe(5); 
    expect(exportedObjects.Calculator.sub(4, 3)).toBe(1); 
    expect(exportedObjects.Calculator.mul(2, 3)).toBe(6); 
    expect(exportedObjects.Calculator.div(6, 3)).toBe(2); 
  });
});
