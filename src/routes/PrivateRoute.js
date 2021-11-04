import { css } from "@emotion/react";
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import HashLoader from "react-spinners/HashLoader";
import useAuth from '../hooks/useAuth';

const override = css`
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  margin: 0 auto;
  border-color: red;
`;

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <HashLoader color="#ef4444" css={override} size={80} />
            </div>
        )
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.displayName ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/register",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute