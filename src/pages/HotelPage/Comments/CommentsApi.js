export const getComments = async () => {
  return [
    {
      id: '1',
      body: '我們近期有優惠活動，詳情可以來電詢問喔～',
      username: '業者',
      userId: '2',
      parentId: null,
      img: 'https://img.onl/lroVy',

      createdAt: '2021-09-12',
    },
    {
      id: '2',
      body: ' 因為工作關係要經常出差，但是家裡的小乖需要有人照顧，朋友推薦我這家寵物旅宿，真的很不錯！！！不管環境還是服務人員的專業程度都給五顆星',
      username: '爆肝工程師',
      userId: '1',
      parentId: null,
      img: 'https://img.onl/5qiEOS',
      createdAt: '2021-09-11',
    },

    // {
    //   id: '3',
    //   body: 'First comment first child',
    //   username: 'John',
    //   userId: '2',
    //   parentId: '1',
    //   // createdAt: '2021-08-16T23:00:33.010+02:00',
    // },
    // {
    //   id: '4',
    //   body: 'Second comment second child',
    //   username: 'John',
    //   userId: '2',
    //   parentId: '2',
    //   // createdAt: '2021-08-16T23:00:33.010+02:00',
    // },
  ]
}

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: '1',
    username: 'Micheal',
    img: 'https://img.onl/VWWpUj',
    createdAt: new Date().toISOString(),
  }
}

export const updateComment = async (text) => {
  return { text }
}

export const deleteComment = async () => {
  return {}
}
