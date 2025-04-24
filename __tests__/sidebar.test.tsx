import { render, screen, fireEvent } from "@testing-library/react"
import Sidebar from "@/components/sidebar"

jest.mock("framer-motion", () => ({
  motion: {
    li: ({ children, ...props }: any) => <li {...props}>{children}</li>,
  },
}))

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}))

describe("Sidebar", () => {
  const mockSetOpen = jest.fn()

  beforeEach(() => {
    render(<Sidebar open={true} setOpen={mockSetOpen} />)
  })

  it("renders the logo and title", () => {
    expect(screen.getByText("techrity")).toBeInTheDocument()
  })

  it("renders all menu items", () => {
    expect(screen.getByText("Dashboard")).toBeInTheDocument()
    expect(screen.getByText("Programs")).toBeInTheDocument()
    expect(screen.getByText("Activities")).toBeInTheDocument()
    expect(screen.getByText("Users")).toBeInTheDocument()
    expect(screen.getByText("Forums")).toBeInTheDocument()
    expect(screen.getByText("Finances")).toBeInTheDocument()
    expect(screen.getByText("Rewards")).toBeInTheDocument()
    expect(screen.getByText("Analytics")).toBeInTheDocument()
    expect(screen.getByText("Settings")).toBeInTheDocument()
    expect(screen.getByText("Log Out")).toBeInTheDocument()
  })

  it("renders the help section", () => {
    expect(screen.getByText("Got some questions, enquiries or need help?")).toBeInTheDocument()
    expect(screen.getByText("Get Mently Help Desk Here")).toBeInTheDocument()
  })

  it("renders the switch to classic mode toggle", () => {
    expect(screen.getByText("Switch to Classic Mode")).toBeInTheDocument()
  })

  it("calls setOpen when close button is clicked", () => {
    fireEvent.click(screen.getByLabelText("Close sidebar"))
    expect(mockSetOpen).toHaveBeenCalledWith(false)
  })
})
