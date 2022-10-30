import ActiveMintsNavbar from "../../components/ActiveMintsNavbar/ActiveMintsNavb";
import { useRouter } from "next/router";
const CardList = () => {
  const navigate = useRouter();
  return (
    <>
      <ActiveMintsNavbar name="Active Mints" />
      <div className="card-list">
        <div className="recent-work">
          <div className="pic">
            {/* <img src={`${props.monster.properties.photo}`} /> */}
            <img src="https://nftstorage.link/ipfs/bafybeieyygnsn6avdojrpzauvlu3huwcdhp73s4w75p4vjrb5xm5gjacvy/0.png" />
          </div>
          <div className="grid-container">
            <div className="grid-item">HackerHouse </div>
            <div className="grid-item">Philadelphia</div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <center>
                <button
                  className="to-map"
                  onClick={() => {
                    navigate.push("/Map/Map0");
                  }}
                >
                  <strong>View {">"}</strong>
                </button>
              </center>
            </div>
          </div>
        </div>
        <div className="recent-work">
          <div className="pic">
            {/* <img src={`${props.monster.properties.photo}`} /> */}
            <img src="https://nftstorage.link/ipfs/bafybeieyygnsn6avdojrpzauvlu3huwcdhp73s4w75p4vjrb5xm5gjacvy/1.png" />
          </div>
          <div className="grid-container">
            <div className="grid-item">ReFi Spring</div>
            <div className="grid-item">Bengaluru</div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <center>
                <button
                  className="to-map"
                  onClick={() => {
                    navigate.push("/Map/Map1");
                  }}
                >
                  <strong>View {">"}</strong>
                </button>
              </center>
            </div>
          </div>
        </div>
        <div className="recent-work">
          <div className="pic">
            {/* <img src={`${props.monster.properties.photo}`} /> */}
            <img src="https://nftstorage.link/ipfs/bafybeieyygnsn6avdojrpzauvlu3huwcdhp73s4w75p4vjrb5xm5gjacvy/2.png" />
          </div>
          <div className="grid-container">
            <div className="grid-item">Eth India</div>
            <div className="grid-item">Bengaluru</div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <center>
                <button
                  className="to-map"
                  onClick={() => {
                    navigate.push("/Map/Map2");
                  }}
                >
                  <strong>View {">"}</strong>
                </button>
              </center>
            </div>
          </div>
        </div>
        <div className="recent-work">
          <div className="pic">
            {/* <img src={`${props.monster.properties.photo}`} /> */}
            <img src="https://nftstorage.link/ipfs/bafybeieyygnsn6avdojrpzauvlu3huwcdhp73s4w75p4vjrb5xm5gjacvy/3.png" />
          </div>
          <div className="grid-container">
            <div className="grid-item">NFT Artwork</div>
            <div className="grid-item">New Delhi</div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <center>
                <button
                  className="to-map"
                  onClick={() => {
                    navigate.push("/Map/Map3");
                  }}
                >
                  <strong>View {">"}</strong>
                </button>
              </center>
            </div>
          </div>
        </div>
        <div className="recent-work">
          <div className="pic">
            {/* <img src={`${props.monster.properties.photo}`} /> */}
            <img src="https://nftstorage.link/ipfs/bafybeieyygnsn6avdojrpzauvlu3huwcdhp73s4w75p4vjrb5xm5gjacvy/4.png" />
          </div>
          <div className="grid-container">
            <div className="grid-item">Web3 Conf</div>
            <div className="grid-item">Goa</div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <center>
                <button
                  className="to-map"
                  onClick={() => {
                    navigate.push("/Map/Map4");
                  }}
                >
                  <strong>View {">"}</strong>
                </button>
              </center>
            </div>
          </div>
        </div>
        <div className="recent-work">
          <div className="pic">
            {/* <img src={`${props.monster.properties.photo}`} /> */}
            <img src="https://nftstorage.link/ipfs/bafybeieyygnsn6avdojrpzauvlu3huwcdhp73s4w75p4vjrb5xm5gjacvy/5.png" />
          </div>
          <div className="grid-container">
            <div className="grid-item">Solana Breakpoint</div>
            <div className="grid-item">Lisbon</div>
            <div className="grid-item"></div>
            <div className="grid-item">
              <center>
                <button
                  className="to-map"
                  onClick={() => {
                    navigate.push("/Map/Map5");
                  }}
                >
                  <strong>View {">"}</strong>
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
