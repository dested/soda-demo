/* ticket 498: 
    Modify the 'nutrientBreakdown.amountToGoal' translation to take distanceFromGoal instead
    of amountToGoal
*/

export class Translations {
  'nutrientBreakdown.copilot.recipeSection': {};
  'nutrientBreakdown.copilot.recentSources': {};
  'nutrientBreakdown.dailyValue': { nutrientName: any; nutrientGoal: any; unit: any };
  'nutrientBreakdown.amountToGoal': { amountToGoal: any; unit: any };
  'nutrientBreakdown.metDailyValue': { nutrientName: any; nutrientGoal: any; unit: any };
}
export class T {
  static get<K extends keyof Translations, P extends Translations[K]>(key: K, replaceKeys: P): string {
    return '';
  }
}


const translation1 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })
const translation2 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })
const translation3 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })
const translation4 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })
const translation5 = T.get('nutrientBreakdown.amountToGoal', { amountToGoal: 12, unit: 'foo' })