/**
 * @fileoverview Rule to forbid css files import
 * @author Eliran Amar
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "enforce",
      recommended: "error",
    },
    schema: [],
    messages: {
      match: "Found '{{file}}' style file. Don't import .css files",
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        if (
          //  Allow only the bootstrap.js file to load css files, as it runs locally only, and not used in build time.
          !context.getFilename().endsWith("bootstrap.js") &&
          typeof node.source.value === "string"
        ) {
          if (
            node.source.value.endsWith(".css") ||
            node.source.value.endsWith(".scss")
          ) {
            context.report({
              node,
              messageId: "match",
              data: {
                file: node.source.value,
              },
            });
          }
        }
      },
    };
  },
};
