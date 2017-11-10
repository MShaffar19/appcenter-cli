/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ExportConfigurationListResult class.
 * @constructor
 * List of export configurations
 *
 * @member {array} values
 * 
 * @member {number} [total] the total count of exports
 * 
 * @member {string} [nextLink]
 * 
 */
function ExportConfigurationListResult() {
}

/**
 * Defines the metadata of ExportConfigurationListResult
 *
 * @returns {object} metadata of ExportConfigurationListResult
 *
 */
ExportConfigurationListResult.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExportConfigurationListResult',
    type: {
      name: 'Composite',
      className: 'ExportConfigurationListResult',
      modelProperties: {
        values: {
          required: true,
          serializedName: 'values',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'ExportConfigurationResultElementType',
                type: {
                  name: 'Composite',
                  className: 'ExportConfigurationResult'
                }
            }
          }
        },
        total: {
          required: false,
          serializedName: 'total',
          type: {
            name: 'Number'
          }
        },
        nextLink: {
          required: false,
          serializedName: 'nextLink',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ExportConfigurationListResult;