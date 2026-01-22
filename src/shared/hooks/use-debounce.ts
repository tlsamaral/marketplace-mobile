import { useEffect, useState } from 'react'

export const useDebounce = <T>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearInterval(timeoutId)
  }, [value, delay])

  return debouncedValue
}
