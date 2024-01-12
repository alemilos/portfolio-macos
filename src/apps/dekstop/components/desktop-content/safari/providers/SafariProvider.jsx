import { createContext, useContext, useEffect, useRef, useState } from "react";
import { contains, isNully } from "../../../../services/utils/strings";

const SafariContext = createContext();

// Pages
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import RoutingPage from "../pages/RoutingPage";

// Wrappers
import ProjectPage from "../pages/project-page/ProjectPage";

const PAGES = {
  home: {
    route: "home",
    component: <Home />,
  },
  notFound: {
    route: "notfound",
    component: <NotFound />,
  },
};

const ROUTE_TYPES = {
  DEFAULT: "DEFAULT",
  PROJECT: "PROJECT",
};

const ROUTE_TYPE_TO_PAGE_WRAPPER = {
  PROJECT: (route) => <ProjectPage route={route} />,
};

export class Route {
  constructor(route, type) {
    this.route = route;

    if (Object.keys(ROUTE_TYPES).includes(type)) {
      this.type = type;
    } else {
      throw new Error("Type does not exist for Route");
    }
  }
}

function SafariProvider({ children }) {
  const [history, setHistory] = useState([]); // begin in home page
  const [historyIndex, setHistoryIndex] = useState(null);
  const [routes, setRoutes] = useState([]); // available pages
  const [currentPage, setCurrentPage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Initialize the current page
  useEffect(() => {
    setHistory([PAGES.home.route]);
    setHistoryIndex(0);
    setCurrentPage(PAGES.home.component);
  }, []);

  /**
   * Changes to the page
   * @param {string} route - The route string.
   * @param {string} type - The page type (project, ...).
   */
  function changePage(route) {
    if (loading) throw new Error("already changing page"); // fixes the undefined page
    setLoading(true);
    setTimeout(() => {
      if (routeExists(route)) {
        // history update
        const page = pageFromRoute(route);
        setHistory((prev) => {
          return [...prev.slice(0, historyIndex + 1), route];
        });
        setHistoryIndex((prev) => prev + 1);
        setCurrentPage(page);
      } else {
        // history update for not found page
        setHistory((prev) => {
          return [...prev.slice(0, historyIndex + 1), PAGES.notFound.route];
        });
        setHistoryIndex((prev) => prev + 1);
        setCurrentPage(PAGES.notFound.component);
      }

      setLoading(false);
    }, 1000);
  }

  /**
   * Go to previous page by clicking left arrow
   */
  function previousPage() {
    if (historyIndex > 0) {
      setHistoryIndex((prev) => prev - 1);
      const page = pageFromRoute(history[historyIndex - 1]);
      setCurrentPage(page);
    }
  }

  /**
   * Go to next page by clicking right arrow
   */
  function nextPage() {
    if (historyIndex < history.length - 1) {
      setHistoryIndex((prev) => prev + 1);
      const page = pageFromRoute(history[historyIndex + 1]);
      setCurrentPage(page);
    }
  }

  function navigateHistory(direction) {
    if (direction === "back") {
      previousPage();
    } else if (direction === "forward") {
      nextPage();
    }
  }

  /**
   * Initialize Array of Routes for routes state
   * @param {Route} routes
   */
  function initializeRoutes(routes) {
    let defaultRoutes = [PAGES.home.route, PAGES.notFound.route].map(
      (route) => new Route(route, "DEFAULT")
    );
    setRoutes(defaultRoutes.concat(routes));
  }

  // check if route exists in routes
  function routeExists(route) {
    if (typeof route === "string") {
      route = new Route(route, "DEFAULT");
    }
    const routesList = routes.map((route) => route.route);
    return routesList.includes(route.route);
  }

  // get page from route name
  function pageFromRoute(routeName) {
    const route = routes.filter((route) => routeName === route.route)[0];
    if (route.type === ROUTE_TYPES.DEFAULT) {
      if (routeName === PAGES.home.route) {
        return PAGES.home.component;
      }
      if (routeName === PAGES.notFound.route) {
        return PAGES.notFound.component;
      }
    } else {
      return ROUTE_TYPE_TO_PAGE_WRAPPER[route.type](routeName);
    }
  }

  function checkMatchingRoutes(text) {
    if (isNully(text)) return [];
    return routes
      .filter(
        (route) => contains(route.route, text) && route.route !== "notfound"
      )
      .map((route) => route.route);
  }

  // When loading a new page, simulate a blank page
  useEffect(() => {
    if (loading) {
      setCurrentPage(<RoutingPage />);
    }
  }, [loading]);

  return (
    <SafariContext.Provider
      value={{
        initializeRoutes,
        currentPage,
        changePage,
        loading,
        history,
        checkMatchingRoutes,
        historyIndex,
        navigateHistory,
      }}
    >
      {children}
    </SafariContext.Provider>
  );
}

export function useSafari() {
  const ctx = useContext(SafariContext);
  if (!ctx) throw new Error("useSafari must be used within SafariProvider");
  return ctx;
}

export default SafariProvider;
