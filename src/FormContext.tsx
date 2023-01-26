import {createContext} from 'react';
export type GlobalContent = {
    handleChange:(id:any,event:any)=> void
    // setCopy:(c: string) => void
  }
export const FormContext = createContext<GlobalContent>({
    handleChange :(id,event) => {}
})
