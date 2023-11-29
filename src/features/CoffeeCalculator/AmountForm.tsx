import InputNumber from '$components/InputNumber'
import css from './AmountForm.module.scss'

function toFixed(number: number) {
  return +number.toFixed(3)
}

export default function AmountForm({ amount, updateAmount }) {
  return (
    <div className={css.content}>
      <div className={css.item}>
        <p>Coffee:</p>
        <InputNumber
          input={{ min: 0 }}
          value={toFixed(amount.coffee)}
          onChange={(value) => updateAmount('getByCoffee', value)}
        />
      </div>

      <div className={css.item}>
        <p>Sugar:</p>
        <InputNumber
          input={{ min: 0 }}
          value={toFixed(amount.sugar)}
          onChange={(value) => updateAmount('getBySugar', value)}
        />
      </div>

      <div className={css.item}>
        <p>Creamer:</p>
        <InputNumber
          input={{ min: 0 }}
          value={toFixed(amount.creamer)}
          onChange={(value) => updateAmount('getByCreamer', value)}
        />
      </div>

      <div className={css.item}>
        <p>Water:</p>
        <InputNumber
          input={{ min: 0 }}
          value={toFixed(amount.water)}
          onChange={(value) => updateAmount('getByWater', value)}
        />
      </div>

      <div className={css.item}>
        <p>Ingredients:</p>
        <InputNumber
          input={{ min: 0 }}
          value={toFixed(amount.ingredients)}
          onChange={(value) => updateAmount('getByIngredients', value)}
        />
      </div>

      <div className={css.item}>
        <p>Total:</p>
        <InputNumber
          input={{ min: 0 }}
          value={toFixed(amount.total)}
          onChange={(value) => updateAmount('getByTotal', value)}
        />
      </div>
    </div>
  )
}
