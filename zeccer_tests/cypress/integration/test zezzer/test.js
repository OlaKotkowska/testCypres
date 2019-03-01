describe('visit web and select language', function() {
  it('Zezzer', function() {
    cy.visit('https://express.zeccer.pl/9fff15a3-a9e6-4ccf-be27-92d87a65a8d1')
    cy.get('#root > div > div > div > div > header > div > div:nth-child(4) > button').click()
    cy.get('#simple-menu > div.jss18.jss123.jss28.jss19.jss124 > ul > li').should('have.length', 3).each(function (element) {element.click()})

  })
})
describe('changing of the language on polish', function() {
  it('Zezzer', function() {
      cy.get('#root > div > div > div > div > header > div > div:nth-child(4) > button').click()
      cy.get('#simple-menu > div.jss18.jss123.jss28.jss19.jss124 > ul > li:nth-child(2)').click()
  })
})

describe('click on button - add', function() {
  it('Zezzer', function() {
    cy.xpath('/html/body/div/div/div/div/div/div[3]/button').click()
  })
})


describe('click on dicounte code', function() {
  it('Zezzer', function() {
      cy.get('#root > div > div > div > div > div:nth-child(6) > div > div > div > button').click()
      cy.get('#name').type('wrwrwrw')
      cy.xpath('/html/body/div[2]/div[2]/div/div[3]/button[2]/span[1]').click()
      cy.get('#name').clear()
      cy.get('#name').type('1234').clear()
      cy.xpath('/html/body/div[2]/div[2]/div/div[3]/button[2]/span[1]').click()
      cy.xpath('/html/body/div[2]/div[2]/div/div[3]/button[1]/span[1]').click()
  })
})
