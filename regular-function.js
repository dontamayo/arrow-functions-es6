console.log('Regular functions using Higher order Functions');

 const dragonEvents = [
   { type: 'attack', value: 12,  target: 'player-dorkman' },
   { type: 'yawn', vlaue: 40 },
   { type: 'eat', target: 'horse' },
   { type: 'attack', value: 23, target: 'player-fluffykins' },
   { type: 'attack', value:12, target: 'player-dorkman' },
 ]

const totalDamageOnDorkman = dragonEvents
.filter(function(event){
  return event.type === 'attack'
})

.filter(function(event){
  return  event.target === 'player-dorkman';
})
.map(function(event){
  return event.value;
})
.reduce(function(prev, value){
  return (prev || 0) + value;
});
console.log('totalDamageOnDorkman', totalDamageOnDorkman);
