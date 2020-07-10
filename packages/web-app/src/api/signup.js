import axios from 'axios'
import _Joi from '@hapi/joi'
import { validator } from 'cpf-cnpj-validator'

const Joi = _Joi.extend(validator)

const userSchema = Joi.object({
  name: Joi.string().max(30).required(),
  cpf: Joi.document().cpf().required(),
  email: Joi.string().email({ tlds: {allow: false} }).required(),
  password: Joi.string().required()
})

export const createUser = async (user) => {
  const { error, value } = userSchema.validate(user, { abortEarly: false })

  if (error) {
    return { error }
  }

  const resp = await axios.post('http://localhost:5000/users', value)
  return resp
}
