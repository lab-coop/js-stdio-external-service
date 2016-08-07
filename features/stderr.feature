Feature: stderr

  Scenario: send Buffer to stderr
    When a Buffer is sent to the "stderr" containing:
    """
    apple
    """
    Then it should write to "stderr":
    """
    apple
    """

