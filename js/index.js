// Massivlarning har bir metodiga (presentation da berilgan)
// oid 3 tadan misol yozib kelish.

//  const student = [
//     { name: 'shuhratbek', age: 21, header: 172},
//     { name: 'ali', age: 21, header: 190},
//     { name: 'otabek', age: 21, header: 150},
//     { name: 'jasurbek', age: 21, header: 167},
//     { name: 'jamollidin', age: 21, header: 167},
//     { name: 'alisher', age: 21, header: 145}
// ];

// const car = [
//     {name: 'spark', color: 'black', header: 1.5},
//     {name: 'matiz', color: 'green', header: 1.9},
//     {name: 'nexia', color: 'yellow', header: 1.4},
//     {name: 'mers', color: 'orenge', header: 1.3},
// ];

// const fruits = [
//     {name: 'olma', color: 'green', form: 'yumaloq'},
//     {name: 'banan', color: 'yellow', form: 'uzunchoq'},
//     {name: 'behi', color: 'orange', form: 'tortburchakroq'},
//     {name: 'shaftoli', color: 'red', form: 'aylana'}
// ];

// massiv va obeklarga oid masalalar

// ============================ 1- misol ============================

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];

//   function res(students) {
//     return students.map(student => ({
//       name: student.name,
//       age: student.age
//     }));
//   }

//   console.log(res(students));

// ============================ 2- misol ============================

// const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];

//   function res(students) {
//     return students.reduce((max, student) => {
//       return student.score > max ? student.score : max;
//     });
//   }

//   console.log(res(students));

// ============================ 3- misol ============================

//   const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, score: 88, status: 'active' }
//   ];

//   function res(students) {
//     return students.filter();
//   }

//   console.log(res(students));

// ============================ 4- misol ============================

//   const students = [
//     { name: 'Alice', age: 20, score: 85, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' }
//   ];
//   function sum(students) {
//     if (students.length == 0) {
//       return 0;
//     }

//     let total = 0;
//     for (let i = 0; i < students.length; i++) {
//       total += students[i].score;
//     }

//     let res = total / students.length;
//     return res;
//   }
//   const orta = sum(students);
//   console.log(orta);

// ============================ 5- misol ============================

// ============================ 6- misol ============================

//   const students = [
//     { name: 'Alice', age: 20, score: 80, status: 'active' },
//     { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//     { name: 'Charlie', age: 23, score: 85, status: 'active' }
//   ];
// function twenty(arr) {
//     let res = arr.indexOf(function (value) {
//         return value.score > 85
//     })
//     return res;
// }
// console.log(twenty(students));

// ============================ 7- misol ============================
// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function res(students) {
//   return students.filter(student => student.status === 'active');
// }

// const result = res(students);
// console.log(result);

// ============================ 8- misol ============================

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 17, score: 88, status: 'active' }
// ];

// function arr(students) {
//   return students.every(student => student.age >= 18);
// }

// const result = arr(students);
// console.log(result);

// ============================ 9- misol ============================

// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function result(students) {
//   return students.some(student => student.score > 90);
// }

// const arr = result(students);
// console.log(arr);

// ============================ 10 - misol ============================

// const students1 = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// const students2 = [
//   { name: 'Charlie', age: 23, score: 88, status: 'active' },
//   { name: 'David', age: 21, score: 90, status: 'inactive' }
// ];

// function sum(students1, students2) {
//   const allStudents = students1.concat(students2);
//   return allStudents.some(student => student.score > 90);
// }

// const result = sum(students1, students2);
// console.log(result);

// ============================ 11 - misol ============================

// const students = [
//   { name: "Alice", age: 20, score: 85, status: "active" },
//   { name: "Bob", age: 22, score: 92, status: "inactive" },
//   { name: "Alice", age: 23, score: 88, status: "active" },
// ];
// let result = [];
// students.forEach(function (value, indexForEach) {
//   let isExist = students.find(function(el, indexFine){
//     return el == value && indexFine != indexForEach
//   })
//   if(!isExist) {
//     result.push(value)
//   }
//   console.log(isExist);
// })
// console.log(result);

// ============================ 12 - misol ============================




// ============================ 13 - misol ============================


// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function ball(students) {
//   return students.map(student => student.score);
// }

// const result = ball(students);
// console.log(result);




// ============================ 14 - misol ============================



// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' }
// ];
//  const res = Object.keys(students);
// console.log(res);



// ============================ 15 - misol ============================




// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' }
// ];

// const newStudent = { name: 'Charlie', age: 23, score: 88, status: 'active' };

// function sum(students, newStudent) {
//   return [students, newStudent];
// }

// const result = sum(students, newStudent);
// console.log(result);



// ============================ 16 - misol ============================



// const students = [
//   { name: 'Alice', age: 20, score: 85, status: 'active' },
//   { name: 'Bob', age: 22, score: 92, status: 'inactive' },
//   { name: 'Charlie', age: 23, score: 88, status: 'active' }
// ];

// function removeStudent(students, studentname) {
//   return students.filter(student => student.name !== studentname);
// }

// const res = removeStudent(students, 'Bob');
// console.log(res);



// ============================ 17- misol ============================
// ============================ 18 - misol ============================
// ============================ 19 - misol ============================
// ============================ 20 - misol ============================


//  STRING METODLARI ! 

 