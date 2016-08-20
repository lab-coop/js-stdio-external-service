Feature: Readline

  Scenario: Read line from stdin
    Given a prompt with a question "apple?"
    When to "stdin" is written:
      """
      apple

      """
    Then it should read line "apple"

  Scenario: Write question to stdout
    Given a prompt with a question "apple?"
    When to "stdin" is written:
      """
      apple

      """
    Then it should write to "stdout":
      """
      apple?
      """

