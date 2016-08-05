Feature: Console

  Scenario: Write debug on console
    When debug message sent to console: "apple"
    Then it should write to standard out:
    """
    apple

    """
  Scenario: Write info on console
    When info message sent to console: "apple"
    Then it should write to standard out:
    """
    apple

    """
