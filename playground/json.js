// var obj = {
//     name: 'Saint',
//     age: 24
// }

// var stringObj = JSON.stringify(obj)
// console.log(stringObj)

// var personString = '{"name": "Tachakorn", "age": 24}'
// var personObj = JSON.parse(personString)

// console.log(personObj)

const fs = require('fs')

var originalNote = {
    title: 'Some title',
    body: 'Content'
}

var originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json',originalNoteString)

var notesString  = fs.readFileSync('notes.json')
var notes = JSON.parse(notesString)

console.log(notes.title)