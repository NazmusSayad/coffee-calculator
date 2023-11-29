import InputNumber from '$components/InputNumber'
import css from './RatioForm.module.scss'

export default function RatioForm({ ratio, updateRatio }: any) {
  return (
    <div className={css.content}>
      <div className={css.item}>
        <p>Coffee Ratio:</p>
        <InputNumber
          input={{ min: 0 }}
          value={ratio.coffeeRatio}
          onChange={(value) => updateRatio('coffeeRatio', value)}
        />
      </div>

      <div className={css.item}>
        <p>Sugar Ratio:</p>
        <InputNumber
          input={{ min: 0 }}
          value={ratio.sugarRatio}
          onChange={(value) => updateRatio('sugarRatio', value)}
        />
      </div>

      <div className={css.item}>
        <p>Creamer Ratio:</p>
        <InputNumber
          input={{ min: 0 }}
          value={ratio.creamerRatio}
          onChange={(value) => updateRatio('creamerRatio', value)}
        />
      </div>

      <div className={css.item}>
        <p>Water Ratio:</p>
        <InputNumber
          input={{ min: 0 }}
          value={ratio.waterRatio}
          onChange={(value) => updateRatio('waterRatio', value)}
        />
      </div>

      <div className={$cn(css.item, css.singleLine)}>
        <p>Super Accurate:</p>
        <input
          className={css.checkbox}
          type="checkbox"
          value={ratio.superAccurate}
          defaultChecked={ratio.superAccurate}
          onChange={(ev) =>
            updateRatio('superAccurate', Boolean(ev.target.checked))
          }
        />
      </div>
    </div>
  )
}
