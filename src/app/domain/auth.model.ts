import { Err } from './err.model';

export interface Auth {
    user?: {};
    userId?: string;
    token?: string;
    err?: Err;
}
