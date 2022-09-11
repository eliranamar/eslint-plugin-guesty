/**
 * @fileoverview Forbid usage of bootstrap css classes in react apps
 * @author Eliran Amar
 */
const { bootstrapClasses } = require("../consts/bootstrap-classes");

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
// Reference to the AST used to create the rule:
// https://astexplorer.net/#/gist/767a28e90cf65887974dab369dab03c6/ca44047b4e444b772d57cbce7923228a619979a6
module.exports = {
  meta: {
    // fixable: "code",
    type: "problem",
    docs: {
      description: "disallow. Do not allow to use bootstrap classes",
      recommended: "warn",
    },
    messages: {
      match: "Found forbidden '{{className}}' bootstrap class.",
    },
    schema: [],
  },
  create(context) {
    return {
      JSXAttribute(node) {
        try {
          if (node.name.name === "className") {
            // In case the class name is a string
            if (
              node.value.type === "Literal" ||
              node.value.type === "StringLiteral"
            ) {
              const currentClass = node.value.value;

              if (!currentClass) {
                return;
              }
              // The className might contain several classes, so split them to array
              const classesArray = currentClass.split(" ");
              // And check each class separately
              for (const currentItem of classesArray) {
                if (bootstrapClasses.has(currentItem)) {
                  context.report({
                    node,
                    messageId: "match",
                    data: {
                      className: currentItem,
                    },
                    // fix: function (fixer) {
                    //   return fixer.replaceText(
                    //     node,
                    //     node.value.value.replace(currentItem, "")
                    //   );
                    // },
                  });
                }
              }
            }
            // Also check in case of passing classes via classnames package function
            else if (
              node.value.type === "JSXExpressionContainer" &&
              node.value.expression.type === "CallExpression" &&
              node.value.expression?.arguments?.length > 0
            ) {
              node.value.expression.arguments.forEach((argument) => {
                // Only check the funciton arguments that are objects
                if (argument.type === "ObjectExpression") {
                  (argument.properties || []).forEach((property) => {
                    // Only check object keys that are string
                    if (
                      !property.computed &&
                      bootstrapClasses.has(property.key.value)
                    ) {
                      context.report({
                        node: property,
                        messageId: "match",
                        data: {
                          className: property.key.value,
                        },
                      });
                    }
                  });
                }
              });
            }
          }
        } catch (e) {
          // https://eslint.org/docs/latest/developer-guide/working-with-rules#the-context-object
          console.log("Error trying to lint file:\n", e);
        }
      },
    };
  },
};
