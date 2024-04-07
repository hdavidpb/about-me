
export const Footer = () => {
  return (
    <footer className="w-full h-auto md:h-[80px] flex justify-center items-center px-8 py-6 md:py-0 gap-7 md:flex-row flex-col">
    <div className="flex md:justify-start justify-end items-center order-2 md:order-1 self-end md:self-auto">
      <span className="text-xs">Creado con amor en Next.js ❤️</span>
    </div>
    <div className=" flex-1 flex justify-end items-center gap-6 text-xs md:text-sm flex-col md:flex-row order-1 md:order-2">
      <div className="flex justify-center items-center gap-1">
        <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round" > <path stroke="none" d="M0 0h24v24H0z" fill="none" />{" "} <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />{" "} <path d="M15 7a2 2 0 0 1 2 2" />{" "} <path d="M15 3a6 6 0 0 1 6 6" />{" "} </svg>
        <span> +57 302 3842288</span>
      </div>
      <div className="flex justify-center items-center gap-1"> 
      <svg width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /> <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28" /> </svg>
       <span> hernan.plazabs@gmail.com</span> 
       </div>
      <div className="flex justify-center items-center gap-1">
        <svg width="18" height="18" viewBox="0 0 24 24">
          <circle cx="4.983" cy="5.009" r="2.188"></circle>
          <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
        </svg>
        <a className="text-center" href="https://www.linkedin.com/in/hernan-plaza-barrios/" target="_blank">
          https://www.linkedin.com/in/hernan-plaza-barrios/
        </a>
      </div>
    </div>
  </footer>
  )
}
