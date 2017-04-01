import _ from 'lodash/fp';

function splitValue(str) {
  return str.split(' ');
}

export default function calcPolonesa(value) {
  const splittedValues = splitValue(value);
  const operator = _.last(splittedValues);
  const values = _.flow(
    _.reverse,
    _.tail
  )(splittedValues);

  return values.reduce((acc, a) => eval(`${acc} ${operator} ${a}`));
}

console.log(calcPolonesa('5 5 5 5 +'));
