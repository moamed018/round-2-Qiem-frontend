import EmptyHomePage from "./EmptyHomePage";
import { HomeCardsDetails } from "../data";
import NotEmptyHomePage from "../components/NotEmptyHomePage";

function ClientHomePage() {
  return HomeCardsDetails.length > 0 ? <NotEmptyHomePage /> : <EmptyHomePage />;
}

export default ClientHomePage;
