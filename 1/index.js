/* ticket 1738: 
     the area field must go away, the area will now be derived from its sides
*/

const square = {area: 100};

function processItems() {
  const area = square.area;
  const block = square;
  const twoArea = block.area * 2
  return twoArea * 5
}