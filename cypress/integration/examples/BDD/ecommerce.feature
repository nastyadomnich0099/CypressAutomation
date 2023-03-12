



Feature: End to end ecommerce validation 


  application Regression 
   @Regression
    Scenario: Ecommerce products delivery
    Given I open ecommerce page
    When I add items to card
    When Validate the total prices 
    Then Select the country cubmit anf verify Thank you

 @Smoke
    Scenario: Filling the form to shop
    Given I open ecommerce page
    When I fill the form details
     |name | gender |
    |bobz | Male   |
    Then validate the forms behavior
    And select the shop page
