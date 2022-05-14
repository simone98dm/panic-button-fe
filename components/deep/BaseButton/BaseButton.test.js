import { render, screen, fireEvent } from '@testing-library/vue'
import BaseButton from './BaseButton.vue'

describe('BaseButton', () => {
  it('Display button', () => {
    render(BaseButton, {
      props: {
        color: 'rainbow',
        label: 'MyButton',
      },
    })

    const button = screen.getByText('MyButton')
    fireEvent.click(button)
  })
})
