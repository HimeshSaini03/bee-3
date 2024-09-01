// Microsoft Windows [Version 10.0.22631.4112]
// (c) Microsoft Corporation. All rights reserved.

// C:\Users\LC>show dbs
// 'show' is not recognized as an internal or external command,
// operable program or batch file.

// C:\Users\LC>mongosh
// Current Mongosh Log ID: 66d00c7681ac3678922710bb
// Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.0
// Using MongoDB:          7.0.14
// Using Mongosh:          2.3.0

// For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

// ------
//    The server generated these startup warnings when booting
//    2024-08-29T09:37:48.153+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
// ------

// test> show dbs
// admin   40.00 KiB
// config  84.00 KiB
// local   72.00 KiB
// test    40.00 KiB
// test> use Himesh
// switched to db Himesh
// Himesh>  db.myCollection.insertOne({x:1})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d00cf881ac3678922710bc')
// }
// Himesh> db.myCollection.insertOne({date: ISODate()})
// {
//   acknowledged: true,
//   insertedId: ObjectId('66d00d1681ac3678922710bd')
// }
// Himesh> db.myCollection.find()
// [
//   { _id: ObjectId('66d00cf881ac3678922710bc'), x: 1 },
//   {
//     _id: ObjectId('66d00d1681ac3678922710bd'),
//     date: ISODate('2024-08-29T05:54:30.001Z')
//   }
// ]
// Himesh> db.myCollection.insertMany([
//     ...   { name: "Himesh saini" },
//     ...   { rollNo: "122" },
//     ...   { hobby: "Football" },
//     ...   { Course: "CSE" }
//     ... ])
//     {
//       acknowledged: true,
//       insertedIds: {
//         '0': ObjectId('66d0104e81ac3678922710be'),
//         '1': ObjectId('66d0104e81ac3678922710bf'),
//         '2': ObjectId('66d0104e81ac3678922710c0'),
//         '3': ObjectId('66d0104e81ac3678922710c1')
//       }
//     }
//     Himesh> db.myCollection.find()
//     [
//       { _id: ObjectId('66d00cf881ac3678922710bc'), x: 1 },
//       {
//         _id: ObjectId('66d00d1681ac3678922710bd'),
//         date: ISODate('2024-08-29T05:54:30.001Z')
//       },
//       { _id: ObjectId('66d0104e81ac3678922710be'), name: 'Himesh saini' },
//       { _id: ObjectId('66d0104e81ac3678922710bf'), rollNo: '122' },
//       { _id: ObjectId('66d0104e81ac3678922710c0'), hobby: 'Football' },
//       { _id: ObjectId('66d0104e81ac3678922710c1'), Course: 'CSE' }
//     ]
//     Himesh> db.myCollection.find().pretty()
//     [
//       { _id: ObjectId('66d00cf881ac3678922710bc'), x: 1 },
//       {
//         _id: ObjectId('66d00d1681ac3678922710bd'),
//         date: ISODate('2024-08-29T05:54:30.001Z')
//       },
//       { _id: ObjectId('66d0104e81ac3678922710be'), name: 'Himesh saini' },
//       { _id: ObjectId('66d0104e81ac3678922710bf'), rollNo: '122' },
//       { _id: ObjectId('66d0104e81ac3678922710c0'), hobby: 'Football' },
//       { _id: ObjectId('66d0104e81ac3678922710c1'), Course: 'CSE' }
//     ]
