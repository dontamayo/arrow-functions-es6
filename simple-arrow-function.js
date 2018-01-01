console.log('Simplified Arrow Functions');

 const dragonEvents = [
   { type: 'attack', value: 12,  target: 'player-dorkman' },
   { type: 'yawn', vlaue: 40 },
   { type: 'eat', target: 'horse' },
   { type: 'attack', value: 23, target: 'player-fluffykins' },
   { type: 'attack', value:12, target: 'player-dorkman' },
 ]

const reduceTotal = (prev, x) =>  (prev || 0) + x
const totalDamageOnDorkman = dragonEvents

.filter((e) => e.type === 'attack')
.filter((e) =>  e.target === 'player-dorkman')
.map((e) => e.value)
.reduce(reduceTotal)

console.log('totalDamageOnDorkman', totalDamageOnDorkman);
