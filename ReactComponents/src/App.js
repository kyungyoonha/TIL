import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const App = () => {
    return (
        <div className="app">
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                        exact={route.exact || false}
                    />
                ))}
            </Switch>
        </div>
    );
};

export default App;
