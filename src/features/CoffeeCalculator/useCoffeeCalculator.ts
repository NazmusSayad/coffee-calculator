import { useEffect, useMemo, useState } from 'react'
import CoffeeCalculator, {
  CoffeeCalculatorOutputOptions,
  CoffeeResult,
} from 'coffee-calc'

export default function useCoffeeCalculator() {
  const [ratio, setRatio] = useState<CoffeeCalculatorOutputOptions>({
    coffeeRatio: 1,
    sugarRatio: 1,
    creamerRatio: 1,
    waterRatio: 24,
    superAccurate: true,
  })

  const calculator = useMemo(() => new CoffeeCalculator(ratio), [ratio])
  const [amount, setAmount] = useState<CoffeeResult>({
    coffee: 0,
    sugar: 0,
    creamer: 0,
    water: 0,
    ingredients: 15,
    total: 0,
  })

  useEffect(() => {
    const result = calculator.getByIngredients(amount.ingredients)
    setAmount(result)
  }, [ratio])

  function updateAmount(type: keyof typeof calculator, by: number) {
    const result = calculator[type](by)
    setAmount(result)
  }

  function updateRatio(type: keyof typeof ratio, by: number | boolean) {
    setRatio((prev) => ({
      ...prev,
      [type]: typeof by === 'number' ? by : by,
    }))
  }

  return { ratio, amount, updateAmount, updateRatio }
}
