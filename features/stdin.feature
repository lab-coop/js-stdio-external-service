Feature: stdin

  Scenario: receive Buffer from stdin
    When to "stdin" is written:
    """
    apple
    """
    Then it should read from "stdin":
    """
    apple
    """

  Scenario: add transform stream
    Given a Ceasar chiper tranform stream attached to "stdin":
    When to "stdin" is written:
    """
    apple
    """
    Then it should read from "stdin":
    """
    bqqmf
    """

