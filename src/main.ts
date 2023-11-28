import getClassName from 'get-classnames'

window.$cn = getClassName

declare global {
  var $cn: typeof getClassName
}

import './index'
