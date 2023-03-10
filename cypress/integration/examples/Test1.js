// <reference types= "Cypress" / > 
describe('My First Test', function ()  {
    it('My FirstTest case', () => {
     
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get('.search-keyword').type('ca');
cy.wait(2000);
cy.get('.product:visible').should('have.length',4);



cy.get('.products').as('productlocator')
cy.get('@productlocator').find('.product').should('have.length',4);
//cy.get('.products').find('.product').should('have.length',4);
cy.get(':nth-child(3) > .product-action > button').click();
cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
    console.log('sf');
})

cy.get('@productlocator').find('.product').each(($el, index, $list) =>{
    
const textVeg= $el.find('h4.product-name').text();
if(textVeg.includes('Cashews'))
{
$el.find('button').click();
}
})
 
cy.get('.brand').should('have.text','GREENKART');


cy.get('.brand').then(function(logoelelement){
    cy.log(logoelelement.text());

});


//const logo=cy.get('.brand');
//cy.get('.brand').text();

//cy.log(logo.text());


    });

 
  });