import CoffeeCalculator from '$features/CoffeeCalculator'
import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState(0)

  return (
    <>
      <CoffeeCalculator />
    </>
  )
}

export default App
