/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Users } from './Users';

export type ItemsPosts = {
    id?: number;
    content?: string | null;
    Owner?: (string | Users) | null;
}
