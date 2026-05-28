Feature: Checkout Functionality

  Scenario: Complete product checkout
    Given user launches sauce demo application
    When user enters valid username and password
    And user clicks on login button
    And user adds product to cart
    And user clicks on cart button
    And user clicks on checkout button
    And user enters checkout information
    And user clicks on continue button
    And user clicks on finish button
    Then order should be completed successfully
