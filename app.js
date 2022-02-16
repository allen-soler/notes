const   yargs = require('yargs');
const   notes = require('./notes.js')
yargs.command({
    command: 'add',
    describe: 'This is the title',
    builder: {
        title : {
            describe: 'Adding title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Adding body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove this title',
    builder: {
        title : {
            describe: 'Removing title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing the notes',
    handler: () => {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read',
    describe: 'reading the notes title and body',
    builder: {
        title: {
            describe: "Reading title name",
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) =>{
        notes.readNotes(argv.title);
    }
})

yargs.parse();