/* eslint-disable no-undef */

const todoList = require("../index");
const { all, markAsComplete, add } = todoList();

describe("TdoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "todo1",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("add", () => {
    const count = all.length;
    add({
      title: "todo1",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
    expect(all.length).toBe(count + 1);
  });
  test("test2", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
});
