import {useEffect,useRef} from 'react';
export function useModal(){
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{
  const element=ref.current;
  const previous=document.activeElement as HTMLElement|null;
  const overflow=document.body.style.overflow;
  element?.showModal(); document.body.style.overflow='hidden';
  return()=>{element?.close();document.body.style.overflow=overflow;if(previous?.isConnected)previous.focus({preventScroll:true});};
 },[]);
 return ref;
}
