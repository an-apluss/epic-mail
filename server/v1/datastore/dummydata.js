// password is 1234567
const dummydata = {
  users: [
    {
      id: 1,
      email: 'lola@epicmail.com',
      firstname: 'Lola',
      lastname: 'Akinde',
      password: '$2b$10$K/yzEbALC3cMTHIMZ71TBuqqeJfdwDKJxwHiCtD..0Esxh0v8Ubqm',
      phone: '08034326622',
    },
    {
      id: 2,
      email: 'anuoluwapoakinseye@epicmail.com',
      firstname: 'Anuoluwapo',
      lastname: 'Akinseye',
      password: '$2b$10$K/yzEbALC3cMTHIMZ71TBuqqeJfdwDKJxwHiCtD..0Esxh0v8Ubqm',
      phone: '08034326603',
    },
  ],
  contacts: [
    {
      id: 1,
      email: 'lola@gmail.com',
      firstname: 'Lola',
      lastname: 'Akinde',
    },
    {
      id: 2,
      email: 'anuoluwapoakinseye@epicmail.com',
      firstname: 'Anuoluwapo',
      lastname: 'Akinseye',
    },
  ],
  messages: [
    {
      id: 1,
      createdAt: '1/03/2019, 22:41:58',
      subject: 'EPIC mail',
      message:
        'I am developing EPIC(Excellent, Passion, Integrity and Collaboration) mail app',
      parentMessageId: 1,
      status: 'sent',
    },
    {
      id: 4,
      createdAt: '12/03/2019, 22:41:58',
      subject: 'EPIC mail',
      message:
        'I am developing EPIC(Excellent, Passion, Integrity and Collaboration) mail app',
      parentMessageId: 1,
      status: 'sent',
    },
    {
      id: 3,
      createdAt: '10/03/2019, 22:41:58',
      subject: 'go to go',
      message: 'You are good to go',
      parentMessageId: 2,
      status: 'draft',
    },
    {
      id: 2,
      createdAt: '3/03/2019, 22:41:58',
      subject: 'RE: EPIC mail',
      message:
        'You are welcome to the road of becoming a world class developer',
      parentMessageId: 2,
      status: 'draft',
    },
  ],
  sent: [
    {
      senderId: 1,
      messageId: 1,
      createdAt: '1/03/2019, 22:41:58',
    },
    {
      senderId: 2,
      messageId: 4,
      createdAt: '25/02/2019, 22:41:58',
    },
  ],
  inbox: [
    {
      receiverId: 1,
      messageId: 3,
      createdOn: '4/03/2019, 22:41:58',
    },
    {
      receiverId: 1,
      messageId: 2,
      createdOn: '28/02/2019, 22:41:58',
    },
  ],
  group: [
    {
      groupId: 1,
      memberId: 1,
    },
  ],
};

export default dummydata;
