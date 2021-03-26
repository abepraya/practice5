import { Route, Switch } from "react-router-dom";
import { Home, About, Auth } from "./pages";
import React from "react";
import Layout from "./pages/Layout/Layout";
import SignUp from "./pages/Auth/SignUp/SignUp";

const app = () => {
  return (
    <div>
       <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/auth" component={Auth} />
          <Route path="/signup" component={SignUp} />
        </Switch>
       </Layout>
    </div>
  );
};

export default app;
