import "../components/Landing/Landing.css";
import "../components/Popup/Popup.css";
import "../components/ActiveMintsNavbar/ActiveMintsNavbar.css";
import "./CardList/CardsList.css";
import "../styles/globals.css";
import "../components/Drawer/Drawer.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "../components/Navbars/ActiveMintsNavbars.css";
import "../styles/App.css";
import "../styles/CandyMachine.css";
import "../styles/CountdownTimer.css";
import "@solana/wallet-adapter-react-ui/styles.css";

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
