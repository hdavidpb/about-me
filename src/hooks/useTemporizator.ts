import { useEffect, useState } from 'react'

interface Props{
    initialTime:number
}

export const useTemporizator = ({initialTime}:Props) => {
    const [minutos, setMinutos] = useState(initialTime ?? 30);
    const [segundos, setSegundos] = useState(0);
  
    useEffect(() => {
      const temporizador = setInterval(() => {
        if (segundos === 0) {
          if (minutos === 0) {
            clearInterval(temporizador);
            // Aquí podrías agregar una lógica adicional al llegar a cero
          } else {
            setMinutos(minutos - 1);
            setSegundos(59);
          }
        } else {
          setSegundos(segundos - 1);
        }
      }, 1000);
  
      return () => clearInterval(temporizador);
    }, [minutos, segundos]);
  
    return { minutos,segundos }

}


// <div>
// <h1>Temporizador</h1>
// <h2>{minutos < 10 ? `0${minutos}` : minutos}:{segundos < 10 ? `0${segundos}` : segundos}</h2>
// </div>
