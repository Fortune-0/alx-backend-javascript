#!/usr/bin/env node

/**
 * calculateNumber - accepts two arguments (number) a and b
 * @type can be SUM, SUBTRACT, or DIVIDE (string)
 * @a being the first arguement
 * @b being the second arguement
 */

function calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);

    if (type === 'SUM') {
        return roundedA + roundedB;
    } else if (type === 'SUBTRACT') {
        return roundedA - roundedB;
      } else if (type === 'DIVIDE') {
        if (roundedB === 0) {
          return 'Error';
        }
        return roundedA / roundedB;
      }
    }

module.exports = calculateNumber;