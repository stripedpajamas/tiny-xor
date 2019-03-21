# tiny-xor

a lot of times i want to see if one of two or more variables evaluates to true based on some function but not all of them and not none of them. that's xor, but sometimes writing xor logic inline muddies things up.

## install
```bash
npm i tiny-xor
```

## use
```javascript
const xor = require('tiny-xor')

function isTeen (age) {
  return age > 12 && age < 20
}

// wanting to see if one person is a teenager
let bob = 12
let harry = 13
let john = 14
let sarah = 20

console.log(xor([bob, harry, john, sarah], isTeen)) // false

console.log(xor([bob, harry, sarah], isTeen)) // true

console.log(xor([bob, sarah], isTeen)) // false

```

## license
MIT