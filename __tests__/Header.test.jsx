import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from "../components/Header";

describe('Header', () => {
    it('renders a heading', () => {
        render(<Header  isOpened={false} toggleDrawer={() => {}}/>)

        const heading = screen.getByText('¡Hola! / Hello!')

        expect(heading).toBeInTheDocument()
    })
})
