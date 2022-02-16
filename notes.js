const   fs = require('fs');
const   chalk = require('chalk');

const   addNotes = (title, body) => {
    const   notes = catchNodes();
    const   duplicateNote = notes.find((note) => note.title === title);
    if (!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        fs.writeFileSync('notes.json', JSON.stringify(notes));
        console.log(chalk.green("Note has been added"));
    }
    else
        console.log(chalk.red("This note exist already"));
}

const   removeNote = (title) => {
    const   notes = catchNodes();
    const   newNote = notes.filter((note) => note.title !== title);
    if (newNote.length !== notes.length)
    {
        fs.writeFileSync('notes.json', JSON.stringify(newNote));
        console.log(chalk.green("note has been removed"));
    }
    else
        console.log(chalk.red("Note doesnt exist"));
}

const   catchNodes = () => {
    try {
        const   notes = fs.readFileSync('notes.json');
        const   toString = notes.toString();
        return JSON.parse(toString);
    } catch (e){
        return []
    }
}

const   listNotes = () => {
    const   notes = catchNodes();
    notes.forEach(element => {
        console.log(chalk.black("Your note is : ") + chalk.green(element.title));
    });
}

const   readNotes = (title) => {
    const   notes = catchNodes();
    const   readNotes = notes.find((note) => note.title === title);
    if (readNotes)
        console.log(chalk.yellow("Reading note with the title : ") + chalk.green(readNotes.title) + chalk.yellow(" as body :") + chalk.green(readNotes.body));
    else
        console.log(chalk.red("Title has not been found"));
}

module.exports = {
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
};