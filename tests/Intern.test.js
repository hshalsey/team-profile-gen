
const Intern = require("../lib/Intern");

test("Can set school through constructor", () => {
    const testValue = "UofO";
    const e = new Intern("Lorem", 1, "lorem@ipsum.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Lorem", 1, "lorem@ipsum.com", "UCLA");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school through getSchool()", () => {
    const testValue = "UofO";
    const e = new Intern("Lorem", 1, "lorem@ipsum.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});