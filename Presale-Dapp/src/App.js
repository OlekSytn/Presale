import React, { useEffect, useState } from "react";
import Web3 from "web3";
import Navbar from "./Navbar";
import TokenAbi from './contracts/Tokenabi.json';
import dogetokensaleabi from './contracts/dogetokensale.json'
import Address from './contracts/address.json';

const App = () => {
  const [refresh, setrefresh] = useState(0);

  let content;
  const [loading2, setloading2] = useState(false);

  const [account, setAccount] = useState("");
  const [loading, setLoading] = useState(true);
  const [Hello, setHello] = useState({});

  const [TokenName , setTokenName] = useState("")
  const [TokenSymbol , setTokenSymbol] = useState("")
  const [TokenDecimal , setTokenDecimal] = useState("")
  const [BalanceOfUser , setBalanceOfUser] = useState(0)
  const [TokenSoldInPresale , setTokenSoldInPresale] = useState(0)
  const [TokenPriceInPresale , setTokenPriceInPresale] = useState(0)
  const [TotalSupplyOfTokens , setTotalSupplyOfTokens] = useState(0)
  const [DevTokenAddressInCrowsale , setDevTokenAddressInCrowsale] = useState("")
  const [inputfieldchange,setinputfieldchange] = useState(0)
  const [presalecontractinstance,setpresalecontractinstance] =useState({});


  const [daiContract,setDaiContract] = useState({});
  const [BalanceOfdai,setBalanceOfdai]= useState(0);

  const loadWeb3 = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }  else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  };

  const loadBlockchainData = async () => {
    setLoading(true);
    if (
      typeof window.ethereum == "undefined" 
    ) {
      return;
    }
    const web3 = new Web3(window.ethereum);

   
    const accounts = await web3.eth.getAccounts();

    if (accounts.length == 0) {
      return;
    }
    setAccount(accounts[0]);
    const networkId = await web3.eth.net.getId();
    // window.alert(networkId)
    // const networkData = Helloabi.abi.networks[networkId];
    // console.log(networkData);
    // binance testnet
    if (networkId == 97) {
      // 0x7FA24607EcB6Ca6F2009414ec6669BE34060F256 // address of token
      const daitokencontract = new web3.eth.Contract(TokenAbi.abi,Address.dai);

      let balanceOfDai = await daitokencontract.methods.balanceOf(accounts[0]).call();
      balanceOfDai = await web3.utils.fromWei(balanceOfDai,"ether");
      setBalanceOfdai(balanceOfDai);

      setDaiContract(daitokencontract)
      const devtokencontract = new web3.eth.Contract(TokenAbi.abi,Address.doge);
      const nameoftoken = await devtokencontract.methods.name().call();
     
      // decimal 
      const decimaloftoken = await devtokencontract.methods.decimals().call();
     
      
      // symbol 
      const symboloftoken = await devtokencontract.methods.symbol().call()
  
      
      // totalsupply
      const totalsupplyoftoken = await devtokencontract.methods.totalSupply().call();
      const totalsupplyoftokenindecimals = await web3.utils.fromWei(totalsupplyoftoken,'ether');


      const balanceofuser = await devtokencontract.methods.balanceOf(accounts[0]).call();
      const balanceofuserinwei = await web3.utils.fromWei(balanceofuser,'ether')
   
     

      const presalecontract = new web3.eth.Contract(dogetokensaleabi.abi,Address.crowdsale);
      setpresalecontractinstance(presalecontract)
      const daitokeninpresale = await presalecontract.methods.dogeToken().call();
   
      const tokenpriceofpresale = await presalecontract.methods.tokenprice().call();
      // const tokenpriceofpresaleinether = await web3.utils.fromWei(tokenpriceofpresale,'ether');
  
      const totalsoldofpresale = await presalecontract.methods.totalsold().call();
      const totalsoldofpresaleinether = await web3.utils.fromWei(totalsoldofpresale,'ether');
       
      setTokenName(nameoftoken);
      setTokenDecimal(decimaloftoken)
      setTokenSymbol(symboloftoken)
      setBalanceOfUser(balanceofuserinwei)
      setTokenSoldInPresale(totalsoldofpresaleinether)
      setTotalSupplyOfTokens(totalsupplyoftokenindecimals)
      setTokenPriceInPresale(tokenpriceofpresale)
      setDevTokenAddressInCrowsale(daitokeninpresale)
      setLoading(false);
    } else {
      window.alert("the contract not deployed to detected network.");
      setloading2(true);
    }
  };

  const changeininputfield = (e)=>{
    console.log(e.target.value)
     setinputfieldchange(e.target.value);
  }

  const onsubmit  = async ()=>{
    console.log(parseFloat(inputfieldchange))
    if(parseFloat(inputfieldchange) > 0){
     await  onsendbuytransaction(inputfieldchange)
    }else{
      window.alert("null value not allowed")
    }
  }

  const onsendbuytransaction = async (a) => {
    const web3 = new Web3(window.ethereum);
 
    const amountofDaiinwei = await web3.utils.toWei(a.toString())
    try{
      await daiContract.methods.approve(Address.crowdsale,amountofDaiinwei).send({from : account});
    }catch(e){
      window.alert("error")
      return;
    }
    

    
    await presalecontractinstance
    .methods
    .buyTokens(amountofDaiinwei)
    .send({from:account })
      .once("recepient", (recepient) => {
       window.alert("sucess")
       window.location.reload();
      })
      .on("error", () => {
        window.alert("error ")
      });
    
  };

  const walletAddress = async () => {
    await window.ethereum.request({
      method: "eth_requestAccounts",
      params: [
        {
          eth_accounts: {},
        },
      ],
    });
    window.location.reload();
  };

  useEffect(() => {
    loadWeb3();
    loadBlockchainData();

    if (refresh == 1) {
      setrefresh(0);
      loadBlockchainData();
    }
    //esl
  }, [refresh]);

  if (loading === true) {
    content = (
      <p className="text-center">
        Loading...{loading2 ? <div>loading....</div> : ""}
      </p>
    );
  } else {
    content = (
      <div class="container">
        <main role="main" class="container">
          <div class="jumbotron">
            <h1>Crowdsale</h1>
            {/* <div className="row" style={{ paddingTop: "30px" }}> */}
              {" "}
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3>tokenname : {TokenName}</h3>
              </div>
           
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3>tokensymbol : {TokenSymbol}</h3>
              </div>
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3> decimal : {TokenDecimal}</h3>
              </div>
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3> BalanceOfUser : {BalanceOfUser} doge</h3>
              </div>
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3> BalanceOfUser  : {BalanceOfdai} dai</h3>
              </div>
              
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3> TotalSupplyOfTokens : {TotalSupplyOfTokens}</h3>
              </div>
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3> Doge TokenAddressInCrowsale :</h3> {DevTokenAddressInCrowsale}
              </div>
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3> TokenPriceInPresale : 1 Dai =  {TokenPriceInPresale} Doge</h3>
              </div>
              <div className="row" style={{ paddingLeft: "40px" }}>
                <h3> TokenSoldInPresale : {TokenSoldInPresale}</h3>
              </div>

              <div className="row" style={{ paddingLeft: "40px" }}>
                <input
                 value="0"
                 placeholder="input the dai amount"
                 value={inputfieldchange}
                 onChange={changeininputfield}
                />
                  <button className="btn btn-primary" onClick={onsubmit}>Buy TOken</button>
              </div>
              {/* <div className="row" style={{ paddingLeft: "40px" }}>
                <button className="btn btn-primary">Click on it</button>
              </div> */}
            {/* </div> */}
          </div>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Navbar account={account} />

      {account == "" ? (
        <div className="container">
          {" "}
          Connect your wallet to application{"   "}{" "}
          <button onClick={walletAddress}>metamask</button>
        </div>
      ) : (
        content
      )}
      {/* {content} */}
    </div>
  );
};

export default App;
