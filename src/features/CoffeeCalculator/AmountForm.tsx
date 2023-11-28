import css from './AmountForm.module.scss'

export default function AmountForm({ amount, updateAmount }) {
  return (
    <div>
      <div>
        <label htmlFor="coffee">Coffee Amount</label>
        <input
          id="coffee"
          type="number"
          value={amount.coffee}
          onChange={(e) => updateAmount('getByCoffee', e.target.valueAsNumber)}
        />
      </div>

      <div>
        <label htmlFor="sugar">Sugar Amount</label>
        <input
          id="sugar"
          type="number"
          value={amount.sugar}
          onChange={(e) => updateAmount('getBySugar', e.target.valueAsNumber)}
        />
      </div>

      <div>
        <label htmlFor="creamer">Creamer Amount</label>
        <input
          id="creamer"
          type="number"
          value={amount.creamer}
          onChange={(e) => updateAmount('getByCreamer', e.target.valueAsNumber)}
        />
      </div>

      <div>
        <label htmlFor="water">Water Amount</label>
        <input
          id="water"
          type="number"
          value={amount.water}
          onChange={(e) => updateAmount('getByWater', e.target.valueAsNumber)}
        />
      </div>

      <div>
        <label htmlFor="ingredients">Ingredients Amount</label>
        <input
          id="ingredients"
          type="number"
          value={amount.ingredients}
          onChange={(e) => updateAmount('getByIngredients', e.target.valueAsNumber)}
        />
      </div>

      <div>
        <label htmlFor="total">Total Amount</label>
        <input
          id="total"
          type="number"
          value={amount.total}
          onChange={(e) => updateAmount('getByTotal', e.target.valueAsNumber)}
        />
      </div>
    </div>
  )
}
