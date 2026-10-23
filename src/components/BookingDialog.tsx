import {useEffect,useMemo,useState} from 'react';
import Cal,{getCalApi} from '@calcom/embed-react';
import {ArrowUpRight,CalendarDays,Clock3,Video,X,LoaderCircle} from 'lucide-react';
import {useModal} from '../hooks/useModal';
const CAL_LINK='theophilus-samuel/30min';
const CAL_URL=`https://cal.com/${CAL_LINK}`;
export default function BookingDialog({onClose,theme}:{onClose:()=>void;theme:'dark'|'light'}){
 const ref=useModal();
 const [status,setStatus]=useState<'loading'|'ready'|'slow'|'failed'>('loading');
 const config=useMemo(()=>({layout:'month_view' as const,theme}),[theme]);
 useEffect(()=>{
  let alive=true;let remove:undefined|(()=>void);
  const timeout=window.setTimeout(()=>{if(alive)setStatus(s=>s==='loading'?'slow':s)},16000);
  getCalApi({namespace:'portfolio-conversation'}).then(cal=>{
   if(!alive)return;
   const ready=()=>{if(alive){setStatus('ready');window.clearTimeout(timeout)}};
   const failed=()=>{if(alive){setStatus('failed');window.clearTimeout(timeout)}};
   cal('on',{action:'linkReady',callback:ready});
   cal('on',{action:'linkFailed',callback:failed});
   cal('ui',{theme,hideEventTypeDetails:false,layout:'month_view',cssVarsPerTheme:{light:{'cal-brand':'#1d1b19','cal-brand-emphasis':'#000000'},dark:{'cal-brand':'#f8a671','cal-brand-emphasis':'#fbb789'}}});
   remove=()=>{cal('off',{action:'linkReady',callback:ready});cal('off',{action:'linkFailed',callback:failed});};
  }).catch(()=>{if(alive)setStatus('failed')});
  return()=>{alive=false;window.clearTimeout(timeout);remove?.()};
 },[theme]);
 return <dialog ref={ref} className="booking-dialog" aria-labelledby="booking-title" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose()}}>
  <div className="booking-frame">
   <div className="booking-heading"><div><span className="eyebrow"><CalendarDays size={13}/> A CONVERSATION, NOT AN INBOX</span><h2 id="booking-title">Let’s make time.</h2></div><button className="icon-button" aria-label="Close booking" onClick={onClose}><X size={22}/></button></div>
   <div className="booking-context"><span><Clock3 size={14}/> 30-minute meeting</span><span><Video size={14}/> Cal Video</span><a href={CAL_URL} target="_blank" rel="noopener noreferrer">Open on Cal.com <ArrowUpRight size={14}/></a></div>
   <div className="booking-scroll">
    <div className="booking-status" role="status">{status==='loading'?<><LoaderCircle size={15} className="spin"/> Loading the live calendar…</>:status==='slow'?'The calendar is taking a little longer. You can use the direct Cal.com link below.':status==='failed'?'The embedded calendar could not load. Open Cal.com directly to book.':null}</div>
    <Cal namespace="portfolio-conversation" calLink={CAL_LINK} calOrigin="https://cal.com" config={config} className="cal-inline" style={{width:'100%',height:'100%',overflow:'auto'}}/>
   </div>
   <div className="booking-fallback"><span>Choose a time in your timezone. Booking completes on Cal.com.</span><a href={CAL_URL} target="_blank" rel="noopener noreferrer">Use the direct booking link <ArrowUpRight size={14}/></a></div>
  </div>
 </dialog>
}
