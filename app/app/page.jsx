export default function Page() {
  return (
    <div style={{minHeight:'100vh',display:'grid',placeItems:'center',fontFamily:'system-ui, sans-serif'}}>
      <div style={{padding:24,border:'1px solid #e5e7eb',borderRadius:16,maxWidth:520}}>
        <div style={{display:'flex',gap:10,alignItems:'center',marginBottom:8}}>
          <div style={{width:36,height:36,borderRadius:12,background:'#000',color:'#fff',display:'grid',placeItems:'center',fontWeight:700}}>ND</div>
          <div>
            <div style={{fontWeight:700}}>New Dog – Old Licks</div>
            <div style={{fontSize:12,color:'#6b7280'}}>Promo Manager • Clean Start</div>
          </div>
        </div>
        <p>It works! This is a fresh Next.js app with password protection.</p>
        <p style={{fontSize:12,color:'#6b7280'}}>Next step: re-add features (Supabase, planner UI) once this is live.</p>
      </div>
    </div>
  );
}
