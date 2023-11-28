import AmountForm from './AmountForm'
import RatioForm from './RatioForm'
import useCoffeeCalculator from './useCoffeeCalculator'
import css from './index.module.scss'

export default function index() {
  const calculator = useCoffeeCalculator()
  console.log(calculator.amount)

  return (
    <div>
      <RatioForm
        ratio={calculator.ratio}
        updateRatio={calculator.updateRatio}
      />

      <AmountForm
        amount={calculator.amount}
        updateAmount={calculator.updateAmount}
      />
    </div>
  )
}
