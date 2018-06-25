const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')

const notes = require('./notes.js')

var titleOptions = {
    descibe: 'The note\'s title',
    demand: true,
    alias: 't'
}
var bodyOptions = {
    descibe: 'The note\'s content',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add', 'To add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'To list all notes')
    .command('read', 'To read a note', {
        title: titleOptions
    })
    .command('remove', 'To remove a note by giving title', {
        title: titleOptions
    })
    .help()
    .argv
var command = process.argv[2]
// console.log(`Command : ${command}`)

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note == undefined) {
        console.log('This note is already exist')
    } else {
        notes.logNote(note)
    }
} else if (command === 'list') {
    var noteList = notes.getAllNotes()
    noteList.forEach(element => notes.logNote(element));
} else if (command === 'read') {
    var note = notes.getNote(argv.title)
    if (note === undefined) {
        console.log('This note does not exist')
    } else {
        notes.logNote(note)
    }
} else if (command === 'remove') {
    var success = notes.removeNote(argv.title)
    console.log(success ? 'Note was remove' : 'Note not exists')
} else {
    console.log('Command not recognized')
}