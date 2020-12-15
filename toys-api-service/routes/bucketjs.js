const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = require('json-schema-faker');
jsf.extend('faker', () => faker);
jsf.extend('chance', () => chance);

var schema = {
	"type": "array",
	"items": {
		type: 'object',
		properties: {
			name: {
				type: 'string',
				faker: 'name.firstName'
			},
			price: {
				type: 'integer',
				minimum: 5,
				maximum: 99,
				exclusiveMinimum: false
			},
			country: {
				type: 'string',
				faker: 'address.country'
			}
		},
		required: ['name', 'price', 'country']
	}
};

/* GET users listing. */
router.get('/', (req, res) => {
	jsf.resolve(schema).then(sample => {
		res.send(sample);
	});
});

module.exports = router;
