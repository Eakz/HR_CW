// https://www.codewars.com/kata/5a9c0fa45084d79b1f000138/solutions/javascript

const React = require("react");

// Don't change PcDisplay
const PcDisplay = props => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p id="price">£{props.price}</p>
            <ul>
                <li>
                    <label>CPU</label> <span>{props.cpu}</span>
                </li>
                <li>
                    <label>RAM</label> <span>{props.ram}</span>
                </li>
                <li>
                    <label>SSD</label> <span>{props.ssd}</span>
                </li>
            </ul>
        </div>
    );
};

const withPriceModel = (C, priceDiff = 0) => {
    const startPrice = 50;

    function wrap(props) {
        const { price, ...passThroughProps } = props;
        return <C price={startPrice + priceDiff} {...passThroughProps} />;
    }

    return wrap;
};

const BasicModel = withPriceModel(PcDisplay);
const ProModel = withPriceModel(PcDisplay, 60);
