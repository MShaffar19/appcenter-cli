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
 * ...
 *
 */
class AvailabilityOfDevicesResponseIpads {
  /**
   * Create a AvailabilityOfDevicesResponseIpads.
   * @property {number} registered
   * @property {number} available
   * @property {number} maximum
   */
  constructor() {
  }

  /**
   * Defines the metadata of AvailabilityOfDevicesResponseIpads
   *
   * @returns {object} metadata of AvailabilityOfDevicesResponseIpads
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AvailabilityOfDevicesResponse_ipads',
      type: {
        name: 'Composite',
        className: 'AvailabilityOfDevicesResponseIpads',
        modelProperties: {
          registered: {
            required: true,
            serializedName: 'registered',
            type: {
              name: 'Number'
            }
          },
          available: {
            required: true,
            serializedName: 'available',
            type: {
              name: 'Number'
            }
          },
          maximum: {
            required: true,
            serializedName: 'maximum',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = AvailabilityOfDevicesResponseIpads;
