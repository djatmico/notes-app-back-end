/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
const Joi = require('joi');

const NotePayloadSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
});

module.exports = { NotePayloadSchema };