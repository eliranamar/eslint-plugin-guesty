/**
 * @fileoverview Forbid testing :P 🤓
 * @author Eliran Amar
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "disallow",
      recommended: 0,
    },
    messages: {
      match:
        "Found '{{filename}}' test file. If you knew what you were doing, you wouldn't need to test it.",
    },
    schema: [],
  },
  create: (context) => ({
    Program: (node) => {
      const filename = context.getFilename();
      if (
        filename.includes(".spec.") ||
        filename.includes(".test.") ||
        filename.includes(".cy.")
      ) {
        context.report({
          node,
          messageId: "match",
          data: {
            filename,
          },
        });
      }
    },
  }),
};
