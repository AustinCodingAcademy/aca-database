### Intro
We need to build a web server that is capable of saving things forever. 
Use the file system to save data from http messages in json format.
Let's code our own database in database.js.
Look at db.json and understand the json structure.
Remember how to use node file system.

### Create
* Use `fs.readFileSync('./db.json', 'utf8')` to get the contents of db.json.
* Use JSON.parse to turn the string contents into an object
* Pay attention to what this object looks like
* Use the `type` argument to get the proper key/value which is an array
* Push the data to the array
* Use JSON.stringify to turn the object back into a string
* Use `fs.writeFileSync('./db.json', JSON.stringify(output))` to save the string back into the file db.json.
* Bonus - figure out how to assign a new id that is reliably 1 more thant the highest id that exists.

### Find
* Use `fs.readFileSync('./db.json', 'utf8')` to get the contents of db.json.
* Use JSON.parse to turn the string contents into an object
* Pay attention to what this object looks like
* Use the `type` argument to get the proper key/value which is an array
* Find the object from the array that has the id value equal to the `id` argument
* return the object you found.

### Find All
* Use `fs.readFileSync('./db.json', 'utf8')` to get the contents of db.json.
* Use JSON.parse to turn the string contents into an object
* Use the `type` argument to get the proper key/value which is an array
* return the array.


### Questions
* What are some of the problems with what we are doing?

