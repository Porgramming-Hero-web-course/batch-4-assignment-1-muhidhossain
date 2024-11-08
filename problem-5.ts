{
  // a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.
  const getProperty = <T, K extends keyof T>(
    object: T,
    propertyName: K
  ): T[K] => {
    return object[propertyName];
  };

  const person = { name: 'Alice', age: 30 };
  const name = getProperty(person, 'name');
  const age = getProperty(person, 'age');
  console.log(name);
  console.log(age);
  //
}
