/**
 * Basic implementation of deep property
 *
 * @param {Object} obj object to perform search against
 * @param {string} path path how to find property
 * @param {string} separator path separator default value is '.'
 */
function getDeepProperty(obj, path, separator = '.') {
  path = splitPath(path, separator);

  try {
    return path.reduce((acc, cur) => {
      return acc[cur]; //?
    }, obj);
  } catch {
    return undefined;
  }
}

function splitPath(path, separator = '.') {
  return path.split(separator);
}

export default getDeepProperty;
