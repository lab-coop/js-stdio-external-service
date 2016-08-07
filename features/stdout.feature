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

  Scenario: add transform stream
    Given a Ceasar chiper tranform stream attached to "stdout":
    When a Buffer is sent to the "stdout" containing:
    """
    apple
    """
    Then it should write to "stdout":
    """
    bqqmf
    """

