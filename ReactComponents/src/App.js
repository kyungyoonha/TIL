import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/Layout";

const App = () => {
    return (
        <Switch>
            {routes.map((route) => (
                <Route
                    key={route.path}
                    path={route.path}
                    exact={route.exact || false}
                    render={(props) => (
                        <Layout>
                            <route.component {...props} />
                        </Layout>
                    )}
                />
            ))}
        </Switch>
    );
};

export default App;
