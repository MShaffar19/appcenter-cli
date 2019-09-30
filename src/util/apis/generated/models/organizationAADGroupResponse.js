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
 * Class representing a OrganizationAADGroupResponse.
 */
class OrganizationAADGroupResponse {
  /**
   * Create a OrganizationAADGroupResponse.
   * @property {uuid} aadGroupId The id of the aad group
   * @property {uuid} azureAadGroupId The azure id of the aad group
   * @property {string} role The role the user has within the organization
   * @property {string} displayName The display name of the aad group
   */
  constructor() {
  }

  /**
   * Defines the metadata of OrganizationAADGroupResponse
   *
   * @returns {object} metadata of OrganizationAADGroupResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'OrganizationAADGroupResponse',
      type: {
        name: 'Composite',
        className: 'OrganizationAADGroupResponse',
        modelProperties: {
          aadGroupId: {
            required: true,
            serializedName: 'aad_group_id',
            type: {
              name: 'String'
            }
          },
          azureAadGroupId: {
            required: true,
            serializedName: 'azure_aad_group_id',
            type: {
              name: 'String'
            }
          },
          role: {
            required: true,
            serializedName: 'role',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: true,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = OrganizationAADGroupResponse;
