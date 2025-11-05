import Styles from './cards.module.scss';
import { List } from '../../ui/list/List';
import { useTranslation } from 'react-i18next';
import { useMemo } from 'react';

export const Cards = ({ selectId }) => {
  const { t, i18n } = useTranslation('documents');

  const handleCardClick = (docType: string) => {
    const openUrl = `${window.location.origin}/doc/${i18n.language}/${docType}.pdf`;
    window.open(openUrl, '_blank');
  };

  const cards = useMemo(() => {
    const allCards = [
      { id: 'accountingSystem', condition: (selectId === 'all' || selectId === 'accountingSystem'), title: '“Made in Russia” Certificate', docType: '1-1' },
      { id: 'accountingSystem', condition: (selectId === 'all' || selectId === 'accountingSystem'), title: 'Declaration TR CS 010 of 2024.', docType: '1-2' },
      { id: 'accountingSystem', condition: (selectId === 'all' || selectId === 'accountingSystem'), title: 'Conclusion INTI.QS.PS.90-06-2024-244 Metering Skid', docType: '1-3' },
      { id: 'accountingSystem', condition: (selectId === 'all' || selectId === 'accountingSystem'), title: 'Certificate for Sputnik-Massomer NT. 1 Metering System', docType: '1-4' },

      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Declaration TR CU 020 2022', docType: '2-1' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Certificate TR TS 012 No. EAES RU C-RU.AZh58.V.04794_23', docType: '2-2' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Certificate ST-1 URPD', docType: '2-3' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Declarations of conformity TR CU 010-2011 and 032-2013 URPD 2020.', docType: '2-4' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Certificate No. EAEU RU C-RU.Аж58.В.04522_23', docType: '2-5' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Declaration TR CU 032 of 2023', docType: '2-6' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Certificate of product type TR TS 010', docType: '2-7' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Certificate TR CU 012 2023', docType: '2-8' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'EAEU RU C-RU.АВ29.В.02346-24 TR CS 012', docType: '2-9' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'C-RU.NV54.V.05918', docType: '2-10' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Declaration TR CU 032 2024', docType: '2-11' },
      { id: 'components', condition: (selectId === 'all' || selectId === 'components'), title: 'Declaration TR CU 010 2024', docType: '2-12' },

      { id: 'measurementSystem', condition: (selectId === 'all' || selectId === 'measurementSystem'), title: 'Certificate for technical specifications of SIKN products', docType: '3-1' },
      { id: 'measurementSystem', condition: (selectId === 'all' || selectId === 'measurementSystem'), title: 'Declaration-MEASUREMENT SYSTEMS', docType: '3-2' },

      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'TR CU 032 EAEU RU C-RU.NA19.V.00123-2024', docType: '4-1' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'Declaration TR TS 010 5d', docType: '4-2' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'Declaration TR TS 032 for chambers DN up to 150 mm', docType: '4-3' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'Certificate for type TR TS 010 5d', docType: '4-4' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'Declaration TR TS 010 5 d', docType: '4-5' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'Declaration TR CU 032 for pipelines', docType: '4-6' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'Declaration TR TS 032', docType: '4-7' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'SS for type No. EAES RU ST-RU.NV94.00258', docType: '4-8' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'Certificate TR CS 012', docType: '4-9' },
      { id: 'trainingSystem', condition: (selectId === 'all' || selectId === 'trainingSystem'), title: 'Certificate TR CS 012 EAEU RU C-RU.ПБ98.В.00504.24', docType: '4-10' },

      { id: 'pumpingStations', condition: (selectId === 'all' || selectId === 'pumpingStations'), title: 'Declaration of Conformity pumping units', docType: '5-1' },
      { id: 'pumpingStations', condition: (selectId === 'all' || selectId === 'pumpingStations'), title: 'Certificate of conformity KNS', docType: '5-2' },
      { id: 'pumpingStations', condition: (selectId === 'all' || selectId === 'pumpingStations'), title: 'Certificate of Conformity BKNS', docType: '5-3' },
    ];

    return allCards.filter(card => card.condition);
  }, [selectId, t]);

  return (
    <div className={Styles.team}>
      {cards.map((card, index) => (
        <List 
          key={`${selectId}-${card.id}-${card.docType}`}
          title={card.title} 
          onClick={() => handleCardClick(card.docType)}
          index={index}
        />
      ))}
    </div>
  );
};