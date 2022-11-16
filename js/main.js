// let group = {
//   name: "Zoopark",
//   studentsCount: 27,
//   "students-count": 227,
//   language: "JavaScript",
// };

// |||| ETO FOR IN
// (((((((((((((((((((((for (const key in group) {
//   console.log(key, group[key]);
// }))))))))))))))))))))

// let group = ["Inraim", "Amantur", "Sobaka", "Ronin"];

// for (const key in group) {
//   console.log(key, group[key]);
// }

// ETO FOR OF
// let newGroup = [];
// for (let value of group) {
//   newGroup.push(value + "s");
// }
// console.log(newGroup);

// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let arr = ["qwe", "df", "wert", "dfg"];
// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

let group = ["Inraim", "Amantur", "Sobaka", "Ronin"];
for (let i = 0; i < group.length; i++) {
  if (group[i] === "Sobaka") {
    console.log(`${group}вы приглашены`);
    // break;
    continue;
  }
  console.log(group[i]);
}
