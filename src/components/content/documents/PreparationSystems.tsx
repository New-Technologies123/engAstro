import { List } from '../../ui/list/List';
import Styles from './documents.module.scss';


export const PreparationSystems = () => {

  const handleCardClick = (docType: string) => {
    const openUrl = `${window.location.origin}/doc/${docType}.pdf`;
    window.open(openUrl, '_blank');
  };

  const cards = [
    {
      title: 'TR CU 032 EAEU RU C-RU.NA19.V.00123-2024',
      docType: '4-1',
    },
    {
      title: 'Declaration TR TS 010 5d',
      docType: '4-2',
    },
    {
      title: 'Declaration TR TS 032 for chambers DN up to 150 mm',
      docType: '4-3',
    },
    {
      title: 'Certificate for type TR TS 010 5d',
      docType: '4-4',
    },
    {
      title: 'Declaration TR TS 010 5 d',
      docType: '4-5',
    },
    {
      title: 'Declaration TR CU 032 for pipelines',
      docType: '4-6',
    },
    {
      title: 'Declaration TR TS 032',
      docType: '4-7',
    },
    {
      title: 'SS for type No. EAES RU ST-RU.NV94.00258',
      docType: '4-8',
    },
    {
      title: 'Certificate TR TS 012',
      docType: '4-9',
    },
    {
      title: 'Certificate TR TS 012 EAEU RU S-RU.PB98.V.00504.24',
      docType: '4-10',
    }
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
