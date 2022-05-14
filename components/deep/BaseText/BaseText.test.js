import { render, screen, fireEvent } from '@testing-library/vue'
import BaseText from './BaseText.vue'

describe('BaseText', () => {
  it('Display text', () => {
    render(BaseText, {
      props: {
        color: 'rainbow',
        text: 'MyText',
        size: 'large',
      },
    })

    screen.getByText('MyText')
  })
})
