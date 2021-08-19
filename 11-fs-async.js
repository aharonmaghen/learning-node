const { readFile, writeFile } = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
	if (err) {
		console.log(err)
		return
	}
	const firstContent = result;
	readFile('./content/first.txt', 'utf8', (err, result) => {
		if (err) {
			console.log(err)
			return
		}
		const secondContent = result
		writeFile('./content/result-async.txt', `Here is the result: ${firstContent}, ${secondContent}\n`, (err, result) => {
			if (err) {
				console.log(err)
				return
			}
			console.log('done with this task')
		})
	})

})
console.log('starting the next task')