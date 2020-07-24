import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import BusDetails from "./containers/BusDetails/BusDetails";
import CancellationPolicy from "./containers/CancellationPolicy/CancellationPolicy";
import SeatSelection from "./containers/SeatSelection/SeatSelection";

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path="/bus-details" component={BusDetails} />
          <Route path="/cancellation-policy" component={CancellationPolicy} />
          <Route path="/" exact component={SeatSelection} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
