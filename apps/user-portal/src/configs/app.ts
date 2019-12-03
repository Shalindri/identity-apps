/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

type ServiceEndpointURLType = string;

interface ServiceResourcesType {
    applications: string;
    associations: string;
    authorize: string;
    challenges: string;
    challengeAnswers: string;
    consents: string;
    fidoEnd: string;
    fidoMetaData: string;
    fidoStart: string;
    jwks: string;
    logout: string;
    me: string;
    pendingApprovals: string;
    profileSchemas: string;
    receipts: string;
    sessions: string;
    token: string;
    user: string;
    revoke: string;
    wellKnown: string;
}

export const ServiceEndpoint: ServiceEndpointURLType = SERVER_HOST;
export const ServiceResourcesEndpoint: ServiceResourcesType = {
    applications: `${ServiceEndpoint}/t/carbon.super/api/users/v1/me/applications`,
    associations: `${ServiceEndpoint}/api/users/v1/me/associations`,
    authorize: `${ServiceEndpoint}/oauth2/authorize`,
    challengeAnswers: `${ServiceEndpoint}/api/users/v1/me/challenge-answers`,
    challenges: `${ServiceEndpoint}/api/users/v1/me/challenges`,
    consents: `${ServiceEndpoint}/api/identity/consent-mgt/v1.0/consents`,
    fidoEnd: `${ServiceEndpoint}/api/users/v1/me/webauthn/finish-registration`,
    fidoMetaData: `${ServiceEndpoint}/api/users/v1/me/webauthn`,
    fidoStart: `${ServiceEndpoint}/api/users/v1/me/webauthn/start-registration`,
    jwks: `${ServiceEndpoint}/oauth2/jwks`,
    logout: `${ServiceEndpoint}/oidc/logout`,
    me: `${ServiceEndpoint}/scim2/Me`,
    pendingApprovals: `${ServiceEndpoint}/t/carbon.super/api/users/v1/me/approval-tasks`,
    profileSchemas: `${ServiceEndpoint}/scim2/Schemas`,
    receipts: `${ServiceEndpoint}/api/identity/consent-mgt/v1.0/consents/receipts`,
    revoke: `${ServiceEndpoint}/oauth2/revoke`,
    sessions: `${ServiceEndpoint}/t/carbon.super/api/users/v1/me/sessions`,
    token: `${ServiceEndpoint}/oauth2/token`,
    user: `${ServiceEndpoint}/api/identity/user/v1.0/me`,
    wellKnown: `${ServiceEndpoint}/oauth2/oidcdiscovery/.well-known/openid-configuration`
};
