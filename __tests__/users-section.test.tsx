import { render, screen } from "@testing-library/react"
import UsersSection from "@/components/users-section"

jest.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}))

jest.mock("recharts", () => ({
  PieChart: ({ children }: any) => <div data-testid="pie-chart">{children}</div>,
  Pie: ({ children }: any) => <div data-testid="pie">{children}</div>,
  Cell: ({ fill }: any) => <div data-testid="cell" style={{ backgroundColor: fill }}></div>,
  ResponsiveContainer: ({ children }: any) => <div data-testid="responsive-container">{children}</div>,
}))

describe("UsersSection", () => {
  beforeEach(() => {
    render(<UsersSection />)
  })

  it("renders the users section title", () => {
    expect(screen.getByText("Users")).toBeInTheDocument()
  })

  it("renders the filter dropdown", () => {
    expect(screen.getByRole("combobox")).toBeInTheDocument()
  })

  it("renders the total user count", () => {
    expect(screen.getByText("240")).toBeInTheDocument()
  })

  it("renders all user categories", () => {
    expect(screen.getByText("Students")).toBeInTheDocument()
    expect(screen.getByText("Programs")).toBeInTheDocument()
    expect(screen.getByText("Others")).toBeInTheDocument()

    expect(screen.getByText("200")).toBeInTheDocument()
    expect(screen.getByText("23")).toBeInTheDocument()
    expect(screen.getByText("17")).toBeInTheDocument()
  })

  it("renders the chart components", () => {
    expect(screen.getByTestId("responsive-container")).toBeInTheDocument()
    expect(screen.getByTestId("pie-chart")).toBeInTheDocument()
    expect(screen.getByTestId("pie")).toBeInTheDocument()
    expect(screen.getAllByTestId("cell").length).toBe(3)
  })
})
