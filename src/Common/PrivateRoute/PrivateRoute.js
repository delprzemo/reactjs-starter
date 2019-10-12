import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux'

function PrivateRoute({ component: Component, ...rest }) {
    const token = useSelector(state => state.account.token);
    return (
        <Route
            {...rest}
            render={(props) => (token) ?
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
