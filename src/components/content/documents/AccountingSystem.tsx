import { List } from '../../ui/list/List';
import Styles from './documents.module.scss';


export const AccountingSystem = () => {

  const handleCardClick = (docType: string) => {
    const openUrl = `${window.location.origin}/doc/${docType}.pdf`;
    window.open(openUrl, '_blank');
  };

  const cards = [
    {
      title: 'Made is Russia',
      docType: '1-1',
    },
    {
      title: 'Declaration TR CS 010 of 2024.',
      docType: '1-2',
    },
    {
      title: 'Conclusion INTI.QS.PS.90-06-2024-244 Metering Skid',
      docType: '1-3',
    },
    {
      title: 'Certificate for Sputnik-Massomer NT. 1 Metering System',
      docType: '1-4',
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
