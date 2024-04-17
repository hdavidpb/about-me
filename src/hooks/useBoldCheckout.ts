import { useEffect } from "react";

interface Props{
    orderId:string,
    currency:string,
    amount:string,
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
    

     const checkout = ({amount,currency,description,integritySignature,orderId}:Props) => {
        //@ts-ignore
        const checkoutInstance = new BoldCheckout({
            orderId,
            currency,
            amount,
            apiKey:process.env.NEXT_PUBLIC_BOLD_IDENTITY_KEY,
            redirectionUrl: `${process.env.NEXT_PUBLIC_BACKEND_URL}/succes`,
            integritySignature,
            description,
           });

           return checkoutInstance
     }
    
  return {checkout}


}
