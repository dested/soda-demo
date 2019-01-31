/* ticket 112: 
    Rename item1 in takeData, but make sure it doesnt destroy the app irrecoverably 
*/

interface TakeDataRequest { item1: { a: number }, item2: { b: number } }

function takeData({ item1, item2 }: TakeDataRequest) {
  return item1.a + item2.b;
}


takeData({ item1: { a: 4 }, item2: { b: 12 } })