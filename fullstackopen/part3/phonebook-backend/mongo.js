const mongoose = require("mongoose");

const password = process.argv[2];
const url = `mongodb+srv://Hasan:${password}@phonebook-db.zksbtmf.mongodb.net/?retryWrites=true&w=majority`

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
  });

  const person = mongoose.model('person', personSchema)

    mongoose.connect(url)
        .then(()=> {
         console.log('datebase conected!')

         if (process.argv.length === 3) {
            return person.find({})
          } else if (process.argv.length === 5) {
            const newName = process.argv[3]
            const newNumber = process.argv[4]
            const newPerson = new person({ 
                name: newName,
                number: newNumber,
            })
           return newPerson.save()
            // return new Promise.resolve()
        }
     }).then(data => {
        if (process.argv.length === 3){
            console.log(`phonebook:`)
            data.forEach(person =>{
                console.log(`${person.name} ${person.number}`)
            })
        } else if (process.argv.length === 5){
            console.log(`added ${data.name} number ${data.number} phonebook`)
        }
         mongoose.connection.close()
     })
