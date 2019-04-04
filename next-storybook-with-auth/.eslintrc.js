module.exports = {
  parser: "babel-eslint",
  extends: [
    "google",
    "plugin:prettier/recommended",
    "plugin:react/recommended"
  ],
  env: {
    browser: true
  },
  plugins: ["babel", "react", "jsx-a11y", "import"],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "max-len": ["error", 300],
    "no-underscore-dangle": "off",
    "prefer-destructuring": [
      "error",
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "import/prefer-default-export": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".js", ".jsx"]
      }
    ],
    "require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: false,
          MethodDefinition: false,
          ClassDeclaration: false,
          ArrowFunctionExpression: false,
          FunctionExpression: false
        }
      }
    ],
    "no-invalid-this": 0,
    "babel/no-invalid-this": 1
  }
};
