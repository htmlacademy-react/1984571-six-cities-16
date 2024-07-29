import MainPage from '../../pages/main-page/main-page';

type AppOffersProps = {
  offersNumber: number;
}
function App({offersNumber}: AppOffersProps): JSX.Element {
  return(
    <MainPage offersNumber={offersNumber} />
  );
}

export default App;
