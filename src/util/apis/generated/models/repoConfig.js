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
 * Class representing a RepoConfig.
 * @extends models['RepoConfigPostRequest']
 */
class RepoConfig extends models['RepoConfigPostRequest'] {
  /**
   * Create a RepoConfig.
   * @property {string} id Repository configuration identifier
   * @property {string} type Type of repository
   * @property {string} state State of the configuration. Possible values
   * include: 'unauthorized', 'inactive', 'active'
   * @property {string} [userEmail] Email of the user who linked the repository
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of RepoConfig
   *
   * @returns {object} metadata of RepoConfig
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RepoConfig',
      type: {
        name: 'Composite',
        className: 'RepoConfig',
        modelProperties: {
          repoUrl: {
            required: false,
            serializedName: 'repo_url',
            type: {
              name: 'String'
            }
          },
          repoId: {
            required: false,
            serializedName: 'repo_id',
            type: {
              name: 'String'
            }
          },
          externalUserId: {
            required: false,
            serializedName: 'external_user_id',
            type: {
              name: 'String'
            }
          },
          serviceConnectionId: {
            required: false,
            serializedName: 'service_connection_id',
            type: {
              name: 'String'
            }
          },
          installationId: {
            required: false,
            serializedName: 'installation_id',
            type: {
              name: 'String'
            }
          },
          id: {
            required: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          state: {
            required: true,
            serializedName: 'state',
            type: {
              name: 'String'
            }
          },
          userEmail: {
            required: false,
            serializedName: 'user_email',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RepoConfig;
