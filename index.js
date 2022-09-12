/**
 * Copyright (c) Guesty, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
"use strict";

const allRules = {
  "no-bootstrap-classes": require("./lib/rules/no-bootstrap-classes"),
  "no-bootstrap-guesty-classes": require("./lib/rules/no-bootstrap-guesty-classes"),
  "no-testing": require("./lib/rules/no-testing"),
  "no-css-import": require("./lib/rules/no-css-import"),
};

const recommendedGuestyBaseRules = Object.entries(allRules)
  .filter(([, rule]) => rule.meta.docs.recommended)
  .reduce(
    (acc, [name, rule]) => ({
      ...acc,
      [`guesty/${name}`]: rule.meta.docs.recommended,
    }),
    {}
  );

/*
 * ---------------------- IMPORTANT NOTE ----------------------
 * This usage of 3rd party requires the 3rd party plugin MUST be installed separately!
 * For example:
 * If you add the rule "react/no-unused-prop-types": "off", to the recommended list, it means that
 * the eslint-plugin-react npm package should be installed and added to the plugins list in the project eslint config.
 *
 * There is still an open issue regarding this:
 * https://github.com/eslint/eslint/issues/3458
 *
 * If you add any rule here, please attach the docs link as well.
 * */
const recommendedThirdPartyRules = {
  // https://eslint.org/docs/latest/rules/no-restricted-imports
  "no-restricted-imports": [
    "error",
    {
      name: "moment",
      message: "Please use day-js instead https://www.npmjs.com/package/dayjs.",
    },
  ],
};

const recommendedRules = {
  ...recommendedGuestyBaseRules,
  ...recommendedThirdPartyRules,
};

module.exports = {
  rules: allRules,
  configs: {
    recommended: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: recommendedRules,
      plugins: ["guesty"],
    },
  },
};
