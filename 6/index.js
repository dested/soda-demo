/* ticket 112: 
    Rename item1 in takeData, but make sure it doesnt destroy the app irrecoverably 
*/

function takeData({ item1, item2 }) {
  return item1.a + item2.b;
}


takeData({ item1: { a: 4 }, item2: { b: 12 } })