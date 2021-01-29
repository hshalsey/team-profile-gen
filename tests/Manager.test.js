const Manager = require("../lib/Manager");
//const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const testValue = 1234;
    const e = new Manager("Lorem", 1, "lorem@ipsum.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("Lorem", 1, "lorem@ipsum.com", 100);
    expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
    const testValue = 1234;
    const e = new Manager("Lorem", 1, "lorem@ipsum.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});