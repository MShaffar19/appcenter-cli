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

/**
 * Class representing a UpdateCheckOKResponseUpdateInfo.
 */
class UpdateCheckOKResponseUpdateInfo {
  /**
   * Create a UpdateCheckOKResponseUpdateInfo.
   * @property {string} [appVersion]
   * @property {string} [description]
   * @property {boolean} [isDisabled]
   * @property {boolean} [isMandatory]
   * @property {number} [rollout]
   * @property {string} [downloadURL]
   * @property {boolean} isAvailable
   * @property {number} [packageSize]
   * @property {boolean} [shouldRunBinaryVersion]
   * @property {boolean} [updateAppVersion]
   * @property {string} [packageHash]
   * @property {string} [label]
   */
  constructor() {
  }

  /**
   * Defines the metadata of UpdateCheckOKResponseUpdateInfo
   *
   * @returns {object} metadata of UpdateCheckOKResponseUpdateInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'UpdateCheckOKResponse_updateInfo',
      type: {
        name: 'Composite',
        className: 'UpdateCheckOKResponseUpdateInfo',
        modelProperties: {
          appVersion: {
            required: false,
            serializedName: 'appVersion',
            type: {
              name: 'String'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          isDisabled: {
            required: false,
            serializedName: 'isDisabled',
            type: {
              name: 'Boolean'
            }
          },
          isMandatory: {
            required: false,
            serializedName: 'isMandatory',
            type: {
              name: 'Boolean'
            }
          },
          rollout: {
            required: false,
            serializedName: 'rollout',
            type: {
              name: 'Number'
            }
          },
          downloadURL: {
            required: false,
            serializedName: 'downloadURL',
            type: {
              name: 'String'
            }
          },
          isAvailable: {
            required: true,
            serializedName: 'isAvailable',
            type: {
              name: 'Boolean'
            }
          },
          packageSize: {
            required: false,
            serializedName: 'packageSize',
            type: {
              name: 'Number'
            }
          },
          shouldRunBinaryVersion: {
            required: false,
            serializedName: 'shouldRunBinaryVersion',
            type: {
              name: 'Boolean'
            }
          },
          updateAppVersion: {
            required: false,
            serializedName: 'updateAppVersion',
            type: {
              name: 'Boolean'
            }
          },
          packageHash: {
            required: false,
            serializedName: 'packageHash',
            type: {
              name: 'String'
            }
          },
          label: {
            required: false,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = UpdateCheckOKResponseUpdateInfo;
