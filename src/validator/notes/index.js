/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable quotes */
/* eslint-disable indent */
const InvariantError = require("../../exceptions/InvariantError");
const { NotePayloadSchema } = require("./schema");

const NotesValidator = {
    validateNotePayload: (payload) => {
        const validationResult = NotePayloadSchema.validate(payload);
        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
    },
};

module.exports = NotesValidator;