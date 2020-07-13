import React, { useState } from 'react'
import { AsyncTypeahead } from 'react-bootstrap-typeahead'
import { debounce } from 'throttle-debounce'
import { searchProduct } from '../../api/product'

const DEBOUNCE_TIMEOUT = 500

export default ({ onChange }) => {
  const [ options, setOptions ] = useState([])
  const [ loading, setLoading ] = useState(false)

  const debouncedSeach = debounce(DEBOUNCE_TIMEOUT, async (query) => {
    const { data } = await searchProduct(query)
    setOptions(data)
    setLoading(false)
  })

  const handleQuerySearch = value => {
    setLoading(true)
    debouncedSeach(value)
  }

  const labelKeyFormater = ({ code, name, price}) => `${code} - ${name} - ${price}`

  return (
    <AsyncTypeahead
      id="searchQueryInput"
      isLoading={loading}
      minLength={2}
      labelKey={labelKeyFormater}
      onSearch={handleQuerySearch}
      options={options}
      onChange={onChange}
    />
  )
}
