import Banner from "../../../components/banner/banner";
import HajjContextSection from "../../../sections/Hajj/context/context";

export default function HajjPage() {
  return (
    <main style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <Banner
        title="Hajj 2026 avec"
        highlight="GO-MAKKAH"
        subtitle="Comprendre, choisir et réussir votre pèlerinage .."
      />

      <div style={{ display: 'flex', gap: '24px' }}>
        <div>
          <HajjContextSection />
        </div>
        <div style={{ height: '100%', width: '20%' }}>

        </div>
      </div>
    </main>
  );
}


