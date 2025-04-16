{
  "data": {
    "__schema": {
      "queryType": {
        "name": "query_root"
      },
      "mutationType": {
        "name": "mutation_root"
      },
      "subscriptionType": {
        "name": "subscription_root"
      },
      "types": [
        {
          "kind": "SCALAR",
          "name": "Boolean",
          "description": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Boolean_comparison_exp",
          "description": "Boolean expression to compare columns of type \"Boolean\". All fields are combined with logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_eq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_in",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_is_null",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_neq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nin",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Float",
          "description": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Float_comparison_exp",
          "description": "Boolean expression to compare columns of type \"Float\". All fields are combined with logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_eq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_in",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Float",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_is_null",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_neq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nin",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Float",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "Int",
          "description": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "Int_comparison_exp",
          "description": "Boolean expression to compare columns of type \"Int\". All fields are combined with logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_eq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_in",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_is_null",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_neq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nin",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "String",
          "description": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "String_comparison_exp",
          "description": "Boolean expression to compare columns of type \"String\". All fields are combined with logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_eq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_ilike",
              "description": "does the column match the given case-insensitive pattern",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_in",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_iregex",
              "description": "does the column match the given POSIX regular expression, case insensitive",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_is_null",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_like",
              "description": "does the column match the given pattern",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_neq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nilike",
              "description": "does the column NOT match the given case-insensitive pattern",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nin",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_niregex",
              "description": "does the column NOT match the given POSIX regular expression, case insensitive",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nlike",
              "description": "does the column NOT match the given pattern",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nregex",
              "description": "does the column NOT match the given POSIX regular expression, case sensitive",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nsimilar",
              "description": "does the column NOT match the given SQL regular expression",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_regex",
              "description": "does the column match the given POSIX regular expression, case sensitive",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_similar",
              "description": "does the column match the given SQL regular expression",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Directive",
          "description": null,
          "fields": [
            {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__InputValue",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isRepeatable",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "locations",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__EnumValue",
          "description": null,
          "fields": [
            {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Field",
          "description": null,
          "fields": [
            {
              "name": "args",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__InputValue",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "deprecationReason",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "isDeprecated",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__InputValue",
          "description": null,
          "fields": [
            {
              "name": "defaultValue",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "type",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Schema",
          "description": null,
          "fields": [
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "directives",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Directive",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "mutationType",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "queryType",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "subscriptionType",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "types",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "__Type",
          "description": null,
          "fields": [
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "enumValues",
              "description": null,
              "args": [
                {
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "__EnumValue",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "fields",
              "description": null,
              "args": [
                {
                  "name": "includeDeprecated",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": "false"
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "__Field",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "inputFields",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__InputValue",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "interfaces",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kind",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "__TypeKind",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ofType",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "possibleTypes",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "__Type",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "__TypeKind",
          "description": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ENUM",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INPUT_OBJECT",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "INTERFACE",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "LIST",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "NON_NULL",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "OBJECT",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "SCALAR",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "UNION",
              "description": null,
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "bigint",
          "description": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "bigint_comparison_exp",
          "description": "Boolean expression to compare columns of type \"bigint\". All fields are combined with logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_eq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_in",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "bigint",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_is_null",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_neq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nin",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "bigint",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "cursor_ordering",
          "description": "ordering argument of a cursor",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ASC",
              "description": "ascending ordering of the cursor",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "DESC",
              "description": "descending ordering of the cursor",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor",
          "description": "columns and relationships of \"donor\"",
          "fields": [
            {
              "name": "active",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "address",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cuisine_type",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transactions",
              "description": "An array relationship",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor_transaction",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transactions_aggregate",
              "description": "An aggregate relationship",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor_transaction_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_verified",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_aggregate",
          "description": "aggregated selection of \"donor\"",
          "fields": [
            {
              "name": "aggregate",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_aggregate_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_aggregate_fields",
          "description": "aggregate fields of \"donor\"",
          "fields": [
            {
              "name": "avg",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_avg_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": null,
              "args": [
                {
                  "name": "columns",
                  "description": null,
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "distinct",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_max_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "min",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_min_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_stddev_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev_pop",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_stddev_pop_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev_samp",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_stddev_samp_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "sum",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_sum_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "var_pop",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_var_pop_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "var_samp",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_var_samp_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "variance",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_variance_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_avg_fields",
          "description": "aggregate avg on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_bool_exp",
          "description": "Boolean expression to filter rows from the table \"donor\". All fields are combined with a logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_and",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_bool_exp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_not",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_or",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_bool_exp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cuisine_type",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions_aggregate",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_aggregate_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "bigint_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "donor_constraint",
          "description": "unique or primary key constraints on table \"donor\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "donor_pkey",
              "description": "unique or primary key constraint on columns \"id\"",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ukjk6fyhoq0e5kkhgo92prumblw",
              "description": "unique or primary key constraint on columns \"email\"",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_inc_input",
          "description": "input type for incrementing numeric columns in table \"donor\"",
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_insert_input",
          "description": "input type for inserting data into table \"donor\"",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cuisine_type",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_arr_rel_insert_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_max_fields",
          "description": "aggregate max on columns",
          "fields": [
            {
              "name": "address",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cuisine_type",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_min_fields",
          "description": "aggregate min on columns",
          "fields": [
            {
              "name": "address",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cuisine_type",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_mutation_response",
          "description": "response of any mutation on the table \"donor\"",
          "fields": [
            {
              "name": "affected_rows",
              "description": "number of rows affected by the mutation",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "returning",
              "description": "data from the rows affected by the mutation",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_obj_rel_insert_input",
          "description": "input type for inserting object relation for remote table \"donor\"",
          "fields": null,
          "inputFields": [
            {
              "name": "data",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "donor_insert_input",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "on_conflict",
              "description": "upsert condition",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_on_conflict",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_on_conflict",
          "description": "on_conflict condition type for table \"donor\"",
          "fields": null,
          "inputFields": [
            {
              "name": "constraint",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "donor_constraint",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "update_columns",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "ENUM",
                      "name": "donor_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_order_by",
          "description": "Ordering options when selecting data from \"donor\".",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cuisine_type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions_aggregate",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_aggregate_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_pk_columns_input",
          "description": "primary key columns input for table: donor",
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "donor_select_column",
          "description": "select columns of table \"donor\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "active",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "address",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cuisine_type",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_verified",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_set_input",
          "description": "input type for updating data in table \"donor\"",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cuisine_type",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_stddev_fields",
          "description": "aggregate stddev on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_stddev_pop_fields",
          "description": "aggregate stddev_pop on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_stddev_samp_fields",
          "description": "aggregate stddev_samp on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_stream_cursor_input",
          "description": "Streaming cursor of the table \"donor\"",
          "fields": null,
          "inputFields": [
            {
              "name": "initial_value",
              "description": "Stream column input with initial value",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "donor_stream_cursor_value_input",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordering",
              "description": "cursor ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_stream_cursor_value_input",
          "description": "Initial value of the column from where the streaming should start",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "cuisine_type",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_sum_fields",
          "description": "aggregate sum on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction",
          "description": "columns and relationships of \"donor_transaction\"",
          "fields": [
            {
              "name": "cancellation_reason",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamp",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamp",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor",
              "description": "An object relationship",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamp",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamp",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamp",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "feedback",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "food_details",
              "description": null,
              "args": [
                {
                  "name": "path",
                  "description": "JSON select path",
                  "type": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "jsonb",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "food_type",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_cooling_required",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo",
              "description": "An object relationship",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamp",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "status",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamp",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer",
              "description": "An object relationship",
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_aggregate",
          "description": "aggregated selection of \"donor_transaction\"",
          "fields": [
            {
              "name": "aggregate",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_aggregate_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor_transaction",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_aggregate_bool_exp",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "bool_and",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_aggregate_bool_exp_bool_and",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "bool_or",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_aggregate_bool_exp_bool_or",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "count",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_aggregate_bool_exp_count",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_aggregate_bool_exp_bool_and",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "arguments",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "donor_transaction_select_column_donor_transaction_aggregate_bool_exp_bool_and_arguments_columns",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "distinct",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "filter",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "predicate",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Boolean_comparison_exp",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_aggregate_bool_exp_bool_or",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "arguments",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "donor_transaction_select_column_donor_transaction_aggregate_bool_exp_bool_or_arguments_columns",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "distinct",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "filter",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "predicate",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Boolean_comparison_exp",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_aggregate_bool_exp_count",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "arguments",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "ENUM",
                    "name": "donor_transaction_select_column",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "distinct",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "filter",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "predicate",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "Int_comparison_exp",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_aggregate_fields",
          "description": "aggregate fields of \"donor_transaction\"",
          "fields": [
            {
              "name": "avg",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_avg_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": null,
              "args": [
                {
                  "name": "columns",
                  "description": null,
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "distinct",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_max_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "min",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_min_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_stddev_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev_pop",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_stddev_pop_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev_samp",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_stddev_samp_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "sum",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_sum_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "var_pop",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_var_pop_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "var_samp",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_var_samp_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "variance",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_variance_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_aggregate_order_by",
          "description": "order by aggregate values of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "avg",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_avg_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "count",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "max",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_max_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "min",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_min_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "stddev",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_stddev_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "stddev_pop",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_stddev_pop_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "stddev_samp",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_stddev_samp_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "sum",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_sum_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "var_pop",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_var_pop_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "var_samp",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_var_samp_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "variance",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_variance_order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_append_input",
          "description": "append existing jsonb value of filtered columns with new jsonb value",
          "fields": null,
          "inputFields": [
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_arr_rel_insert_input",
          "description": "input type for inserting array relation for remote table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "data",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "donor_transaction_insert_input",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "on_conflict",
              "description": "upsert condition",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_on_conflict",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_avg_fields",
          "description": "aggregate avg on columns",
          "fields": [
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_avg_order_by",
          "description": "order by avg() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_bool_exp",
          "description": "Boolean expression to filter rows from the table \"donor_transaction\". All fields are combined with a logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_and",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_not",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_or",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "cancellation_reason",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "bigint_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Float_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "feedback",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "jsonb_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_type",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "bigint_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_cooling_required",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ngo_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "bigint_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Float_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "volunteer_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "bigint_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Float_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "donor_transaction_constraint",
          "description": "unique or primary key constraints on table \"donor_transaction\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "donor_transaction_pkey",
              "description": "unique or primary key constraint on columns \"id\"",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_delete_at_path_input",
          "description": "delete the field or element with specified path (for JSON arrays, negative integers count from the end)",
          "fields": null,
          "inputFields": [
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_delete_elem_input",
          "description": "delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array",
          "fields": null,
          "inputFields": [
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_delete_key_input",
          "description": "delete key/value pair or string element. key/value pairs are matched based on their key value",
          "fields": null,
          "inputFields": [
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_inc_input",
          "description": "input type for incrementing numeric columns in table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_insert_input",
          "description": "input type for inserting data into table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "cancellation_reason",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_obj_rel_insert_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "feedback",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_type",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_cooling_required",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ngo_obj_rel_insert_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "volunteer_obj_rel_insert_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_max_fields",
          "description": "aggregate max on columns",
          "fields": [
            {
              "name": "cancellation_reason",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "feedback",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "food_type",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "status",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_max_order_by",
          "description": "order by max() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "cancellation_reason",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "feedback",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_min_fields",
          "description": "aggregate min on columns",
          "fields": [
            {
              "name": "cancellation_reason",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "feedback",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "food_type",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "status",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_min_order_by",
          "description": "order by min() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "cancellation_reason",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "feedback",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_mutation_response",
          "description": "response of any mutation on the table \"donor_transaction\"",
          "fields": [
            {
              "name": "affected_rows",
              "description": "number of rows affected by the mutation",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "returning",
              "description": "data from the rows affected by the mutation",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor_transaction",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_on_conflict",
          "description": "on_conflict condition type for table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "constraint",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "donor_transaction_constraint",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "update_columns",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "ENUM",
                      "name": "donor_transaction_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_order_by",
          "description": "Ordering options when selecting data from \"donor_transaction\".",
          "fields": null,
          "inputFields": [
            {
              "name": "cancellation_reason",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "feedback",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_cooling_required",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ngo_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "volunteer_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_pk_columns_input",
          "description": "primary key columns input for table: donor_transaction",
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_prepend_input",
          "description": "prepend existing jsonb value of filtered columns with new jsonb value",
          "fields": null,
          "inputFields": [
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "donor_transaction_select_column",
          "description": "select columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "cancellation_reason",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delivery_time",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_feedback",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_delivery_time",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_pickup_time",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "expiry_date",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "feedback",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "food_details",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "food_type",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_cooling_required",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "more_requirements",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_location",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_time",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "special_instructions",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "status",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_feedback",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "donor_transaction_select_column_donor_transaction_aggregate_bool_exp_bool_and_arguments_columns",
          "description": "select \"donor_transaction_aggregate_bool_exp_bool_and_arguments_columns\" columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "is_cooling_required",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "donor_transaction_select_column_donor_transaction_aggregate_bool_exp_bool_or_arguments_columns",
          "description": "select \"donor_transaction_aggregate_bool_exp_bool_or_arguments_columns\" columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "is_cooling_required",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_set_input",
          "description": "input type for updating data in table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "cancellation_reason",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "feedback",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_type",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_cooling_required",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_stddev_fields",
          "description": "aggregate stddev on columns",
          "fields": [
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_stddev_order_by",
          "description": "order by stddev() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_stddev_pop_fields",
          "description": "aggregate stddev_pop on columns",
          "fields": [
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_stddev_pop_order_by",
          "description": "order by stddev_pop() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_stddev_samp_fields",
          "description": "aggregate stddev_samp on columns",
          "fields": [
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_stddev_samp_order_by",
          "description": "order by stddev_samp() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_stream_cursor_input",
          "description": "Streaming cursor of the table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "initial_value",
              "description": "Stream column input with initial value",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "donor_transaction_stream_cursor_value_input",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordering",
              "description": "cursor ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_stream_cursor_value_input",
          "description": "Initial value of the column from where the streaming should start",
          "fields": null,
          "inputFields": [
            {
              "name": "cancellation_reason",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "delivery_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_feedback",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_delivery_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "estimated_pickup_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "expiry_date",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "feedback",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_details",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "food_type",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_cooling_required",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "more_requirements",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_location",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "pickup_time",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "special_instructions",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "status",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_feedback",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_sum_fields",
          "description": "aggregate sum on columns",
          "fields": [
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_sum_order_by",
          "description": "order by sum() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "donor_transaction_update_column",
          "description": "update columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "cancellation_reason",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delivery_time",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_feedback",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_delivery_time",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "estimated_pickup_time",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "expiry_date",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "feedback",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "food_details",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "food_type",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_cooling_required",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "more_requirements",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_location",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "pickup_time",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "special_instructions",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "status",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_feedback",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_updates",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "_append",
              "description": "append existing jsonb value of filtered columns with new jsonb value",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_append_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_delete_at_path",
              "description": "delete the field or element with specified path (for JSON arrays, negative integers count from the end)",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_delete_at_path_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_delete_elem",
              "description": "delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_delete_elem_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_delete_key",
              "description": "delete key/value pair or string element. key/value pairs are matched based on their key value",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_delete_key_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_inc",
              "description": "increments the numeric columns with given value of the filtered values",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_inc_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_prepend",
              "description": "prepend existing jsonb value of filtered columns with new jsonb value",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_prepend_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_set",
              "description": "sets the columns of the filtered rows to the given values",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_set_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "where",
              "description": "filter the rows which have to be updated",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "donor_transaction_bool_exp",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_var_pop_fields",
          "description": "aggregate var_pop on columns",
          "fields": [
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_var_pop_order_by",
          "description": "order by var_pop() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_var_samp_fields",
          "description": "aggregate var_samp on columns",
          "fields": [
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_var_samp_order_by",
          "description": "order by var_samp() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_transaction_variance_fields",
          "description": "aggregate variance on columns",
          "fields": [
            {
              "name": "donor_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_transaction_variance_order_by",
          "description": "order by variance() on columns of table \"donor_transaction\"",
          "fields": null,
          "inputFields": [
            {
              "name": "donor_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "ngo_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "serving_quantity",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "volunteer_rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "donor_update_column",
          "description": "update columns of table \"donor\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "active",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "address",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "cuisine_type",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_verified",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "donor_updates",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "_inc",
              "description": "increments the numeric columns with given value of the filtered values",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_inc_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_set",
              "description": "sets the columns of the filtered rows to the given values",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_set_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "where",
              "description": "filter the rows which have to be updated",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "donor_bool_exp",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_var_pop_fields",
          "description": "aggregate var_pop on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_var_samp_fields",
          "description": "aggregate var_samp on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "donor_variance_fields",
          "description": "aggregate variance on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "float8",
          "description": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "float8_comparison_exp",
          "description": "Boolean expression to compare columns of type \"float8\". All fields are combined with logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_eq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_in",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "float8",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_is_null",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_neq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nin",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "float8",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "jsonb",
          "description": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "jsonb_cast_exp",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "String",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "jsonb_comparison_exp",
          "description": "Boolean expression to compare columns of type \"jsonb\". All fields are combined with logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_cast",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "jsonb_cast_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_contained_in",
              "description": "is the column contained in the given json value",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_contains",
              "description": "does the column contain the given json value at the top level",
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_eq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_has_key",
              "description": "does the string exist as a top-level key in the column",
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_has_keys_all",
              "description": "do all of these strings exist as top-level keys in the column",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_has_keys_any",
              "description": "do any of these strings exist as top-level keys in the column",
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "String",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_in",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "jsonb",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_is_null",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_neq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "jsonb",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nin",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "jsonb",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "mutation_root",
          "description": "mutation root",
          "fields": [
            {
              "name": "delete_donor",
              "description": "delete data from the table: \"donor\"",
              "args": [
                {
                  "name": "where",
                  "description": "filter the rows which have to be deleted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "donor_bool_exp",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delete_donor_by_pk",
              "description": "delete single row from the table: \"donor\"",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delete_donor_transaction",
              "description": "delete data from the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "where",
                  "description": "filter the rows which have to be deleted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "donor_transaction_bool_exp",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delete_donor_transaction_by_pk",
              "description": "delete single row from the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delete_ngo",
              "description": "delete data from the table: \"ngo\"",
              "args": [
                {
                  "name": "where",
                  "description": "filter the rows which have to be deleted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ngo_bool_exp",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delete_ngo_by_pk",
              "description": "delete single row from the table: \"ngo\"",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ngo",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delete_volunteer",
              "description": "delete data from the table: \"volunteer\"",
              "args": [
                {
                  "name": "where",
                  "description": "filter the rows which have to be deleted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "volunteer_bool_exp",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "delete_volunteer_by_pk",
              "description": "delete single row from the table: \"volunteer\"",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "insert_donor",
              "description": "insert data into the table: \"donor\"",
              "args": [
                {
                  "name": "objects",
                  "description": "the rows to be inserted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": null,
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "donor_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "on_conflict",
                  "description": "upsert condition",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_on_conflict",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "insert_donor_one",
              "description": "insert a single row into the table: \"donor\"",
              "args": [
                {
                  "name": "object",
                  "description": "the row to be inserted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "donor_insert_input",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "on_conflict",
                  "description": "upsert condition",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_on_conflict",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "insert_donor_transaction",
              "description": "insert data into the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "objects",
                  "description": "the rows to be inserted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": null,
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "donor_transaction_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "on_conflict",
                  "description": "upsert condition",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_on_conflict",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "insert_donor_transaction_one",
              "description": "insert a single row into the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "object",
                  "description": "the row to be inserted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "donor_transaction_insert_input",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "on_conflict",
                  "description": "upsert condition",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_on_conflict",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "insert_ngo",
              "description": "insert data into the table: \"ngo\"",
              "args": [
                {
                  "name": "objects",
                  "description": "the rows to be inserted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": null,
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "ngo_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "on_conflict",
                  "description": "upsert condition",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_on_conflict",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "insert_ngo_one",
              "description": "insert a single row into the table: \"ngo\"",
              "args": [
                {
                  "name": "object",
                  "description": "the row to be inserted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ngo_insert_input",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "on_conflict",
                  "description": "upsert condition",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_on_conflict",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ngo",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "insert_volunteer",
              "description": "insert data into the table: \"volunteer\"",
              "args": [
                {
                  "name": "objects",
                  "description": "the rows to be inserted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": null,
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "volunteer_insert_input",
                          "ofType": null
                        }
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "on_conflict",
                  "description": "upsert condition",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_on_conflict",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "insert_volunteer_one",
              "description": "insert a single row into the table: \"volunteer\"",
              "args": [
                {
                  "name": "object",
                  "description": "the row to be inserted",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "volunteer_insert_input",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "on_conflict",
                  "description": "upsert condition",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_on_conflict",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_donor",
              "description": "update data of the table: \"donor\"",
              "args": [
                {
                  "name": "_inc",
                  "description": "increments the numeric columns with given value of the filtered values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_inc_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_set",
                  "description": "sets the columns of the filtered rows to the given values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_set_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows which have to be updated",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "donor_bool_exp",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_donor_by_pk",
              "description": "update single row of the table: \"donor\"",
              "args": [
                {
                  "name": "_inc",
                  "description": "increments the numeric columns with given value of the filtered values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_inc_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_set",
                  "description": "sets the columns of the filtered rows to the given values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_set_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "pk_columns",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "donor_pk_columns_input",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_donor_many",
              "description": "update multiples rows of table: \"donor\"",
              "args": [
                {
                  "name": "updates",
                  "description": "updates to execute, in order",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": null,
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "donor_updates",
                          "ofType": null
                        }
                      }
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor_mutation_response",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_donor_transaction",
              "description": "update data of the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "_append",
                  "description": "append existing jsonb value of filtered columns with new jsonb value",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_append_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_delete_at_path",
                  "description": "delete the field or element with specified path (for JSON arrays, negative integers count from the end)",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_delete_at_path_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_delete_elem",
                  "description": "delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_delete_elem_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_delete_key",
                  "description": "delete key/value pair or string element. key/value pairs are matched based on their key value",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_delete_key_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_inc",
                  "description": "increments the numeric columns with given value of the filtered values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_inc_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_prepend",
                  "description": "prepend existing jsonb value of filtered columns with new jsonb value",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_prepend_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_set",
                  "description": "sets the columns of the filtered rows to the given values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_set_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows which have to be updated",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "donor_transaction_bool_exp",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_donor_transaction_by_pk",
              "description": "update single row of the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "_append",
                  "description": "append existing jsonb value of filtered columns with new jsonb value",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_append_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_delete_at_path",
                  "description": "delete the field or element with specified path (for JSON arrays, negative integers count from the end)",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_delete_at_path_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_delete_elem",
                  "description": "delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_delete_elem_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_delete_key",
                  "description": "delete key/value pair or string element. key/value pairs are matched based on their key value",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_delete_key_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_inc",
                  "description": "increments the numeric columns with given value of the filtered values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_inc_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_prepend",
                  "description": "prepend existing jsonb value of filtered columns with new jsonb value",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_prepend_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_set",
                  "description": "sets the columns of the filtered rows to the given values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_set_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "pk_columns",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "donor_transaction_pk_columns_input",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_donor_transaction_many",
              "description": "update multiples rows of table: \"donor_transaction\"",
              "args": [
                {
                  "name": "updates",
                  "description": "updates to execute, in order",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": null,
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "donor_transaction_updates",
                          "ofType": null
                        }
                      }
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor_transaction_mutation_response",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_ngo",
              "description": "update data of the table: \"ngo\"",
              "args": [
                {
                  "name": "_inc",
                  "description": "increments the numeric columns with given value of the filtered values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_inc_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_set",
                  "description": "sets the columns of the filtered rows to the given values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_set_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows which have to be updated",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ngo_bool_exp",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_ngo_by_pk",
              "description": "update single row of the table: \"ngo\"",
              "args": [
                {
                  "name": "_inc",
                  "description": "increments the numeric columns with given value of the filtered values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_inc_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_set",
                  "description": "sets the columns of the filtered rows to the given values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_set_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "pk_columns",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "ngo_pk_columns_input",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ngo",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_ngo_many",
              "description": "update multiples rows of table: \"ngo\"",
              "args": [
                {
                  "name": "updates",
                  "description": "updates to execute, in order",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": null,
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "ngo_updates",
                          "ofType": null
                        }
                      }
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ngo_mutation_response",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_volunteer",
              "description": "update data of the table: \"volunteer\"",
              "args": [
                {
                  "name": "_inc",
                  "description": "increments the numeric columns with given value of the filtered values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_inc_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_set",
                  "description": "sets the columns of the filtered rows to the given values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_set_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows which have to be updated",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "volunteer_bool_exp",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_mutation_response",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_volunteer_by_pk",
              "description": "update single row of the table: \"volunteer\"",
              "args": [
                {
                  "name": "_inc",
                  "description": "increments the numeric columns with given value of the filtered values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_inc_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "_set",
                  "description": "sets the columns of the filtered rows to the given values",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_set_input",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "pk_columns",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "volunteer_pk_columns_input",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "update_volunteer_many",
              "description": "update multiples rows of table: \"volunteer\"",
              "args": [
                {
                  "name": "updates",
                  "description": "updates to execute, in order",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "NON_NULL",
                        "name": null,
                        "ofType": {
                          "kind": "INPUT_OBJECT",
                          "name": "volunteer_updates",
                          "ofType": null
                        }
                      }
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "volunteer_mutation_response",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo",
          "description": "columns and relationships of \"ngo\"",
          "fields": [
            {
              "name": "active",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "address",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transactions",
              "description": "An array relationship",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor_transaction",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transactions_aggregate",
              "description": "An aggregate relationship",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor_transaction_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_verified",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "registration_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "website",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_aggregate",
          "description": "aggregated selection of \"ngo\"",
          "fields": [
            {
              "name": "aggregate",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_aggregate_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ngo",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_aggregate_fields",
          "description": "aggregate fields of \"ngo\"",
          "fields": [
            {
              "name": "avg",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_avg_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": null,
              "args": [
                {
                  "name": "columns",
                  "description": null,
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ngo_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "distinct",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_max_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "min",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_min_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_stddev_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev_pop",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_stddev_pop_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev_samp",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_stddev_samp_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "sum",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_sum_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "var_pop",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_var_pop_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "var_samp",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_var_samp_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "variance",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "ngo_variance_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_avg_fields",
          "description": "aggregate avg on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_bool_exp",
          "description": "Boolean expression to filter rows from the table \"ngo\". All fields are combined with a logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_and",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_bool_exp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_not",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ngo_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_or",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_bool_exp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions_aggregate",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_aggregate_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "bigint_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_name",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_phone_number",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "registration_number",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "website",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "ngo_constraint",
          "description": "unique or primary key constraints on table \"ngo\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ngo_pkey",
              "description": "unique or primary key constraint on columns \"id\"",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ukxtaobj87uatt5ndevo03xrdn",
              "description": "unique or primary key constraint on columns \"email\"",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_inc_input",
          "description": "input type for incrementing numeric columns in table \"ngo\"",
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_insert_input",
          "description": "input type for inserting data into table \"ngo\"",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_arr_rel_insert_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "registration_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "website",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_max_fields",
          "description": "aggregate max on columns",
          "fields": [
            {
              "name": "address",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_name",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "registration_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "website",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_min_fields",
          "description": "aggregate min on columns",
          "fields": [
            {
              "name": "address",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_name",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "registration_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "website",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_mutation_response",
          "description": "response of any mutation on the table \"ngo\"",
          "fields": [
            {
              "name": "affected_rows",
              "description": "number of rows affected by the mutation",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "returning",
              "description": "data from the rows affected by the mutation",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ngo",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_obj_rel_insert_input",
          "description": "input type for inserting object relation for remote table \"ngo\"",
          "fields": null,
          "inputFields": [
            {
              "name": "data",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ngo_insert_input",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "on_conflict",
              "description": "upsert condition",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ngo_on_conflict",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_on_conflict",
          "description": "on_conflict condition type for table \"ngo\"",
          "fields": null,
          "inputFields": [
            {
              "name": "constraint",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "ngo_constraint",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "update_columns",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "ENUM",
                      "name": "ngo_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ngo_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_order_by",
          "description": "Ordering options when selecting data from \"ngo\".",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions_aggregate",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_aggregate_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_name",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_phone_number",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "registration_number",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "website",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_pk_columns_input",
          "description": "primary key columns input for table: ngo",
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "ngo_select_column",
          "description": "select columns of table \"ngo\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "active",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "address",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_verified",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_name",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_phone_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "registration_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "website",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_set_input",
          "description": "input type for updating data in table \"ngo\"",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "registration_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "website",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_stddev_fields",
          "description": "aggregate stddev on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_stddev_pop_fields",
          "description": "aggregate stddev_pop on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_stddev_samp_fields",
          "description": "aggregate stddev_samp on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_stream_cursor_input",
          "description": "Streaming cursor of the table \"ngo\"",
          "fields": null,
          "inputFields": [
            {
              "name": "initial_value",
              "description": "Stream column input with initial value",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ngo_stream_cursor_value_input",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordering",
              "description": "cursor ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_stream_cursor_value_input",
          "description": "Initial value of the column from where the streaming should start",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "address",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "description",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "poc_phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "registration_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "website",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_sum_fields",
          "description": "aggregate sum on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "ngo_update_column",
          "description": "update columns of table \"ngo\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "active",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "address",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "description",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_verified",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_name",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "poc_phone_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "registration_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "website",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "ngo_updates",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "_inc",
              "description": "increments the numeric columns with given value of the filtered values",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ngo_inc_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_set",
              "description": "sets the columns of the filtered rows to the given values",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "ngo_set_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "where",
              "description": "filter the rows which have to be updated",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "ngo_bool_exp",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_var_pop_fields",
          "description": "aggregate var_pop on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_var_samp_fields",
          "description": "aggregate var_samp on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "ngo_variance_fields",
          "description": "aggregate variance on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "order_by",
          "description": "column ordering options",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "asc",
              "description": "in ascending order, nulls last",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "asc_nulls_first",
              "description": "in ascending order, nulls first",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "asc_nulls_last",
              "description": "in ascending order, nulls last",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "desc",
              "description": "in descending order, nulls first",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "desc_nulls_first",
              "description": "in descending order, nulls first",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "desc_nulls_last",
              "description": "in descending order, nulls last",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "query_root",
          "description": null,
          "fields": [
            {
              "name": "donor",
              "description": "fetch data from the table: \"donor\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_aggregate",
              "description": "fetch aggregated fields from the table: \"donor\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_by_pk",
              "description": "fetch data from the table: \"donor\" using primary key columns",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transaction",
              "description": "fetch data from the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor_transaction",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transaction_aggregate",
              "description": "fetch aggregated fields from the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor_transaction_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transaction_by_pk",
              "description": "fetch data from the table: \"donor_transaction\" using primary key columns",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo",
              "description": "fetch data from the table: \"ngo\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ngo_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ngo_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ngo",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_aggregate",
              "description": "fetch aggregated fields from the table: \"ngo\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ngo_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ngo_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ngo_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_by_pk",
              "description": "fetch data from the table: \"ngo\" using primary key columns",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ngo",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer",
              "description": "fetch data from the table: \"volunteer\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "volunteer_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "volunteer_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "volunteer",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_aggregate",
              "description": "fetch aggregated fields from the table: \"volunteer\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "volunteer_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "volunteer_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "volunteer_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_by_pk",
              "description": "fetch data from the table: \"volunteer\" using primary key columns",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "subscription_root",
          "description": null,
          "fields": [
            {
              "name": "donor",
              "description": "fetch data from the table: \"donor\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_aggregate",
              "description": "fetch aggregated fields from the table: \"donor\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_by_pk",
              "description": "fetch data from the table: \"donor\" using primary key columns",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_stream",
              "description": "fetch data from the table in a streaming manner: \"donor\"",
              "args": [
                {
                  "name": "batch_size",
                  "description": "maximum number of rows returned in a single batch",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "cursor",
                  "description": "cursor to stream the results returned by the query",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transaction",
              "description": "fetch data from the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor_transaction",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transaction_aggregate",
              "description": "fetch aggregated fields from the table: \"donor_transaction\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor_transaction_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transaction_by_pk",
              "description": "fetch data from the table: \"donor_transaction\" using primary key columns",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "donor_transaction",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transaction_stream",
              "description": "fetch data from the table in a streaming manner: \"donor_transaction\"",
              "args": [
                {
                  "name": "batch_size",
                  "description": "maximum number of rows returned in a single batch",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "cursor",
                  "description": "cursor to stream the results returned by the query",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor_transaction",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo",
              "description": "fetch data from the table: \"ngo\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ngo_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ngo_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ngo",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_aggregate",
              "description": "fetch aggregated fields from the table: \"ngo\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "ngo_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ngo_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "ngo_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_by_pk",
              "description": "fetch data from the table: \"ngo\" using primary key columns",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "ngo",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "ngo_stream",
              "description": "fetch data from the table in a streaming manner: \"ngo\"",
              "args": [
                {
                  "name": "batch_size",
                  "description": "maximum number of rows returned in a single batch",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "cursor",
                  "description": "cursor to stream the results returned by the query",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "ngo_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "ngo_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "ngo",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer",
              "description": "fetch data from the table: \"volunteer\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "volunteer_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "volunteer_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "volunteer",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_aggregate",
              "description": "fetch aggregated fields from the table: \"volunteer\"",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "volunteer_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "volunteer_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "volunteer_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_by_pk",
              "description": "fetch data from the table: \"volunteer\" using primary key columns",
              "args": [
                {
                  "name": "id",
                  "description": null,
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "bigint",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_stream",
              "description": "fetch data from the table in a streaming manner: \"volunteer\"",
              "args": [
                {
                  "name": "batch_size",
                  "description": "maximum number of rows returned in a single batch",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "SCALAR",
                      "name": "Int",
                      "ofType": null
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "cursor",
                  "description": "cursor to stream the results returned by the query",
                  "type": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "LIST",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "volunteer_stream_cursor_input",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "volunteer",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "SCALAR",
          "name": "timestamp",
          "description": null,
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "timestamp_comparison_exp",
          "description": "Boolean expression to compare columns of type \"timestamp\". All fields are combined with logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_eq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_gte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_in",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "timestamp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_is_null",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lt",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_lte",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_neq",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_nin",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "timestamp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer",
          "description": "columns and relationships of \"volunteer\"",
          "fields": [
            {
              "name": "active",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "availability",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "current_location",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transactions",
              "description": "An array relationship",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "donor_transaction",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "donor_transactions_aggregate",
              "description": "An aggregate relationship",
              "args": [
                {
                  "name": "distinct_on",
                  "description": "distinct select on columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "donor_transaction_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "limit",
                  "description": "limit the number of rows returned",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "offset",
                  "description": "skip the first n rows. Use only with order_by",
                  "type": {
                    "kind": "SCALAR",
                    "name": "Int",
                    "ofType": null
                  },
                  "defaultValue": null
                },
                {
                  "name": "order_by",
                  "description": "sort the rows by one or more columns",
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "donor_transaction_order_by",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "where",
                  "description": "filter the rows returned",
                  "type": {
                    "kind": "INPUT_OBJECT",
                    "name": "donor_transaction_bool_exp",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "OBJECT",
                  "name": "donor_transaction_aggregate",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_verified",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_type",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_aggregate",
          "description": "aggregated selection of \"volunteer\"",
          "fields": [
            {
              "name": "aggregate",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_aggregate_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "nodes",
              "description": null,
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "volunteer",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_aggregate_fields",
          "description": "aggregate fields of \"volunteer\"",
          "fields": [
            {
              "name": "avg",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_avg_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "count",
              "description": null,
              "args": [
                {
                  "name": "columns",
                  "description": null,
                  "type": {
                    "kind": "LIST",
                    "name": null,
                    "ofType": {
                      "kind": "NON_NULL",
                      "name": null,
                      "ofType": {
                        "kind": "ENUM",
                        "name": "volunteer_select_column",
                        "ofType": null
                      }
                    }
                  },
                  "defaultValue": null
                },
                {
                  "name": "distinct",
                  "description": null,
                  "type": {
                    "kind": "SCALAR",
                    "name": "Boolean",
                    "ofType": null
                  },
                  "defaultValue": null
                }
              ],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_max_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "min",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_min_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_stddev_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev_pop",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_stddev_pop_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "stddev_samp",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_stddev_samp_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "sum",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_sum_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "var_pop",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_var_pop_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "var_samp",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_var_samp_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "variance",
              "description": null,
              "args": [],
              "type": {
                "kind": "OBJECT",
                "name": "volunteer_variance_fields",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_avg_fields",
          "description": "aggregate avg on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_bool_exp",
          "description": "Boolean expression to filter rows from the table \"volunteer\". All fields are combined with a logical 'AND'.",
          "fields": null,
          "inputFields": [
            {
              "name": "_and",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_bool_exp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "_not",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "volunteer_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_or",
              "description": null,
              "type": {
                "kind": "LIST",
                "name": null,
                "ofType": {
                  "kind": "NON_NULL",
                  "name": null,
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "volunteer_bool_exp",
                    "ofType": null
                  }
                }
              },
              "defaultValue": null
            },
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "availability",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "current_location",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions_aggregate",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_aggregate_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "bigint_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Boolean_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "max_distance",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "float8_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "Float_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "timestamp_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_number",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_type",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "String_comparison_exp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "volunteer_constraint",
          "description": "unique or primary key constraints on table \"volunteer\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "ukh0jd9uwghm4wei8h8yoh5nm5x",
              "description": "unique or primary key constraint on columns \"email\"",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "volunteer_pkey",
              "description": "unique or primary key constraint on columns \"id\"",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_inc_input",
          "description": "input type for incrementing numeric columns in table \"volunteer\"",
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "max_distance",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_insert_input",
          "description": "input type for inserting data into table \"volunteer\"",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "availability",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "current_location",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_arr_rel_insert_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "max_distance",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_type",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_max_fields",
          "description": "aggregate max on columns",
          "fields": [
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "current_location",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_type",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_min_fields",
          "description": "aggregate min on columns",
          "fields": [
            {
              "name": "created_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "current_location",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_number",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_type",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_mutation_response",
          "description": "response of any mutation on the table \"volunteer\"",
          "fields": [
            {
              "name": "affected_rows",
              "description": "number of rows affected by the mutation",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "returning",
              "description": "data from the rows affected by the mutation",
              "args": [],
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "OBJECT",
                      "name": "volunteer",
                      "ofType": null
                    }
                  }
                }
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_obj_rel_insert_input",
          "description": "input type for inserting object relation for remote table \"volunteer\"",
          "fields": null,
          "inputFields": [
            {
              "name": "data",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "volunteer_insert_input",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "on_conflict",
              "description": "upsert condition",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "volunteer_on_conflict",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_on_conflict",
          "description": "on_conflict condition type for table \"volunteer\"",
          "fields": null,
          "inputFields": [
            {
              "name": "constraint",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "ENUM",
                  "name": "volunteer_constraint",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "update_columns",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "LIST",
                  "name": null,
                  "ofType": {
                    "kind": "NON_NULL",
                    "name": null,
                    "ofType": {
                      "kind": "ENUM",
                      "name": "volunteer_update_column",
                      "ofType": null
                    }
                  }
                }
              },
              "defaultValue": "[]"
            },
            {
              "name": "where",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "volunteer_bool_exp",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_order_by",
          "description": "Ordering options when selecting data from \"volunteer\".",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "availability",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "current_location",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "donor_transactions_aggregate",
              "description": null,
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "donor_transaction_aggregate_order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "max_distance",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_number",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_type",
              "description": null,
              "type": {
                "kind": "ENUM",
                "name": "order_by",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_pk_columns_input",
          "description": "primary key columns input for table: volunteer",
          "fields": null,
          "inputFields": [
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "volunteer_select_column",
          "description": "select columns of table \"volunteer\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "active",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "availability",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "current_location",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_verified",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_type",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_set_input",
          "description": "input type for updating data in table \"volunteer\"",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "availability",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "current_location",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "max_distance",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_type",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_stddev_fields",
          "description": "aggregate stddev on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_stddev_pop_fields",
          "description": "aggregate stddev_pop on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_stddev_samp_fields",
          "description": "aggregate stddev_samp on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_stream_cursor_input",
          "description": "Streaming cursor of the table \"volunteer\"",
          "fields": null,
          "inputFields": [
            {
              "name": "initial_value",
              "description": "Stream column input with initial value",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "volunteer_stream_cursor_value_input",
                  "ofType": null
                }
              },
              "defaultValue": null
            },
            {
              "name": "ordering",
              "description": "cursor ordering",
              "type": {
                "kind": "ENUM",
                "name": "cursor_ordering",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_stream_cursor_value_input",
          "description": "Initial value of the column from where the streaming should start",
          "fields": null,
          "inputFields": [
            {
              "name": "active",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "availability",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "created_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "current_location",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "email",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "id",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "is_verified",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Boolean",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "kyc_document",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "max_distance",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "name",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "password",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "phone_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "profile_picture",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "rating",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "updated_at",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "timestamp",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_number",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "vehicle_type",
              "description": null,
              "type": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_sum_fields",
          "description": "aggregate sum on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "bigint",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "float8",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "ENUM",
          "name": "volunteer_update_column",
          "description": "update columns of table \"volunteer\"",
          "fields": null,
          "inputFields": null,
          "interfaces": null,
          "enumValues": [
            {
              "name": "active",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "availability",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "created_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "current_location",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "email",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "id",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "is_verified",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "kyc_document",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "name",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "password",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "phone_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "profile_picture",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "updated_at",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_number",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "vehicle_type",
              "description": "column name",
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "possibleTypes": null
        },
        {
          "kind": "INPUT_OBJECT",
          "name": "volunteer_updates",
          "description": null,
          "fields": null,
          "inputFields": [
            {
              "name": "_inc",
              "description": "increments the numeric columns with given value of the filtered values",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "volunteer_inc_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "_set",
              "description": "sets the columns of the filtered rows to the given values",
              "type": {
                "kind": "INPUT_OBJECT",
                "name": "volunteer_set_input",
                "ofType": null
              },
              "defaultValue": null
            },
            {
              "name": "where",
              "description": "filter the rows which have to be updated",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "volunteer_bool_exp",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ],
          "interfaces": null,
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_var_pop_fields",
          "description": "aggregate var_pop on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_var_samp_fields",
          "description": "aggregate var_samp on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        },
        {
          "kind": "OBJECT",
          "name": "volunteer_variance_fields",
          "description": "aggregate variance on columns",
          "fields": [
            {
              "name": "id",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "max_distance",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            },
            {
              "name": "rating",
              "description": null,
              "args": [],
              "type": {
                "kind": "SCALAR",
                "name": "Float",
                "ofType": null
              },
              "isDeprecated": false,
              "deprecationReason": null
            }
          ],
          "inputFields": null,
          "interfaces": [],
          "enumValues": null,
          "possibleTypes": null
        }
      ],
      "directives": [
        {
          "name": "include",
          "description": "whether this query should be included",
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "args": [
            {
              "name": "if",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ]
        },
        {
          "name": "skip",
          "description": "whether this query should be skipped",
          "locations": [
            "FIELD",
            "FRAGMENT_SPREAD",
            "INLINE_FRAGMENT"
          ],
          "args": [
            {
              "name": "if",
              "description": null,
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": null
            }
          ]
        },
        {
          "name": "cached",
          "description": "whether this query should be cached (Hasura Cloud only)",
          "locations": [
            "QUERY"
          ],
          "args": [
            {
              "name": "ttl",
              "description": "measured in seconds",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              "defaultValue": "60"
            },
            {
              "name": "refresh",
              "description": "refresh the cache entry",
              "type": {
                "kind": "NON_NULL",
                "name": null,
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              },
              "defaultValue": "false"
            }
          ]
        }
      ]
    }
  }
}@