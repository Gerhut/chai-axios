# chai-axios
Testing HTTP server using chai &amp; axios, view [axiosist](https://github.com/Gerhut/axiosist) for more info.

[![Build Status](https://travis-ci.org/Gerhut/chai-axios.svg?branch=master)](https://travis-ci.org/Gerhut/chai-axios)
[![Coverage Status](https://coveralls.io/repos/github/Gerhut/chai-axios/badge.svg?branch=master)](https://coveralls.io/github/Gerhut/chai-axios?branch=master)
[![dependencies Status](https://david-dm.org/Gerhut/chai-axios/status.svg)](https://david-dm.org/Gerhut/chai-axios)
[![devDependencies Status](https://david-dm.org/Gerhut/chai-axios/dev-status.svg)](https://david-dm.org/Gerhut/chai-axios?type=dev)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Install

    $ npm install --save-dev chai-axios

## Usage

```JavaScript
const express = require('express')
const app = require('app')

app.get('/', (req, res) => res.send(req.get('host')))


const chai = require('chai')
const chaiAxios = require('chai-axios')
chai.use(chai)
axiosist(app).get('/').then(response => {
    chai.assert.strictEqual('127.0.0.1:5xxxxx', response.data)
})
axiosist(app).get('http://www.example.com:3912/').then(response => {
    chai.assert.strictEqual('www.example.com:3912', response.data)
})
```

## License

MIT
