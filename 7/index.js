/* ticket 498: 
    Modify the 'nutrientBreakdown.amountToGoal' translation to take distanceFromGoal instead
    of amountToGoal
*/

export class T {
  static get(key, replaceKeys) {
    return '';
  }
}


const translation1 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })
const translation2 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })
const translation3 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })
const translation4 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })
const translation5 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })