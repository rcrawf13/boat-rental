import { createContext, type Dispatch, type SetStateAction} from "react";
// active,setActive,setCurrentPrice
interface  ActivePriceContextTypes {
    active:number;
    setActive: Dispatch<SetStateAction<number>>;
    currentPrice:string;
    setCurrentPrice: Dispatch<SetStateAction<string>>;
}

const ActivePriceContext = createContext<ActivePriceContextTypes>({
    active:2,
    setActive: () => {},
    currentPrice:'$200.00',
    setCurrentPrice: () => {}
});

export default ActivePriceContext;