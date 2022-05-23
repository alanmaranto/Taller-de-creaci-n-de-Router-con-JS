class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  loadRoute(...urlSegments) {
    const matchedRoute = this._matchUrlToRoute(urlSegments);

    const url = `/${urlSegments.join('/')}`;
    history.pushState({}, 'url', url);

    const routerOutElement = document.querySelectorAll('[data-router]')[0];
    routerOutElement.innerHTML = matchedRoute.template
  }

  _loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split("/");
    const pathSegments = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : "";

    this.loadRoute(...pathSegments);
  }

  _matchUrlToRoute(urlSegments) {
    const matchedRoute = this.routes.find((route) => {
      const routePathSegments = route.path.split("/").slice(1);
      if (routePathSegments.length !== urlSegments.length) {
        return false;
      }
      return routePathSegments.every((routePathSegment, index) => {
        return routePathSegment === urlSegments[index];
      });
    });
    return matchedRoute;
  }
}
