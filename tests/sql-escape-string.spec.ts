import escapeString from "../";

describe("escape string", () => {
  describe("should support backslashes", () => {
    const cases = [
      ["NOW()", "'NOW()'"],
      ["Super", "'Super'"],
      ["Sup\0er", "'Sup\\0er'"],
      ["Super\0", "'Super\\0'"],
      ["Sup\ber", "'Sup\\ber'"],
      ["Super\b", "'Super\\b'"],
      ["Sup\ner", "'Sup\\ner'"],
      ["Super\n", "'Super\\n'"],
      ["Sup\rer", "'Sup\\rer'"],
      ["Super\r", "'Super\\r'"],
      ["Sup\ter", "'Sup\\ter'"],
      ["Super\t", "'Super\\t'"],
      ["Sup\\er", "'Sup\\\\er'"],
      ["Super\\", "'Super\\\\'"],
      ["Sup\u001aer", "'Sup\\Zer'"],
      ["Super\u001a", "'Super\\Z'"],
      ["Sup'er", "'Sup\\'er'"],
      ["Super'", "'Super\\''"],
      ['Sup"er', "'Sup\\\"er'"],
      ['Super"', "'Super\\\"'"],
    ];

    it.each(cases)("%s should equal %s", (input, expected) => {
      const actual = escapeString(input, { backslashSupported: true });

      expect(actual).toEqual(expected);
    });
  });

  describe("should handle invalid values", () => {
    const cases = [undefined, null];

    it.each(cases)("should handle %s", (value) => {
      const tryEscape = () => escapeString(value);

      expect(tryEscape).toThrow("Need to pass a valid string");
    });
  });
});
