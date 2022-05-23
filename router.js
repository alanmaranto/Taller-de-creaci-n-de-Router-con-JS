class Router {
  constructor(routes) {
    this.routes = routes;
    this._loadInitialRoute();
  }

  _loadInitialRoute() {
    const pathNameSplit = window.location.pathname.split("/");
    const pathSegments = pathNameSplit.length > 1 ? pathNameSplit.slice(1) : "";

    this.loadRoute(...pathSegments);
  }

  _matchUrlToRoute(urlSegments) {
    const matchedRoute = this.routes.find((route) => {
      const routePathSegments = route.path.split("/").slice(1);
      if (routePathSegs.length !== urlSegments.length) {
        return false;
      }
      return routePathSegments.every((routePathSegment, index) => {
        return routePathSegment === urlSegments[index];
      });
    });
    return matchedRoute;
  }
}
