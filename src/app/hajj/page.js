import Banner from "../../../components/banner/banner";
import HajjContextSection from "../../../sections/Hajj/context/context";
import SupportTechniqueSection from "../../../sections/Hajj/supportTechnique/supportTechnique";
import Issues from "../../../sections/issues/issues";
import Solutions from "../../../sections/solutions/solutions";
import styles from "./hajj.module.css";

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
    </main>
  );
}


