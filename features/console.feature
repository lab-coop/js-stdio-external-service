Feature: Console

  Scenario: Write debug on console
    When a "debug" level message sent to console: "apple"
    Then it should write to "stdout":
    """
    apple

    """
  Scenario: Write info on console
    When an "info" level message sent to console: "apple"
    Then it should write to "stdout":
    """
    apple

    """
  Scenario: Write warn on console
    When a "warn" level message sent to console: "apple"
    Then it should write to "stderr":
    """
    apple

    """
  Scenario: Write error on console
    When an "error" level message sent to console: "apple"
    Then it should write to "stderr":
    """
    apple

    """
