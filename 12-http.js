const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Welcome to our homepage')
		res.end()
	}
	else if (req.url === '/about') {
		res.write('About us')
		res.end()
	}
	else res.end(`
	<h1>ERROR</h1>
	<p>We can't seem to find the page you are looking for</p>
	<a href='/'>Back Home</a>
	`)
})

server.listen(5000)