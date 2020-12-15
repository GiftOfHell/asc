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
			name1: {
				type: 'string',
				faker: 'name.firstName'
			},
			name2: {
				type: 'string',
				faker: 'name.firstName'
			},
			name3: {
				type: 'string',
				faker: 'name.firstName'
			},
			price1: {
				type: 'integer',
				minimum: 5,
				maximum: 99,
				exclusiveMinimum: false
			},
			price2: {
				type: 'integer',
				minimum: 5,
				maximum: 99,
				exclusiveMinimum: false
			},
			price3: {
				type: 'integer',
				minimum: 5,
				maximum: 99,
				exclusiveMinimum: false
			},
			country1: {
				type: 'string',
				faker: 'address.country'
			},
			country2: {
				type: 'string',
				faker: 'address.country'
			},
			country3: {
				type: 'string',
				faker: 'address.country'
			}
		},
		required: ['name1', 'name2', 'name3', 'price1', 'price2', 'price3', 'country1', 'country2', 'country3']
	}
};

/* GET users listing. */
router.get('/', (req, res) => {
	jsf.resolve(schema).then(sample => {
		res.send(sample);
	});
});

module.exports = router;
