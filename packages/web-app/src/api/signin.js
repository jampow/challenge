import Joi from '@hapi/joi'
import axios from './_config'
import { simplifyErrorObj } from './common'

const userSchema = Joi.object({
  email: Joi.string().email({ tlds: {allow: false} }).required(),
  password: Joi.string().required()
})

export const doLogin = async (cred) => {
  const { error, value } = userSchema.validate(cred, { abortEarly: false })

  if (error) {
    return { error: simplifyErrorObj(error) }
  }

  return await axios.post('/login', value)
}