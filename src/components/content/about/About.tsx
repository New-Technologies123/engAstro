import Styles from './about.module.scss';
import { Title } from '../../ui/title/Title';
import { CountCard } from '../../ui/count-card/CountCard';

export const About = () => {
  return (
    <>
      <Title text="About us"></Title>
      <div className={Styles.layout}>
        <p>Operating since 2005, «New Technologies» Engineering and Production Enterprise LLC is one of the leading manufacturers of block-modular equipment as 
          well as the spare parts for the development of oil and gas fields, also specializing in the well dewaxing services and equipment overhaul repairing in 
          the different regions of Russia, Kazakhstan, Belarus and Uzbekistan.</p>        
      </div>

      <Title text="Company in Numbers"></Title>

      <div className={Styles.numberAbout}>
        <CountCard 
          header="Over 300"
          title="Full-time employees."
          index={0}
        />
        <CountCard
          header="31 404 m"
          number='2'
          title="Production facility area with access to railways."
          index={1}
        />
        <CountCard
          header="Over 100"
          title="Successfully completed projects in the territory of Eastern Europe and Siberia."
          index={2}
        />
        <CountCard
          header='100 %'
          title="Compliance with HSE requirements"
          index={3}
        />
        <CountCard
          header='79'
          offer="Special vehicles"
          title="Including a snow and swamp-going vehicle, trucks, cranes, excavators, semi-trailers, passenger transport."
          index={4}
        />
      </div>
    </>
  );
};
