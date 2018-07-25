const engine = require('whetu-engine')

engine.start()
const player = engine.join()
console.log(player)
console.log('******************')
const state = engine.state(player).then((state) => console.log(state))
