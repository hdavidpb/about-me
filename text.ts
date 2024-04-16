
export const hashBuffer = async (text:Uint8Array)=>{
   const hashBuffer =  await crypto.subtle.digest('SHA-256', text);
   const hashArray = Array.from(new Uint8Array(hashBuffer));
   const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

   return hashHex
}
