import React from 'react'

export function useForm(initialFormdata) {
  const [formData, setFormData] = React.useState(initialFormdata)
  const [formErrors, setFormErrors] = React.useState(initialFormdata)

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  return {
    formData,
    formErrors,
    handleChange,
    setFormErrors,
    setFormData,
  }
}