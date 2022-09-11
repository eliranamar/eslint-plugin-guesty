// /**
//  * DEPRECATED - use no-restricted-imports instead
//  *
//  * @fileoverview Rule to forbid specific packages from being used
//  * @author Eliran Amar
//  */
//
// //------------------------------------------------------------------------------
// // Rule Definition
// //------------------------------------------------------------------------------
//
// function getRestrictedPackages(context) {
//   return (
//     (context.options && context.options[0] && context.options[0].packages) || []
//   );
// }
//
// module.exports = {
//   meta: {
//     type: "problem",
//     docs: {
//       description: "disallow. Forbid certain packages usage",
//       recommended: 0,
//     },
//     schema: [
//       {
//         type: "object",
//         properties: {
//           packages: {
//             type: "array",
//             items: {
//               type: "string",
//             },
//           },
//         },
//         additionalProperties: false,
//       },
//     ],
//   },
//   create(context) {
//     return {
//       ImportDeclaration(node) {
//         const restrictedPackages = getRestrictedPackages(context);
//
//         restrictedPackages.forEach((p, index) => {
//           if (node.source.value === p || node.source.value.includes(p)) {
//             context.report({
//               node,
//               message: `Do not use ${restrictedPackages[index]}`,
//             });
//           }
//         });
//       },
//       CallExpression(node) {
//         if (node.callee.name === "require") {
//           const restrictedPackages = getRestrictedPackages(context);
//           restrictedPackages.forEach((p, index) => {
//             if (
//               node.arguments.some(
//                 (arg) => arg.value === p || arg.value.includes(p)
//               )
//             ) {
//               context.report({
//                 node,
//                 message: `Do not use ${restrictedPackages[index]}`,
//               });
//             }
//           });
//         }
//       },
//     };
//   },
// };
