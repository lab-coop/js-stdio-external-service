Feature: stdout

  Scenario: send Buffer to stdout
    When a Buffer is sent to the "stdout" containing:
    """
    apple
    """
    Then it should write to "stdout":
    """
    apple
    """

