/**
 * Copyright (c) 2020, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
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

import {
    Confirmation,
    FormAttributes,
    ModalInterface,
    Notification,
    Placeholder,
    ValidationInterface
} from "../common";

/**
 * Model for the Console namespace
 */
export interface ConsoleNS {
    common: {
        modals: {
            editAvatarModal: ModalInterface;
            sessionTimeoutModal: ModalInterface;
        };
        placeholders: {
            brokenPage: Placeholder;
        };
        validations: {
            inSecureURL: ValidationInterface;
            unrecognizedURL: ValidationInterface;
        };
    };
    develop: {
        features: {
            applications: {
                confirmations: {
                    clientSecretHashDisclaimer: {
                        modal: Confirmation;
                        forms: {
                           clientIdSecretForm: {
                               clientId: FormAttributes;
                               clientSecret: FormAttributes;
                           };
                        };
                    };
                };
            };
        };
    };
    manage: {
        features: {
            users: {
                confirmations: {
                    terminateAllSessions: Confirmation;
                    terminateSession: Confirmation;
                };
                editUser: {
                    tab: {
                        menuItems: {
                            0: string;
                            1: string;
                            2: string;
                            3: string;
                        };
                    };
                };
                userSessions: {
                    components: {
                        sessionDetails: {
                            actions: {
                                terminateAllSessions: string;
                                terminateSession: string;
                            };
                            labels: {
                                browser: string;
                                deviceModel: string;
                                ip: string;
                                lastAccessed: string;
                                loggedInAs: string;
                                loginTime: string;
                                os: string;
                                recentActivity: string;
                            };
                        };
                    };
                    notifications: {
                        getUserSessions: Notification;
                        terminateAllUserSessions: Notification;
                        terminateUserSession: Notification;
                    };
                    placeholders: {
                        emptyListPlaceholder: Placeholder;
                    };
                };
            };
        };
    };
}
