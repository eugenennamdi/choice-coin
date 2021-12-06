import { Suspense } from "react";
import stores from "./store/stores";
import loadable from "@loadable/component";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const MainPage = loadable(() => import("./MainPage"));
const PopFromBottomModal = loadable(() =>
  import("./statics/PopFromBottomModal")
);
const OverlayElectionModal = loadable(() =>
  import("./statics/OverlayElectionModal")
);

const renderLoader = () => <p></p>;

const App = () => {
  return (
    <Suspense fallback={renderLoader()}>
      <ReduxProvider store={stores}>
        <Router>
          <MainPage />

          <PopFromBottomModal />

          <OverlayElectionModal />
        </Router>
      </ReduxProvider>
    </Suspense>
  );
};

export default App;
