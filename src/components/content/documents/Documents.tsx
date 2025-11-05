import Styles from './documents.module.scss';
import { Select } from '../../ui/select/Select';
import { useState} from 'react';
import { Cards } from './Cards';
import { Title } from '../../ui/title/Title';
import { BackToTop } from '../../ui/back-to-top/BackToTop';

export const Documents = () => {
  const [selectedId, setSelectedId] = useState<TTitleOptions>('all');
  const [showId, setShowId] = useState<TTitleOptions>('all');

  type TTitleOptions = 'all' | 'accountingSystem' | 'components' | 'measurementSystem' | 'trainingSystem' | 'pumpingStations';

  const options: { id: TTitleOptions; title: string }[] = [
    {
      id: 'all',
      title: 'All products',
    },
    {
      id: 'accountingSystem',
      title: 'Automated Group Metering Skid',
    },
    {
      id: 'components',
      title: 'Components for automated group metering skid',
    },
    {
      id: 'measurementSystem',
      title: 'System for measuring quantity and quality indicators',
    },
    { 
      id: 'trainingSystem',
      title: 'Oil, gas and water treatment systems',
    },
    {
      id: 'pumpingStations',
      title: 'Pumping stations for oil, petroleum products and water',
    },
  ];

  const onShowClick = () => {
    setShowId(selectedId);
  };

  return (
    <>
      <Title text={'Documents'}></Title>
      
      <div className={Styles.documentList}>
        <p>Select product type:</p>
        <div className={Styles.list}>
          <Select options={options} selectedId={selectedId} onSelect={(id) => setSelectedId(id as TTitleOptions)}/>

          <div className={Styles.documentButton}>
            <button onClick={onShowClick}>Show</button>
          </div>
        </div>
      </div>
      <Cards selectId={showId} key={showId}/>
      <BackToTop/>
    </>
  );
};