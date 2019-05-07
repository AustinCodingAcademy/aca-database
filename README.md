### Intro
We need to build a web server that is capable of saving things forever. 
Use the file system to save data from http messages in json format.
Let's code our own database in database.js.
Look at db.json and understand the json structure.
Remember how to use node file system.

### Find
* Use fs readFile to get the contents of db.json.
* Use JSON.parse to turn the string contents into an object
* Pay attention to what this object looks like
* Use the `type` argument to get the proper key/value which is an array
* Find the object from the array that has the id value equal to the `id` argument
* Call the doneCallback function passing in the object you found.

### Create
* Use fs readFile to get the contents of db.json.
* Use JSON.parse to turn the string contents into an object
* Pay attention to what this object looks like
* Use the `type` argument to get the proper key/value which is an array
* Push the data to the array
* Use JSON.stringify to turn the object back into a string
* Use fs writeFile to save the string back into the file db.json.
* Call the doneCallback function, passing in `data`
