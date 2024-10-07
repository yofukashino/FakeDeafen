import Modules from "./lib/requiredModules";
import AccountDetailsButton from "./Components/AccountDetailsButton";
import AccountProfileItem from "./Components/AccountProfileItem";

export const _addPanelButton = () => (Modules.PanelButton ? <AccountDetailsButton /> : <></>);

export const _addProfileItem = (props) => <AccountProfileItem {...props} />;
