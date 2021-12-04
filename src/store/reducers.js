import { combineReducers } from "redux";

const status = (
  state = {
    darkTheme: true,
    modalMenu: { openModal: false, modalType: "menu" },
    electModal: { openElectModal: false, modalData: null },
  },
  action
) => {
  switch (action.type) {
    case "light_mode":
      return { ...state, darkTheme: false };
    case "dark_mode":
      return { ...state, darkTheme: true };
    case "modal_menu":
      return { ...state, modalMenu: { openModal: true, modalType: "menu" } };
    case "modal_connect":
      return {
        ...state,
        modalMenu: { openModal: true, modalType: "connectWallet" },
      };
    case "close_modal":
      return { ...state, modalMenu: { openModal: false, modalType: "menu" } };

    case "popupElection":
      return {
        ...state,
        electModal: { openElectModal: true, modalData: action.payload },
      };
    case "closePopupElection":
      return {
        ...state,
        electModal: { openElectModal: false, modalData: null },
      };

    default:
      return state;
  }
};

export default combineReducers({ status });
