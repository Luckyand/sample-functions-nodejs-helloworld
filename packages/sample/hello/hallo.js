function main(args) {
    let name = args.name || 'stranger'
    let greeting = 'Hallo ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }

exports.main = main
