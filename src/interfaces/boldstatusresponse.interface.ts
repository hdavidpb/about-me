import { PaymentStatus } from "./transactions.interface";

export interface BoldStatusResponse {
    link_id:          string;
    transaction_id?:   string;
    total:            number;
    subtotal:         number;
    description:      string;
    reference_id:     string;
    payment_method?:   string;
    payer_email?:      string;
    transaction_date?: Date;
    payment_status:   PaymentStatus;
    error?:boolean,
    message?:string
}