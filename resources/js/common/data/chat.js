import avatar2 from "@assets/images/users/avatar-2.jpg";
import avatar3 from "@assets/images/users/avatar-3.jpg";
import avatar4 from "@assets/images/users/avatar-4.jpg";

const chatData = [
    {
        id: 1,
        image: avatar2,
        name: 'Steven Franklin',
        message: 'Hey! there I\'m available',
        time: '',
        color: 'secondary'  
    },
    {
        id: 2,
        image: avatar3,
        name: 'Adam Miller',
        message: 'I\'ve finished it! See you so',
        time: '5',
        color: 'success'
    },
    {
        id: 3,
        name: 'Keith Gonzales',
        message: 'This theme is awesome!',
        time: '2',
        color: 'success'
    },
    {
        id: 4,
        image: avatar4,
        name: 'Jose Vickery',
        message: 'Nice to meet you',
        time: '',
        color: 'warning'
    },
    {
        id: 5,
        name: 'Mitchel Givens',
        message: 'Hey! there I\'m available',
        time: '',
        color: 'secondary'
    },
    {
        id: 6,
        image: avatar4,
        name: 'Stephen Hadley',
        message: 'I\'ve finished it! See you so',
        time: '7',
        color: 'success'
    },
    {
        id: 7,
        image: avatar2,
        name: 'Leord Joseph',
        message: 'This theme is awesome!',
        time: '',
        color: 'success'
    },
];

const chatMessagesData = [
    {
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Wow that\'s great',
        time: '10:07'
    }
];

export { chatData, chatMessagesData };