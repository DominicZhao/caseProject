import { NgModule } from '@angular/core';
import { StoreModule, ActionReducerMap, MetaReducer, createSelector, createFeatureSelector } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { StoreRouterConnectingModule, routerReducer, RouterReducerState, RouterStateSerializer } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { CustomSerializer, RouterStateUrl } from './custom-route-serializer';
import { Auth } from '../domain';
import * as fromAuth from './auth.reducer';

export interface State {
    auth: Auth;
}

export const reducers: ActionReducerMap<State> = {
    auth: fromAuth.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [storeFreeze] : [];

export const selectReducerState = createFeatureSelector<RouterReducerState<RouterStateUrl>>('router');

export const getRouterInfo = createSelector(selectReducerState, state => state.state);

@NgModule({
    imports: [
        StoreModule.forRoot(reducers, { metaReducers }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        StoreRouterConnectingModule,
    ],
    providers: [{ provide: RouterStateSerializer, useClass: CustomSerializer }],
})
export class AppStoreModule { }
