describe('visit web and select language', function() {
  it('Zezzer', function() {
    cy.visit('https://express.zeccer.pl/c10bf158-1797-4144-859d-b7ea9dca0632')
    cy.get('#root > div > div > div > div > header > div > div:nth-child(4) > button').click()
    cy.get('#simple-menu > div.jss18.jss123.jss28.jss19.jss124 > ul > li').should('have.length', 3).each(function (element) {element.click()})

  })
})

describe('klik', function() {
  it('Zezzer', function() {
    cy.get('#root > div > div > div > div > div:nth-child(5) > button').click()
  })
})

describe('changing of the language on polish', function() {
  it('Zezzer', function() {
      cy.get('#root > div > div > div > div > header > div > div:nth-child(4) > button').click()
      cy.get('#simple-menu > div.jss18.jss123.jss28.jss19.jss124 > ul > li:nth-child(2)').click()
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



// describe('My First Test', function() {
//   it('Webbox', function() {
//     cy.visit('http://localhost:3000/#/login')
//     cy.get('input[name=username]')
//       .type('lcadmin')
//       .should('have.value', 'lcadmin')
//
//     cy.get('input[name=password]').type('lcadmin')
//       .should('have.value', 'lcadmin')
//
//     cy.get('button').click()
//
//   })
// })
