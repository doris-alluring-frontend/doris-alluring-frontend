function Card({src, desc, productName,amount, type}) {
    return <div className={`${type}-card card `}>

        <img src={src} alt="..." className={`${type}-image card-img-top`} />

        <div className={`${type}-body card-body px-2`}>
            <p className="card-text ts-16 tw-275">
                {productName}
            </p>
            <p className="card-text tw-275">
                {desc}
            </p>
           

        </div>

        <div className="order d-flex justify-content-center justify-content-lg-start mx-2">
            <div className="amount border rounded-3 d-flex align-items-center justify-content-center ">
              <p className="amount-text text-dark m-0 ts-16 tw-600 ">{amount}</p>
            </div>

            <div className="cart border ms-3 rounded-3 d-flex align-items-center justify-content-center ">
                <svg className="cart-icon" width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.125 23.25C7.33333 23.25 6.65625 22.9633 6.09375 22.39C5.53125 21.8167 5.25 21.1346 5.25 20.3437V8.75L2.96875 3.25H0.25V0.75H4.65625L6.71875 5.75H25.1875C25.6667 5.75 26.0312 5.94792 26.2812 6.34375C26.5313 6.73958 26.5417 7.14583 26.3125 7.5625L22.75 14.5312C23.8125 14.6979 24.7033 15.1875 25.4225 16C26.1417 16.8125 26.5008 17.7708 26.5 18.875C26.5 20.0833 26.0783 21.1146 25.235 21.9687C24.3917 22.8229 23.365 23.25 22.155 23.25C20.9258 23.25 19.8896 22.8229 19.0463 21.9687C18.2029 21.1146 17.7812 20.0833 17.7812 18.875C17.7812 18.4583 17.8333 18.0729 17.9375 17.7188C18.0417 17.3646 18.1875 17.0208 18.375 16.6875L14.2812 16.3125L10.5312 21.9375C10.2604 22.3542 9.91125 22.6771 9.48375 22.9062C9.05625 23.1354 8.60333 23.25 8.125 23.25ZM8.15625 20.7187C8.19792 20.7187 8.29167 20.6667 8.4375 20.5625L11.4688 16.0625C10.4479 15.9583 9.64583 15.7137 9.0625 15.3287C8.47917 14.9437 8.04167 14.5425 7.75 14.125V20.375C7.75 20.4792 7.79167 20.5625 7.875 20.625C7.95833 20.6875 8.05208 20.7187 8.15625 20.7187ZM22.125 20.75C22.6667 20.75 23.1146 20.5675 23.4688 20.2025C23.8229 19.8375 24 19.395 24 18.875C24 18.3333 23.8229 17.8854 23.4688 17.5312C23.1146 17.1771 22.6667 17 22.125 17C21.6042 17 21.1613 17.1771 20.7962 17.5312C20.4312 17.8854 20.2492 18.3333 20.25 18.875C20.25 19.3958 20.4325 19.8387 20.7975 20.2037C21.1625 20.5687 21.605 20.7508 22.125 20.75Z" fill="#C92E81"/>
                </svg>
            </div>
        </div>

    </div>
}


export default Card;