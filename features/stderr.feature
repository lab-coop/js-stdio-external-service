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

  Scenario: add transform stream
    Given a Ceasar chiper tranform stream attached to "stderr":
    When a Buffer is sent to the "stderr" containing:
    """
    apple
    """
    Then it should write to "stderr":
    """
    bqqmf
    """

