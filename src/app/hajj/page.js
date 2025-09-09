import { Suspense } from "react";
import Banner from "../../../components/banner/banner";
import HajjContextSection from "../../../sections/Hajj/context/context";
import SupportTechniqueSection from "../../../sections/Hajj/supportTechnique/supportTechnique";
import Issues from "../../../sections/Hajj/issues/issues";
import Solutions from "../../../sections/Hajj/solutions/solutions";
import styles from "./hajj.module.css";
import HowItWorks from "../../../sections/Hajj/howItWorks/howItWorks";
import Infos from "../../../sections/Hajj/infos/infos";
import Strategy from "../../../sections/Hajj/strategy/strategy";
import WhyUs from "../../../sections/Hajj/whyUs/whyUs";
import Makkah from "../../../sections/Hajj/makkah/makkah";
import Serenite from "../../../sections/Hajj/serenite/serenite";
import FAQ from "../../../sections/Hajj/faq/faq";

export default function HajjPage() {
  return (
    <main className={styles.main}>
      <Banner
        title="Hajj 2026 avec"
        highlight="GO-MAKKAH"
        subtitle="Comprendre, choisir et réussir votre pèlerinage .."
      />

      <div className={styles.row}>
        <HajjContextSection />
        <div className={styles.fullHeight}>
          <SupportTechniqueSection />
        </div>
      </div>


      <div className={styles.row}>
        <Issues />
        <div className={`${styles.fullHeight} ${styles.solutionsRight}`}>
          <Solutions />
        </div>
      </div>

      <HowItWorks />
      <Infos />
      <Strategy />
      <Suspense fallback={null}>
        <WhyUs />
      </Suspense>
      <Makkah />
      <Serenite />
      <FAQ />

    </main>
  );
}


