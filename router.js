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
}
