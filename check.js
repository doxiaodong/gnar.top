const { list, black } = require('./list')

list.forEach((item) => {
  if (black.some((b) => b === item[0])) {
    throw new Error(`${item[0]} is in black list!!`)
  }
})

