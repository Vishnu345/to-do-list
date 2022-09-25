/* eslint-disable no-undef */

const todoList = require("../index");
const formattedDate = (d) => {
  return d.toISOString().split("T")[0];
};

var dateToday = new Date();
const today = formattedDate(dateToday);
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
);
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
);
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("TdoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "todo1",
      completed: false,
      dueDate: today,
    });
  });
  test("add", () => {
    const count = all.length;
    add({
      title: "todo1",
      completed: false,
      dueDate: today,
    });
    expect(all.length).toBe(count + 1);
  });
  test("test2", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });

  test("test3", () => {
    all[0].dueDate = yesterday;
    let od = overdue();
    expect(od.length).toBe(1);
  });
  test("test4", () => {
    let dt = dueToday();
    expect(dt.length).toBe(1);
  });
  test("test5", () => {
    all[0].dueDate = tomorrow;
    let dl = dueLater();
    expect(dl.length).toBe(1);
  });
});
