import Joi from 'joi'

const postValidator = Joi.object({
    userId: Joi.number().integer().min(1).required(),
    title: Joi.string()
         // .pattern(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,100}$/)
        .min(3)
        .max(100)
        .required()
        .messages({
            // 'string.pattern.base': 'enter more 2 chars',
            'string.min': 'enter more than 3 chars',
            'string.max': 'You entered more than 100 chars',
            'string.required': 'This field have string',
        }),
    body: Joi.string()
        // .pattern(/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{2,100}$/)
        .min(5)
        .required()
        .messages({
            'string.pattern.base': 'enter more 5 chars',
        }),
})

export default postValidator