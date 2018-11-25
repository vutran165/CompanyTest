import { RouteReuseStrategy, DetachedRouteHandle } from '@angular/router/src/route_reuse_strategy';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';


export class DefaultRouteReuseStrategy implements RouteReuseStrategy {

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    store(route: ActivatedRouteSnapshot, deatached: DetachedRouteHandle): void {
    }


    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        return false;
    }

    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        return null;
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
        return future.routeConfig === curr.routeConfig;
    }




}


@Injectable()
export class CustomRouteReuseStrategy extends DefaultRouteReuseStrategy {
    shouldReuseRoute(future: ActivatedRouteSnapshot, current: ActivatedRouteSnapshot): boolean {
        const name = future.component && (<any>future.component).name;
        return super.shouldReuseRoute(future, current) && name !== 'ServiceComponent';
    }
}
