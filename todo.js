const todoList = () => {
  let all = [];
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

  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    let overdue_list = all.filter(function (item) {
      return item.dueDate === yesterday;
    });
    return overdue_list;
  };

  const dueToday = () => {
    let dueToday_list = all.filter(function (item) {
      return item.dueDate === today;
    });
    return dueToday_list;
  };

  const dueLater = () => {
    let dueLater_list = all.filter(function (item) {
      return item.dueDate === tomorrow;
    });
    return dueLater_list;
  };

  const toDisplayableList = (list) => {
    let display_list = list.map(function (item) {
      if (item["dueDate"] === today && item["completed"] === false) {
        return "[ ]" + " " + String(item["title"]);
      } else if (item["dueDate"] === today && item["completed"] === true) {
        return "[x]" + " " + String(item["title"]);
      } else {
        return "[ ]" + " " + String(item["title"]) + " " + String(item["dueDate"]);
      }
    });
    let output_string = display_list.join("\n");

    return output_string;
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList,
  };
};

module.exports = todoList;
