import React from 'react';
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => (localStorage.getItem('token')) ?
                (<Component {...props} />)
                : (
                    <Redirect
                        to={{
                            pathname: "/noAccess",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}

export default PrivateRoute;
