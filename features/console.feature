Feature: Console

  Scenario: Write debug on console
    When debug message sent to console: "apple"
    Then it should write to standard out:
    """
    apple

    """
