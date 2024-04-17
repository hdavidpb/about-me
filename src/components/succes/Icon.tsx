import { PaymentStatus } from "@/interfaces/transactions.interface"

export const StatusIcon = ({status}:{status:PaymentStatus}) => {

    const generateIcon = ()=>{
        if(status === PaymentStatus.APPROVED) return <svg width={70} height={70} viewBox="0 0 48 48"><defs><mask id="IconifyId18eea7f3103aa22c45"><g fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4"><path fill="#fff" stroke="#fff" d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z"/><path stroke="#000" d="m17 24l5 5l10-10"/></g></mask></defs><path fill="#059669" d="M0 0h48v48H0z" mask="url(#IconifyId18eea7f3103aa22c45)"/></svg>
        if(status === PaymentStatus.PENDING || status === PaymentStatus.PROCESSING) return <svg width={70} height={70} viewBox="0 0 256 256"><path fill="#eab308" d="M236.8 188.09L149.35 36.22a24.76 24.76 0 0 0-42.7 0L19.2 188.09a23.51 23.51 0 0 0 0 23.72A24.35 24.35 0 0 0 40.55 224h174.9a24.35 24.35 0 0 0 21.33-12.19a23.51 23.51 0 0 0 .02-23.72M120 104a8 8 0 0 1 16 0v40a8 8 0 0 1-16 0Zm8 88a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/></svg>
        if(status === PaymentStatus.FAILED || status === PaymentStatus.REJECTED) return  <svg width={70} height={70} viewBox="0 0 512 512"><path fill="#e11d48" d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240s240-107.45 240-240S388.55 16 256 16m0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256S156.59 76 256 76m-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125l-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125l73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z"/></svg>
        return  <svg width={70} height={70} viewBox="0 0 24 24"><path fill="none" stroke="#ea580c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4m0 4.01l.01-.011M9 3H4v3m0 5v2m16-2v2M15 3h5v3M9 21H4v-3m11 3h5v-3"/></svg>
    }
  return (
    generateIcon()
  )
}

