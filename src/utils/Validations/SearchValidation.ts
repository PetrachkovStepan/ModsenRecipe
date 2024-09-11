import * as yup from 'yup'

export const searchSchema = yup.object().shape({
    searchLine: yup.string().min(3).max(15).required(),
})