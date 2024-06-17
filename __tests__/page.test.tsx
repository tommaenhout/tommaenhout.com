import {  test, expect } from 'vitest'
import { render, screen, } from '@testing-library/react'
import Page from '../src/app/page'
 
test('Title renders', () => {
  render(<Page />)
  const text = screen.getByText('Website under construction!')
  expect(text).toBeDefined()
})
