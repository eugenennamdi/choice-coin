import MainPage from "./MainPage";
import PopFromBottomModal from "./statics/PopFromBottomModal";
import OverlayElectionModal from "./statics/OverlayElectionModal";

import stores from "./store/stores";
import { Provider as ReduxProvider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <ReduxProvider store={stores}>
      <Router>
        <MainPage />

        <PopFromBottomModal />

        <OverlayElectionModal />
      </Router>
    </ReduxProvider>
  );
};

export default App;
