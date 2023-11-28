import css from './RatioForm.module.scss'

export default function RatioForm({ ratio, updateRatio }: any) {
  return (
    <div>
      <div>
        <label htmlFor="coffeeRatio">Coffee Ratio</label>
        <input
          id="coffeeRatio"
          type="number"
          value={ratio.coffeeRatio}
          onChange={(ev) => updateRatio('coffeeRatio', ev.target.valueAsNumber)}
        />
      </div>

      <div>
        <label htmlFor="sugarRatio">Sugar Ratio</label>
        <input
          id="sugarRatio"
          type="number"
          value={ratio.sugarRatio}
          onChange={(ev) => updateRatio('sugarRatio', ev.target.valueAsNumber)}
        />
      </div>

      <div>
        <label htmlFor="creamerRatio">Creamer Ratio</label>
        <input
          id="creamerRatio"
          type="number"
          value={ratio.creamerRatio}
          onChange={(ev) =>
            updateRatio('creamerRatio', ev.target.valueAsNumber)
          }
        />
      </div>

      <div>
        <label htmlFor="waterRatio">Water Ratio</label>
        <input
          id="waterRatio"
          type="number"
          value={ratio.waterRatio}
          onChange={(ev) =>
            updateRatio('waterRatio', ev.target.valueAsNumber)
          }
        />
      </div>
    </div>
  )
}
