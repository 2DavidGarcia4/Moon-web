import { RefObject, useEffect } from "react";

export const useReadySection = (element: RefObject<HTMLElement>, addClass: string)=> {
  useEffect(()=> {
    setTimeout(()=>{
      element.current?.classList.add(addClass)
    }, 400)
  }, [element])
}