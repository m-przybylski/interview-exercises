# PS-get-deep-property exercise

## Instructions

- Using vanilla javascript, create a function that gets the value of a property at a given path
- Example:
  - If given the object: {person: {name: {first: 'FirstName', middleInitial: 'I', lastName: 'LastName''}}}
  - And given the path: 'person.name.lastName'
  - The output would be: 'LastName'
  * Note this is just a simple example. Your function should work with any object that includes any value.
- After you complete the exercise, provide any notes on your code below such as how to run your example

## Candidate Notes:

```
getDeepProperty(object, path)
```

### arguments
* object (Object) The object to perform search against
* path (string) The path to property. Should be comma separated.

### example
```
import getDeepProperty from './getDeepProperty';

const exampleObject = {
  person: {
    name: {
      first: 'FirstName',
      middleInitial: 'I',
      lastName: 'LastName'
    },
  },
};

const path = 'person.name.lastName';

getDeepProperty(exampleObject, path);

```