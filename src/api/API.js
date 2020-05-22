const API = {
  async getOrders(page, pageSize) {
    page = Number(page);
    pageSize = Number(pageSize);

    let data = []
    for (let i = 23705; i < 23807; i++) {
      data.push({
        id: i,
        date: 'Sep 2, 2015 19:45',
        info: {
          type: 'Deposit',
          deposit: { count: '$ 1,500.00', ref: '/toDepositID123124' }
        },
        type: 'Deposit',
        cash: '$ 1,500.00',
        status: 'Done'
      });
    }
    data = data.concat(initData).reverse()

    const partOfData = data.slice((page - 1) * pageSize, page * pageSize)

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        data: partOfData,
        totalData: data.length
      }), 1000)
    });

    return await promise;
  }
}

export default API;

const initData = [
  {
    id: 23807,
    date: 'Jan 14, 2013 21:43',
    info: {
      type: 'BuyItem',
      game: { name: 'WOW Classic', ref: 'https://fortnite.com' },
      item: { name: 'Axe of Ice King', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 140.50',
    status: 'Error'
  },
  {
    id: 23808,
    date: 'Jan 14, 2014 21:43',
    info: {
      type: 'BuyItem',
      game: { name: 'WOW Classic', ref: 'https://fortnite.com' },
      item: { name: 'Axe of Ice King', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 140.50',
    status: 'Done'
  },
  {
    id: 23809,
    date: 'Sep 2, 2015 19:45',
    info: {
      type: 'Deposit',
      deposit: { count: '$ 1,500.00', ref: '/toDepositID123124' }
    },
    type: 'Deposit',
    cash: '$ 1,500.00',
    status: 'Done'
  },
  {
    id: 23810,
    date: 'Dec 4, 2015 06:14',
    info: {
      type: 'BuyItem',
      game: { name: 'WOW Classic', ref: 'https://fortnite.com' },
      item: { name: 'Axe of Ice King', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 43.00',
    status: 'Done'
  },
  {
    id: 23811,
    date: 'Jul 14, 2016 14:23',
    info: {
      type: 'BuyGameArea',
      game: { name: 'WOW Classic', ref: 'https://fortnite.com' },
      item: { name: 'Dream of Life', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 32.99',
    status: 'Done'
  },
  {
    id: 23812,
    date: 'Jan 28, 2017 13:17',
    info: {
      type: 'BuyItem',
      game: { name: 'WOW BFA', ref: 'https://fortnite.com' },
      item: { name: 'Axe of Fire', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 49.00',
    status: 'Error'
  },
  {
    id: 23813,
    date: 'Jul 30, 2018 12:16',
    info: {
      type: 'BuyUser',
      game: { name: 'Fortnite', ref: 'https://fortnite.com' },
      item: { name: 'Death Unikorn', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 4.00',
    status: 'Done'
  },
  {
    id: 23814,
    date: 'Feb 2, 2019 09:44',
    info: {
      type: 'BuyUser',
      game: { name: 'Fortnite', ref: 'https://fortnite.com' },
      item: { name: 'Golden fish of enemy', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 49.00',
    status: 'Done'
  },
  {
    id: 23815,
    date: 'Dec 14, 2019 04:52',
    info: {
      type: 'Deposit',
      deposit: { count: '$ 5,000.00', ref: '/toDepositID123124' }
    },
    type: 'Deposit',
    cash: '$ 5,000.00',
    status: 'Done'
  },
  {
    id: 23816,
    date: 'Dec 27, 2019 14:46',
    info: {
      type: 'BuyUser',
      game: { name: 'Fortnite', ref: 'https://fortnite.com' },
      item: { name: 'Happy 8 ball', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 43.00',
    status: 'Done'
  },
  {
    id: 23817,
    date: 'Oct 26, 2020 09:51',
    info: {
      type: 'BuyItem',
      game: { name: 'WOW BFA', ref: 'https://fortnite.com' },
      item: { name: 'Axe of Ice King', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 65.00',
    status: 'Cancel'
  },
  {
    id: 23818,
    date: 'Apr 7, 2021 11:44',
    info: {
      type: 'BuyItem',
      game: { name: 'Fortnite', ref: 'https://fortnite.com' },
      item: { name: 'Golden Pickaxe', ref: 'https://fortnite.com/golden_pickaxe' }
    },
    type: 'Buy',
    cash: '$ 2.25',
    status: 'Done'
  }
]
