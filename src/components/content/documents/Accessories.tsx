import { List } from '../../ui/list/List';
import Styles from './documents.module.scss';


export const Accessories = () => {

  const handleCardClick = (docType: string) => {
    const openUrl = `${window.location.origin}/doc/${docType}.pdf`;
    window.open(openUrl, '_blank');
  };

  const cards = [
    {
      title: 'Declaration of TR CU 020 2022 for the ERVIP.NT vortex flowmeter/counters',
      docType: '2-1',
    },
    {
      title: 'Certificate TR TS 012 No. EAES RU C-RU.AZh58.V.04794_23',
      docType: '2-2',
    },
    {
      title: 'Declarations of conformity with TR CU 010-2011 and 032-2013 URPD 2020.',
      docType: '2-4',
    },
    {
      title: 'Certificate No. EAEU RU C-RU.Аж58.В.04522_23',
      docType: '2-5',
    },
    {
      title: 'Certificate ST-1 URPD',
      docType: '2-3',
    },    
    {
      title: 'Declaration TR CU 032 of 2023',
      docType: '2-6',
    },
    {
      title: 'Product Type Certificate TR CU 010',
      docType: '2-7',
    },
    {
      title: 'Certificate TR CU 012 2023',
      docType: '2-8',
    },
    {
      title: 'EAEU RU C-RU.AB29.B.02346-24 TR CU 012',
      docType: '2-9',
    },
    {
      title: 'C-RU.NV54.V.05918',
      docType: '2-10',
    },
    {
      title: 'Declaration TR CU 032 2024.',
      docType: '2-11',
    },
    {
      title: 'Declaration TR CU 010 2024',
      docType: '2-12',
    },
  ];

  return (
    <>
      <div className={Styles.team}>
      {cards.map((card, index) => (
        <List
          key={card.docType}          
          title={card.title}
          onClick={() => handleCardClick(card.docType)}
          index={index}
        />
      ))}
    </div>
    </>
  );
};
