import { render } from "../core/render";
import { RegisterForm } from "../views/RegisterForm";

export function router() {
    const [,route, params] = location.hash.split('/')  || '/login'
    console.log(route);
    

    /* Validate if the user is logged in to access the app */
    /* Not logged in, cannot access routes within the app */
    /* TODO: Implement validation */

    /* logged in, do not allow login and registration routes */
    /* TODO: Implement validation */

    const routes = {
        'register': {
            view: RegisterForm,
            role: null
        }
    }

    const routeConfig = routes[route]


    /* If the route does not exist, use a default route */
    if (!routeConfig) {
        location.hash = '/login' //default route -- CHANGE
        return
    }

    render(routeConfig.view())
}