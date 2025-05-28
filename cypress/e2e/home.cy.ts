describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  it('the h1 contains the correct text', () => {
    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })
  it("the features on the homepage are correct", () => {
    cy.get("dt").eq(0).contains("4 Courses")
  })
  it("the features on the homepage are correct with regex", () => {
    cy.get("dt").eq(0).contains(/4 courses/i)
  })
  it.only("the second feature on the homepage are correct", () => {
    cy.get("dt").eq(1).contains('25+ Lessons')
  })
  it.only("the second feature on the homepage are correct with regex", () => {
    cy.get("dt").eq(1).contains(/25\+\s*lessons/i)
  })
  it.only("the third feature on the homepage are correct with regex", () => {
    cy.get("dt").eq(2).contains(/free and open source/i)
  })
})