import { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../wallet/Connector";
import web3 from "web3";

function Banksy() {
  const [minting, setMinting] = useState(false);
  const { active, account, library, activate } = useWeb3React()

  // Main Banner Image
 
  // Apes Image Data
  const notBanksy = [
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' },
    { img: 'https://storageapi.fleek.co/jethrodw-team-bucket/not-banksy.jpeg' }
  ]
  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex)
    }
  }
  // async function disconnect() {
  //   try {
  //     deactivate()
  //   } catch (ex) {
  //     console.log(ex)
  //   }
  // }

  async function mint() {
    setMinting(true);
    const myAccount = "0x24c049A840ae88DC64eD73C4f47daC089a3B1e7C"; //Account to receive payment
    const price = "0.05"; // This is the price in ETH

    let obj = {
      to: myAccount,
      from: account,
      value: web3.utils.toWei(price, "ether"), // Needs to be converted to Wei units
      gas: 85000, // Eth ⛽ price
      gasLimit: "100000"
    };

    await library.eth.sendTransaction(obj, async (e, tx) => {
      if (e) {
        alert(`Something went wrong! Try switching accounts - ${e}`);
        console.log("ERROR->", e);
        setMinting(false);
      } else {
        setMinting(false);
      }
    });
  }

  return (
    <div className="App">

      {/* MAIN BANNER */}
      <div className="profileInfo">
        <a href="/" className="back-home">BACK TO MAIN PAGE</a>
        <h2 className="banksySubHeading">NOT BANKSY // A LTD. COLLECTION OF 100 NFTS, MINT PRICE 0.05E</h2>
      </div>
      {/* BANKSY LIST */}
      <div className="cards-wrapper">
        {notBanksy.map((banksy, index) => (
          <div className="cards-item" key={index}>
            <div className="img-wrapper">
            <img src={banksy.img} alt={`not-banksy_${index}`} />
            </div>
            <div className="btn-wrapper">
              {(active) ?
                <button type="button" disabled={minting} onClick={mint} className="sm-mint-button">{(minting) ? 'Waiting confirmation.' : 'Mint'}</button>
                : <button type="button" onClick={connect} className="sm-mint-button">Connect Wallet To Mint</button>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banksy;
