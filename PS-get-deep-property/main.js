import getDeepProperty from './getDeepProperty';

const exampleObject = {
  person: {
    name: {
      first: 'FirstName',
      middleInitial: 'I',
      lastName: 'LastName',
    },
  },
};

const path = 'person.name.lastName';

getDeepProperty(exampleObject, path);
