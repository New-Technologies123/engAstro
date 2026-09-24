export type TDocument = {
    id: string;
    title: string;
    fileName: string;
    fileUrl: string;
    fileSize?: string;
};

export type TDocumentCategory = {
    id: string;
    title: string;
    description: string;
    documents: TDocument[];
};

export const documentsData: TDocumentCategory[] = [
    {
        id: 'accounting-system',
        title: 'Automated Group Metering Unit (AGZU)',
        description: 'Documentation for AGZU systems',
        documents: [
            {
                id: '1-1',
                title: 'Made in Russia',
                fileName: '1-1.pdf',
                fileUrl: '/doc/1-1.pdf',
                fileSize: '701 KB',
            },
            {
                id: '1-2',
                title: 'TR CU 010 Declaration of Conformity, 2024',
                fileName: '1-2.pdf',
                fileUrl: '/doc/1-2.pdf',
                fileSize: '1,038 KB',
            },
            {
                id: '1-3',
                title:
                    'Production Site Assessment INTI.QS.PS.90-06-2024-244',
                fileName: '1-3.pdf',
                fileUrl: '/doc/1-3.pdf',
                fileSize: '666 KB',
            },
            {
                id: '1-4',
                title:
                    'Certificate of Conformity for the Sputnik Mass Meter NT.1',
                fileName: '1-4.pdf',
                fileUrl: '/doc/1-4.pdf',
                fileSize: '586 KB',
            },
        ],
    },

    {
        id: 'accessories',
        title: 'AGZU Components',
        description:
            'Documentation for components and spare parts',
        documents: [
            {
                id: '2-1',
                title:
                    'TR CU 020 Declaration of Conformity, 2022 — ERVIP.NT Vortex Flow Meter',
                fileName: '2-1.pdf',
                fileUrl: '/doc/2-1.pdf',
                fileSize: '481 KB',
            },
            {
                id: '2-2',
                title:
                    'TR CU 012 Certificate No. EAEU RU C-RU.АЖ58.В.04794_23',
                fileName: '2-2.pdf',
                fileUrl: '/doc/2-2.pdf',
                fileSize: '1,907 KB',
            },
            {
                id: '2-3',
                title: 'ST-1 Certificate for URPD',
                fileName: '2-3.pdf',
                fileUrl: '/doc/2-3.pdf',
                fileSize: '261 KB',
            },
            {
                id: '2-4',
                title:
                    'Declarations of Conformity with TR CU 010-2011 and TR CU 032-2013 for URPD, 2020',
                fileName: '2-4.pdf',
                fileUrl: '/doc/2-4.pdf',
                fileSize: '1,199 KB',
            },
            {
                id: '2-5',
                title:
                    'Certificate No. EAEU RU C-RU.АЖ58.В.04522_23',
                fileName: '2-5.pdf',
                fileUrl: '/doc/2-5.pdf',
                fileSize: '1,866 KB',
            },
            {
                id: '2-6',
                title:
                    'TR CU 032 Declaration of Conformity, 2023',
                fileName: '2-6.pdf',
                fileUrl: '/doc/2-6.pdf',
                fileSize: '960 KB',
            },
            {
                id: '2-7',
                title:
                    'TR CU 010 Product Type Certificate',
                fileName: '2-7.pdf',
                fileUrl: '/doc/2-7.pdf',
                fileSize: '1,671 KB',
            },
            {
                id: '2-8',
                title:
                    'TR CU 012 Certificate, 2023',
                fileName: '2-8.pdf',
                fileUrl: '/doc/2-8.pdf',
                fileSize: '1,681 KB',
            },
            {
                id: '2-9',
                title:
                    'EAEU RU C-RU.АВ29.В.02346-24 — TR CU 012',
                fileName: '2-9.pdf',
                fileUrl: '/doc/2-9.pdf',
                fileSize: '1,679 KB',
            },
            {
                id: '2-10',
                title: 'C-RU.НВ54.В.05918',
                fileName: '2-10.pdf',
                fileUrl: '/doc/2-10.pdf',
                fileSize: '494 KB',
            },
            {
                id: '2-11',
                title:
                    'TR CU 032 Declaration of Conformity, 2024',
                fileName: '2-11.pdf',
                fileUrl: '/doc/2-11.pdf',
                fileSize: '994 KB',
            },
            {
                id: '2-12',
                title:
                    'TR CU 010 Declaration of Conformity, 2024',
                fileName: '2-12.pdf',
                fileUrl: '/doc/2-12.pdf',
                fileSize: '900 KB',
            },
        ],
    },

    {
        id: 'measuring-system',
        title:
            'Hydrocarbon and Formation Fluid Metering System',
        description:
            'Documentation for hydrocarbon measurement and accounting systems',
        documents: [
            {
                id: '3-1',
                title:
                    'Product Type Certificate for the Oil and Gas Metering System',
                fileName: '3-1.pdf',
                fileUrl: '/doc/3-1.pdf',
                fileSize: '383 KB',
            },
            {
                id: '3-2',
                title:
                    'Measurement System Declaration',
                fileName: '3-2.pdf',
                fileUrl: '/doc/3-2.pdf',
                fileSize: '492 KB',
            },
        ],
    },

    {
        id: 'preparation-systems',
        title:
            'Oil, Gas and Water Treatment System',
        description:
            'Documentation for treatment and purification systems',
        documents: [
            {
                id: '4-1',
                title:
                    'TR CU 032 — EAEU RU C-RU.НА19.В.00123-2024',
                fileName: '4-1.pdf',
                fileUrl: '/doc/4-1.pdf',
                fileSize: '2,445 KB',
            },
            {
                id: '4-2',
                title:
                    'TR CU 010 Declaration of Conformity, 5d',
                fileName: '4-2.pdf',
                fileUrl: '/doc/4-2.pdf',
                fileSize: '18,338 KB',
            },
            {
                id: '4-3',
                title:
                    'TR CU 032 Declaration for Chambers up to DN 150 mm',
                fileName: '4-3.pdf',
                fileUrl: '/doc/4-3.pdf',
                fileSize: '355 KB',
            },
            {
                id: '4-4',
                title:
                    'TR CU 010 Product Type Certificate, 5d',
                fileName: '4-4.pdf',
                fileUrl: '/doc/4-4.pdf',
                fileSize: '122 KB',
            },
            {
                id: '4-5',
                title:
                    'TR CU 010 Declaration of Conformity, 5d',
                fileName: '4-5.pdf',
                fileUrl: '/doc/4-5.pdf',
                fileSize: '856 KB',
            },
            {
                id: '4-6',
                title:
                    'TR CU 032 Declaration for Pipelines',
                fileName: '4-6.pdf',
                fileUrl: '/doc/4-6.pdf',
                fileSize: '374 KB',
            },
            {
                id: '4-7',
                title:
                    'TR CU 032 Declaration of Conformity',
                fileName: '4-7.pdf',
                fileUrl: '/doc/4-7.pdf',
                fileSize: '1,071 KB',
            },
            {
                id: '4-8',
                title:
                    'Type Certificate No. EAEU RU СТ-RU.НВ94.00258',
                fileName: '4-8.pdf',
                fileUrl: '/doc/4-8.pdf',
                fileSize: '469 KB',
            },
            {
                id: '4-9',
                title:
                    'TR CU 012 Certificate',
                fileName: '4-9.pdf',
                fileUrl: '/doc/4-9.pdf',
                fileSize: '1,392 KB',
            },
            {
                id: '4-10',
                title:
                    'TR CU 012 Certificate — EAEU RU С-RU.ПБ98.В.00504.24',
                fileName: '4-10.pdf',
                fileUrl: '/doc/4-10.pdf',
                fileSize: '4,132 KB',
            },
        ],
    },

    {
        id: 'pumping-stations',
        title: 'Transfer Pumping Stations',
        description:
            'Documentation for oil and water transfer pumping stations',
        documents: [
            {
                id: '5-1',
                title:
                    'Declaration of Conformity for Pumping Units',
                fileName: '5-1.pdf',
                fileUrl: '/doc/5-1.pdf',
                fileSize: '1,040 KB',
            },
            {
                id: '5-2',
                title:
                    'Certificate of Conformity for KNS',
                fileName: '5-2.pdf',
                fileUrl: '/doc/5-2.pdf',
                fileSize: '412 KB',
            },
            {
                id: '5-3',
                title:
                    'Certificate of Conformity for BKNS',
                fileName: '5-3.pdf',
                fileUrl: '/doc/5-3.pdf',
                fileSize: '411 KB',
            },
        ],
    },
];