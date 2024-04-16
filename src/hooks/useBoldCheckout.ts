import { useEffect } from "react";

interface Props{
    orderId:string,
    currency:string,
    amount:string,
    apiKey:string,
    integritySignature:string,
    description:string
}

export const useBoldCheckout = () => {

    const initBoldCheckout = () => {
        if (document.querySelector('script[src="https://checkout.bold.co/library/boldPaymentButton.js"]')) {
            console.warn('Bold Checkout script is already loaded.');
            return;
        }
     
     
        let js;
        js = document.createElement('script');
        js.onload = () => {
            window.dispatchEvent(new Event('boldCheckoutLoaded'));
        };
        js.onerror = () => {
            window.dispatchEvent(new Event('boldCheckoutLoadFailed'));
        };
        js.src = 'https://checkout.bold.co/library/boldPaymentButton.js';
        document.head.appendChild(js);
     };

     useEffect(()=>{
        initBoldCheckout()
     },[])

     //@ts-ignore
    

     const checkout = ({amount,apiKey,currency,description,integritySignature,orderId}:Props) => {
        //@ts-ignore
        const checkoutInstance = new BoldCheckout({
            orderId,
            currency,
            amount,
            apiKey,
            redirectionUrl: "https://claudiaarango.vercel.app",
            integritySignature,
            description,
           });

           return checkoutInstance
     }
    
  return {checkout}


}
