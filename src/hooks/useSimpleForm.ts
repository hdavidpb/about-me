import { useState } from "react"

interface Props {
    [key:string]:{value:string,error:boolean}
}

export const useSimpleForm = <T extends Props>(initialValues:T) => {
    const [formValues, setFormValues] = useState<T>(initialValues)


    const handleChange = (e:any,name:string,regx?:RegExp)=>{
        const value = e.target.value
        const error = regx ? !regx.test(value) : false
        setFormValues({...formValues,[name]:{value,error}})
    }

  return {formValues,handleChange}
}