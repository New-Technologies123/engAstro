import news_1 from '../../../images/news/news_1.webp';
import news_2 from '../../../images/news/news_2.webp';
import news_3 from '../../../images/news/news_3.webp';
import news_4 from '../../../images/news/news_4.webp';
import news_5 from '../../../images/news/news_5.webp';
import news_6 from '../../../images/news/news_6.webp';
import news_7 from '../../../images/news/news_7.webp';
import news_8 from '../../../images/news/news_8.webp';
import news_9 from '../../../images/news/news_9.webp';
import news_10 from '../../../images/news/news_10.webp';
import news_11 from '../../../images/news/news_11.webp';
import news_12 from '../../../images/news/news_12.webp';
import news_13 from '../../../images/news/news_13.webp';

export type TPhoto = {
  id: number;
  src: string;
  alt: string;
};

export type TNewsItem = {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  photos: TPhoto[];
  content: string[];
};

export const NEWS_DATA: TNewsItem[] = [
  {
    id: 1,
    category: 'Exhibition',
    date: 'February 2026',
    title: 'Participation in EGYPES 2026',
    description: 'Successful participation in the Egypt Energy Show in Cairo',
    photos: [
      { id: 1, src: news_12.src, alt: 'EGYPES 2026' },
      { id: 2, src: news_13.src, alt: 'EGYPES 2026' },
    ],
    content: [
      'We are pleased to announce that "New Technologies" Engineering and Production Enterprise LLC has successfully taken part in the Egypt Energy Show (EGYPES) 2026, held recently in Cairo.',
      'During the exhibition, our team:',
      '• Presented the latest engineering and manufacturing solutions for the energy sector',
      '• Held productive negotiations with industry professionals and potential partners',
      '• Strengthened existing business ties and established new strategic contacts',
      '• Received positive feedback on our innovative approach and technological capabilities',
      'We thank the EGYPES organizers for the high-level event and all participants who visited our booth. Your interest in our solutions confirms that we are moving in the right direction.',
      'We look forward to new projects and continued cooperation within the global energy industry!'
    ]
  },
  {
    id: 2,
    category: 'Partnership',
    date: 'December 2025',
    title: 'Inclusion in SOCAR\'s Approved Vendor List',
    description: '"New Technologies" LLC has been included in SOCAR\'s approved supplier list',
    photos: [
      { id: 1, src: news_11.src, alt: 'SOCAR' }
    ],
    content: [
      'On December 29, 2025, our company successfully passed the qualification and was included in the Approved Vendor List of the State Oil Company of the Azerbaijan Republic (SOCAR).',
      'The status of an official supplier has been confirmed on the socar.az procurement platform.',
      'We are proud of the high assessment of our production and express our sincere hope for long-term and fruitful cooperation with SOCAR, both in Azerbaijan and in other countries of its presence.'
    ]
  },
  {
    id: 3,
    category: 'Exhibition',
    date: 'November 2025',
    title: 'Participation in ADIPEC-2025',
    description: 'Negotiations with ADNOC and Aramco at the exhibition in Abu Dhabi',
    photos: [
      { id: 1, src: news_9.src, alt: 'ADIPEC 2025' },
      { id: 2, src: news_10.src, alt: 'ADIPEC 2025' },
    ],
    content: [
      '"New Technologies" LLC successfully participated in the international exhibition ADIPEC-2025, held in Abu Dhabi, UAE from November 3 to 6, 2025.',
      'Our enterprise successfully held negotiations with representatives of ADNOC, Aramco and other global players, discussing potential contracts for equipment supply and joint projects.',
      'Our participation has allowed us to strengthen our position in the MENA region, where demand for Russian technologies remains consistently high.',
      'Participation in this international event opens the way for successful global cooperation and export of high-tech equipment manufactured by our enterprise.'
    ]
  },
  {
    id: 4,
    category: 'Exhibition',
    date: 'June 2025',
    title: 'Caspian Oil & Gas 2025',
    description: '30th International Exhibition in Baku',
    photos: [
      { id: 1, src: news_7.src, alt: 'Caspian Oil & Gas 2025' },
      { id: 2, src: news_8.src, alt: 'Caspian Oil & Gas 2025' },
    ],
    content: [
      'On June 2-4, 2025, "New Technologies" LLC successfully participated in the 30th International Exhibition "Caspian Oil & Gas" - Caspian oil & gas 2025, in Baku.',
      'During the exhibition, several dozen negotiations and presentations were held, resulting in interest in the high-tech products of our enterprise, which opens up new export opportunities for us.'
    ]
  },
  {
    id: 5,
    category: 'Ecology',
    date: 'June 2025',
    title: 'Tree Planting in Baku',
    description: 'Participation in an environmental initiative at the Caspian Oil & Gas exhibition',
    photos: [
      { id: 1, src: news_5.src, alt: 'Tree planting' },
      { id: 2, src: news_6.src, alt: 'Tree planting' },
    ],
    content: [
      'As part of the 30th International Exhibition "Caspian Oil & Gas" - Caspian oil & gas 2025, in Baku, employees of "New Technologies" LLC took part in planting trees and flowers on the territory of the Baku Expo Center.',
      'This initiative, timed to coincide with the exhibition\'s anniversary, is aimed at supporting sustainable development principles and environmental protection.'
    ]
  },
  {
    id: 6,
    category: 'Award',
    date: 'March 2025',
    title: 'Award Ceremony for the General Director',
    description: 'Certificate of Honor for the development of international relations',
    photos: [
      { id: 1, src: news_4.src, alt: 'Award ceremony' }
    ],
    content: [
      'On March 27, 2025, the General Director of "New Technologies" LLC, Safarov Yan Raufovich, was awarded a Certificate of Honor for his contributions to the development of international, foreign economic and interregional relations of the Republic of Bashkortostan with the subjects of the Russian Federation.'
    ]
  },
  {
    id: 7,
    category: 'Exhibition',
    date: 'September 2024',
    title: 'Participation in KIOGE 2024',
    description: '29th Kazakhstan International Exhibition "Oil and Gas"',
    photos: [
        { id: 1, src: news_2.src, alt: 'KIOGE 2024' },
        { id: 2, src: news_1.src, alt: 'KIOGE 2024' },
      
    ],
    content: [
        'From September 25 to 27, 2024, "New Technologies" LLC successfully participated in the 29th Kazakhstan International Exhibition KIOGE "Oil and Gas", where innovative technologies and key trends in the development of the global oil and gas industry were presented.'
    ]
  },
  {
    id: 8,
    category: 'Award',
    date: '2022',
    title: '2nd Place in the "Exporter of the Year" Competition',
    description: 'Breakthrough of the Year among small and medium-sized enterprises',
    photos: [
      { id: 1, src: news_3.src, alt: 'Exporter of the Year' }
    ],
    content: [
      '"New Technologies" LLC took 2nd place in the "Exporter of the Year 2022" competition in the "Breakthrough of the Year among small and medium-sized enterprises" category for the Republic of Bashkortostan, as part of the International Business Week.'
    ]
  }
];

// ===== HELPER FUNCTIONS =====

export const getCategoryColor = (category: string): string => {
  switch (category) {
    case 'Exhibition': return 'linear-gradient(135deg, #2e53f8, #080197)';
    case 'Partnership': return 'linear-gradient(135deg, #0a8a3a, #06b64b)';
    case 'Award': return 'linear-gradient(135deg, #d48a1a, #f0b84a)';
    case 'Ecology': return 'linear-gradient(135deg, #1a8a5a, #2aba8a)';
    default: return 'linear-gradient(135deg, #6b7280, #9ca3af)';
  }
};

export const getCategoryIcon = (category: string): string => {
  switch (category) {
    case 'Exhibition': return '🌍';
    case 'Partnership': return '🤝';
    case 'Award': return '🏆';
    case 'Ecology': return '🌱';
    default: return '📌';
  }
};

export const CATEGORIES = ['All', 'Exhibition', 'Partnership', 'Award', 'Ecology'];