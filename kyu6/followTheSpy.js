Description:

We are tracking down our rogue agent Matthew Knight A.K.A. Roy Miller and he travels from places to places to avoid being tracked. Each of his travels are based on a list of itineraries in an unusual or incorrect order. The task is to determine the routes he will take in his every journey. You are given an array of routes of his itineraries. List down only the places where he will go.

Example:

routes = [[USA, BRA], [JPN, PHL], [BRA, UAE], [UAE, JPN]]

result: "USA, BRA, UAE, JPN, PHL"

note: It is safe to assume that there will be no repeating place with different route and there are no empty routes and could have at least one (1) route (from one waypoint to another).
ALGORITHMS


// it should return the places from the given routes
function findRoutes(routes) {
    if (routes.length > 1) {
        var currentstop = currentLocation(routes);
        let remainingRoutes = routes.filter((route)=>{return !(route[0] == currentstop)});
        return currentstop + ', ' + findRoutes(remainingRoutes);
    } else {
        return routes[0][0] + ', ' + routes[0][1];
    }  
}

function currentLocation(routes){
    let stops = routes.map((route)=>{return route[1]});
    return routes.filter((route)=>{return !stops.includes(route[0])})[0][0];
}
