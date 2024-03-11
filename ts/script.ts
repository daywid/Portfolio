const a: string | number = 1;
console.log(`a is of type ${typeof a} and its value is ${a}`);
if (typeof a === 'number') {
  const doubled: number = a * 2;
  console.log(`doubled is of type ${typeof doubled} and its value is ${doubled}`);
} else {
  console.log('a is not a number');
}

