import { render, screen, fireEvent } from "@testing-library/react"
import WelcomeHeader from "@/components/welcome-header"

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

describe("WelcomeHeader", () => {
  const mockOnManageWidgets = jest.fn()

  beforeEach(() => {
    render(<WelcomeHeader onManageWidgets={mockOnManageWidgets} />)
  })

  it("renders the welcome message correctly", () => {
    expect(screen.getByText("Welcome Aboard, Blessing 👋")).toBeInTheDocument()
    expect(screen.getByText("We're thrilled to have you join Techrity Team!")).toBeInTheDocument()
  })

  it("renders the buttons correctly", () => {
    expect(screen.getByText("Manage Widgets")).toBeInTheDocument()
    expect(screen.getByText("Update Profile")).toBeInTheDocument()
  })

  it("calls onManageWidgets when Manage Widgets button is clicked", () => {
    fireEvent.click(screen.getByText("Manage Widgets"))
    expect(mockOnManageWidgets).toHaveBeenCalledTimes(1)
  })
})
