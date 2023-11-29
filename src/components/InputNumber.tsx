import { ComponentProps, useState } from 'react'
import css from './InputNumber.module.scss'

type InputProps = ComponentProps<'input'>

export default function InputNumber(
  props: { input?: InputProps } & {
    value: number
    onChange: (value: number) => void
  }
) {
  const [hasTrailingStop, setHasTrailingStop] = useState(false)
  const value = props.value

  function setValue(value: number) {
    if (props.input?.min != null && value < +props.input.min) {
      value = +props.input.min
    }

    if (props.input?.max != null && value > +props.input.max) {
      value = +props.input.max
    }

    props.onChange(value)
  }

  function plus() {
    setValue(value + 1)
  }

  function minus() {
    setValue(value - 1)
  }

  return (
    <div className={$cn(css.container)}>
      <button className={$cn(css.control, css.left)} onClick={minus}>
        <div className={css.bar} />
      </button>

      <input
        {...props.input}
        type="text"
        value={(value || 0).toString() + (hasTrailingStop ? '.' : '')}
        className={$cn(css.input)}
        onChange={(event) => {
          const newValue = event.target.value.match(/-?\d*\.?\d+/)?.[0] ?? ''
          setValue(+newValue)
          setHasTrailingStop(false)
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowUp') {
            event.preventDefault()
            plus()
          }

          if (event.key === 'ArrowDown') {
            event.preventDefault()
            minus()
          }

          if (event.key === '.' && !(event.target as any).value.includes('.')) {
            event.preventDefault()
            setHasTrailingStop(true)
          } else {
          }
        }}
      />

      <button className={$cn(css.control, css.right)} onClick={plus}>
        <div className={css.bar} />
        <div className={css.bar} />
      </button>
    </div>
  )
}
