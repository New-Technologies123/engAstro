import { List } from '../../ui/list/List';
import Styles from './documents.module.scss';


export const PumpingStations = () => {

  const handleCardClick = (docType: string) => {
    const openUrl = `${window.location.origin}/doc/${docType}.pdf`;
    window.open(openUrl, '_blank');
  };

  const cards = [
    {
      title: 'Declaration of Conformity for Pumping Units',
      docType: '5-1',
    },
    {
      title: 'Certificate of conformity of the KNS',
      docType: '5-2',
    },
    {
      title: 'Certificate of Conformity of the BKNS',
      docType: '5-3',
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
