'use strict'

const express = require('express')
const router = express.Router()

const Foo = require('../models/foo')

router.post('/', (req, res, next) => {
  if (!req.body.bar || !req.body.baz) {
    res.status(422).json({ code: 'validation error' })
    return
  }

  const foo = new Foo(req.body)

  foo.save()
    .then(() => {
      res.json(foo)
    })
    .catch(next)
})

module.exports = router
