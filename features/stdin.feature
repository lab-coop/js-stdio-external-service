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

