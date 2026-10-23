import {useEffect} from 'react';
export function usePortfolioMotion(enabled:boolean){
 useEffect(()=>{
  if(!enabled){document.documentElement.classList.remove('motion-enabled');return;}
  const elements=document.querySelectorAll<HTMLElement>('[data-reveal]');
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}},{threshold:.06,rootMargin:'0px 0px -10px 0px'});
  elements.forEach(el=>observer.observe(el));
  document.documentElement.classList.add('motion-enabled');
  return()=>{observer.disconnect();document.documentElement.classList.remove('motion-enabled')};
 },[enabled]);
}
