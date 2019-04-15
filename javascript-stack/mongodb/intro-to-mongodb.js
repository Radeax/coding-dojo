// Create a database called 'my_first_db'.
use my_first_db;

// Create students collection.
db.createCollection("students");

// Each document you insert into this collection should have the following format: ({name: STRING, home_state: STRING, lucky_number: NUMBER, birthday: {month: NUMBER, day: NUMBER, year: NUMBER}})
// Create 5 students with the appropriate info
db.students.insert({name: "Joven Poblete", home_state: "Virginia", lucky_number: 3, birthday: {month: 06, day: 28, year: 1990}});
db.students.insert({name: "Jennifer Huynh", home_state: "Virginia", lucky_number: 15, birthday: {month: 05, day: 17, year: 1995}});
db.students.insert({name: "Arnold Schwarzenegger", home_state: "California", lucky_number: 10, birthday: {month: 07, day: 30, year: 1947}});
db.students.insert({name: "John Doe", home_state: "Washington", lucky_number: 5, birthday: {month: 01, day: 01, year: 2000}});
db.students.insert({name: "Mary Jane", home_state: "DC", lucky_number: 3.5, birthday: {month: 04, day: 20, year: 2014}});

// Get all students.
db.students.find({});

// Retrieve all students who are from California (San Jose Dojo) or Washington (Seattle Dojo).
db.students.find({$or: [ {home_state: "California"}, {home_state: "Washington"} ] } );

// Get all students whose lucky number is:
db.students.find({lucky_number: {$gt:3}}); // greater than 3
db.students.find({lucky_number: {$lte:10}}); // less than or equal to 10
db.students.find({$and: [ {lucky_number: {$gte:1}},{lucky_number: {$lte:9}} ] } ); // between 1 and 9 (inclusive)

// Add a field to each student collection called 'interests' that is an ARRAY.  It should contain the following entries: 'coding', 'brunch', 'MongoDB'. Do this in ONE operation.
db.students.updateMany({},{ $addToSet: { interest: { $each: [ "coding", "brunch", "MongoDB" ] } } });
db.students.update({},{ $addToSet: { interest: { $each: [ "coding", "brunch", "MongoDB" ] } } },{ multi: true }); // Alternative way

// Add some unique interests for each particular student into each of their interest arrays.
db.students.update({name: "Joven Poblete"}, { $push: {interest: "dancing"}});
db.students.update({name: "Jennifer Huynh"}, { $push: {interest: "eating"}});
db.students.update({name: "Arnold Schwarzenegger"}, { $push: {interest: "the pump"}});
db.students.update({name: "John Doe"}, { $push: {interest: "being normal"}});
db.students.update({name: "Mary Jane"}, { $push: {interest: "the outdoors"}});

// Add the interest 'taxes' into someone's interest array.
db.students.update({name: "Arnold Schwarzenegger"}, { $push: {interest: "taxes"}});

// Remove the 'taxes' interest you just added.
db.students.update({name: "Arnold Schwarzenegger"}, { $pop: {interest: 1}});

// Remove all students who are from California.
db.students.remove({home_state: "California"})

// Remove a student by name. 
db.students.remove({name: "Mary Jane"})

// Remove a student whose lucky number is greater than 5 (JUST ONE)
db.students.remove({lucky_number: {$gt:5}}, true)

// Add a field to each student collection called 'number_of_belts' and set it to 0.
db.students.updateMany({}, { $set: { number_of_belts: 0 }});

// Increment this field by 1 for all students in Washington (Seattle Dojo).
db.students.updateMany({home_state: "Washington"}, { $inc: {number_of_belts: 1}});

// Rename the 'number_of_belts' field to 'belts_earned'
db.students.updateMany({}, { $rename: {"number_of_belts": "belts_earned"}});

// Remove the 'lucky_number' field.
db.students.updateMany({}, { $unset: { "lucky_number": "" }});

// Add a 'updated_on' field, and set the value as the current date.
db.students.updateMany({}, { $currentDate: {updated_on: true} });