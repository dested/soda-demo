/* ticket 4293: 
     getItems must now return null instead of the default value
*/

function getItems(id: string) {
  if (id === 'shoes') {
    return '1,2,3';
  }
  return '1,2';
}


var items = getItems('shoes')
const firstItem = items.split(',')[0];