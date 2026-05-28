Feature: Login Functionality

  Scenario: Login with valid user
    Given user launches sauce demo application
    When user enters valid username and password
    And user clicks on login button
    Then user should navigate to products page

  Scenario: Login with invalid user
    Given user launches sauce demo application
    When user enters invalid username and password
    And user clicks on login button
    Then user should see login error message

