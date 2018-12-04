import Components from './../pages/Components';
import Forms from './../pages/Forms';
import Day00 from './../pages/Day00'
import Day01 from './../pages/Day01'
import Day02 from './../pages/Day02'

export const menuItems = [
    {
        id: 'day00',
        parentName: 'Day 00',
        parentPath: '/day00',
        page: Day00,
        image: 'pe-7s-plugin',
        childNames: [
            {
                childName: 'ex00',
                childPath: '/day00/ex00'
            },
            {
                childName: 'ex01',
                childPath: '/day00/ex01'
            },
            {
                childName: 'ex02',
                childPath: '/day00/ex02'
            },
        ]
    },
    {
        id: 'day01',
        parentName: 'Day 01',
        parentPath: '/day01',
        page: Day01,
        image: 'pe-7s-plugin',
        childNames: [
            {
                childName: 'ex00',
                childPath: '/day01/ex00'
            },
        ]
    },
  {
    id: 'day02',
    parentName: 'Day 02',
    parentPath: '/day02',
    page: Day02,
    image: 'pe-7s-plugin',
    childNames: [
      {
        childName: 'ex00',
        childPath: '/day02/ex00'
      },
    ]
  },
    {
        id: 'componentMenu',
        parentName: 'Component',
        parentPath: '/components',
        page: Components,
        image: 'pe-7s-plugin',
        childNames: [
            {
                childName: 'Button',
                childPath: '/components/buttons'
            },
            {
                childName: 'Grid',
                childPath: '/components/grid'
            },
            {
                childName: 'Icons',
                childPath: '/components/icons'
            },
            {
                childName: 'Notifications',
                childPath: '/components/notifications'
            },
            {
                childName: 'Panels',
                childPath: '/components/panels'
            },
            {
                childName: 'Sweetalerts',
                childPath: '/components/sweetalerts'
            },
            {
                childName: 'Typography',
                childPath: '/components/typography'
            },
        ]
    },
    {
        id: 'formsMenu',
        parentName: 'Forms',
        parentPath: '/forms',
        image: 'pe-7s-note2',
        page: Forms,
        childNames: [
            {
                childName: 'Regular Forms',
                childPath: '/forms/regular-forms'
            },
            {
                childName: 'Extended Forms',
                childPath: '/forms/extended-forms'
            },
            {
                childName: 'Validation Forms',
                childPath: '/forms/validation-forms'
            },
        ]
    },
];