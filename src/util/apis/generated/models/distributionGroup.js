/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a DistributionGroup.
 * @extends models['DistributionGroupWithoutIsLatest']
 */
class DistributionGroup extends models['DistributionGroupWithoutIsLatest'] {
  /**
   * Create a DistributionGroup.
   * @property {boolean} [isLatest] Is the containing release the latest one in
   * this distribution group.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of DistributionGroup
   *
   * @returns {object} metadata of DistributionGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DistributionGroup',
      type: {
        name: 'Composite',
        className: 'DistributionGroup',
        modelProperties: {
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          isLatest: {
            required: false,
            serializedName: 'is_latest',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = DistributionGroup;
