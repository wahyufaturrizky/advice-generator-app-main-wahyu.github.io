import { StateQuoteInterface } from "App";
import { ReactComponent as IconDice } from "assets/images/icon-dice.svg";
import { ReactComponent as Border } from "assets/images/pattern-divider-desktop.svg";
import { ReactComponent as BorderMobile } from "assets/images/pattern-divider-mobile.svg";
import "style/CardQuote.css";

interface CardQuotePropsInterface {
  stateQuote?: StateQuoteInterface;
  isLoading?: boolean;
  onClick?: () => void;
}
const CardQuote = (props: CardQuotePropsInterface) => {
  return (
    <div className="container-card-quote">
      <p className="header-font header-number-id">
        ADVICE # {props.isLoading ? "Loading..." : props.stateQuote?.id}
      </p>
      <p className="quote content-font">
        {props.isLoading ? "Loading..." : props.stateQuote?.advice}
      </p>
      <div className="cotnainer-border-dekstop">
        <Border />
      </div>
      <div className="cotnainer-border-mobile">
        <BorderMobile />
      </div>
      <div onClick={props.onClick} className="container-dice-icon">
        <IconDice />
      </div>
    </div>
  );
};

export default CardQuote;
