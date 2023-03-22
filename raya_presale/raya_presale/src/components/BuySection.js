import React from 'react';
import ReactDOM from'react-dom';
import RightArrow from '../assets/image/right-arrow.svg';

const BuySection = () => {
    return (
            <section class="section section-highlight">
                <div class="container">
                    <div class="section-title max-title">
                        <h3>RAYACANTO PRE-SALE</h3>
                    </div>
                    <p class="lead p-3 centered-text text-center mx-auto">Raya Token Pool is a fixed token economy set by
                        the demand of the Coin Token Main Sale, which concluded on
                        May 20
                    </p>
                    <div class="text-center">
                        <div class="countdown-clock flipclock-wrapper" data-datetime="March 20, 2023 10:30:00"></div>
                    </div>

                    <div class="progress-area">
                        <div class="row">
                            <div class="col-2 col-md-1 text-right">
                                <span> %0 </span>
                            </div>
                            <div class="col-8 col-md-10">
                                <div class="progress">
                                    <div class="progress-bar bg-gradient" role="progressbar" style={{ width:"0px"}} aria-valuenow="75"
                                    aria-valuemin="0" aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <div class="col-2 col-md-1 text-left">
                                <span> %100 </span>
                            </div>
                        </div>
                    </div>

                    <div class="row text-center">
                        <div class="col">
                            <h6 class="text-info">
                                POOL SUPPLY
                            </h6>
                            <h3 class="display-5 mb-5">2,280,000</h3>
                        </div>
                        <div class="col">
                            <h6 class="text-info">
                                PRE-SALE PRICE
                            </h6>
                            <h3 class="display-5 mb-5">0.02$</h3>

                        </div>
                        <div class="col">
                            <h6 class="text-info">
                                TOTAL SUPPLY
                            </h6>
                            <h3 class="display-5 mb-5">400,000,000</h3>
                        </div>
                    </div>

                    <div class="text-center">
                        <div class="btn btn-lg btn-primary mt-7">
                            <a href="https://payment.rayacanto.com" className='flex flex-row justify-end'>
                                <font color="#ffffff" className="mr-2"><b>Buy Raya Token</b></font>
                                <img src={RightArrow} alt="arrow" />
                            </a>
                        </div>
                        <div class="text-muted my-3">
                            Limited supply: after sale ends, coin obtained only through mining & exchanges
                        </div>
                        <div class="btn btn-lg btn-primary mt-8"><a href="https://rayacanto.gitbook.io/tokenomics/raya-economy/usdraya-tokenomics" >
                            Tokenomic
                            <img src={RightArrow} alt="arrow" style = {{display:"inline-block", marginLeft:"2px"}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

    )
}
export default BuySection;