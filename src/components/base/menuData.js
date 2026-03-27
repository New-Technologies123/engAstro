/* ===== ДАННЫЕ МЕНЮ ===== */
export const menuData = [
    {
        title: 'Products',
        url: '/products/',
        pageType: 'products',
        children: [
            {
                title: 'Automated group metering unit',
                url: '/products/accounting-system/',
                children: [
                    {
                        title: '"Sputnik-massomer NT.1" the stationary automated group metering skid',
                        url: '/products/accounting-system/stationary/',
                    },
                    {
                        title: '"Sputnik-massomer NT.1" the mobile automated group metering skid',
                        url: '/products/accounting-system/mobile/',
                    },
                ],
            },
            {
                title: 'Components for automated group metering system',
                url: '/products/accessories/',
                children: [
                    { title: 'Vortex flow meter ERVIP', url: '/products/accessories/ervip/'},
                    { title: 'Differential pressure adjusting device', url: '/products/accessories/urpd/'},
                    { title: 'Multi-stream switching manifold', url: '/products/accessories/psm/'},
                    { title: 'Magnetically adjusted flow control valve', url: '/products/accessories/kmr/'},
                    { title: 'Hydraulic drive', url: '/products/accessories/gidroprivod/'},
                    { title: 'Separation tank', url: '/products/accessories/separation/'},
                ],
            },
            {
                title: 'Hydrocarbon and formation fluid metering system',
                url: '/products/measuring-system/',
                children: [
                    {
                        title: 'Сrude oil custody transfer metering system',
                        url: '/products/measuring-system/oil/',
                    },
                    {
                        title: 'Gas custody transfer metering system',
                        url: '/products/measuring-system/gas/',
                    },
                    {
                        title: 'Water quantity metering system',
                        url: '/products/measuring-system/water/',
                    },
                ],
            },
            {
                title: 'Oil, gas and water treatment systems',
                url: '/products/preparation-systems/',
                children: [
                    {
                        title: 'Pig launcher and receiver of intratubal cleaning and diagnostic facilities',
                        url: '/products/preparation-systems/launch/',
                    },
                    {
                        title: 'Valve manifold',
                        url: '/products/preparation-systems/block/',
                    },
                    {
                        title: 'Tubing String Clarifier',
                        url: '/products/preparation-systems/cleaning/',
                    },
                    {
                        title: 'Chemical injection skid',
                        url: '/products/preparation-systems/dosing/',
                    },
                ],
            },
            {
                title: 'Oil, water and petroleum products pumping stations',
                url: '/products/pumping-stations/',
                children: [
                    {
                        title: 'Modular internal and  external pumping station',
                        url: '/products/pumping-stations/internal/',
                    },
                    {
                        title: 'Modular multiphase pump station',
                        url: '/products/pumping-stations/multiphase/',
                    },
                ],
            },
        ],
    },
    {
        title: 'Services',
        url: '/services/',
        pageType: 'services',
        children: [
            { title: 'Обслуживание, капитальный ремонт и модернизация АГЗУ', url: '/services/repair', },
            { title: 'Замер дебита нефтяных скважин с помощью мобильной замерной установки', url: '/services/metering' },
            { title: 'Обслуживание устройства очистки колонны УОК-НКТ', url: '/services/service' },
            { title: 'Услуги депарафинизации нефтяных скважин', url: '/services/dewaxing' },
        ],
    },
];
