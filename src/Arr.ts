interface IArr {
  id: string;
  number: string;
  danger: 'ОПАСНО' | 'СКОРЕЕ ОПАСНО' | 'БЕЗОПАСНО';
  brief: string;
  description: string;
  research?: string[];
}

const Arr: IArr[] = [
  {
    id: '0',
    number: '100',
    danger: 'ОПАСНО',
    brief:
      'E100 Куркумин. Желтый краситель, получаемый из корня куркумы. Используется в кондитерских изделиях, супах, соусах и других продуктах. Не имеет вредного воздействия на организм человека.',
    description: '',
  },
  {
    id: '1',
    number: '101',
    danger: 'ОПАСНО',
    brief:
      'E101 Рибофлавин (Лактофлавин). Желтый краситель, получаемый из витамина В2. Используется в производстве сыра, масла, соков и других продуктов. Не имеет вредного воздействия на организм человека.',
    description: '',
  },
  {
    id: '2',
    number: '102',
    danger: 'БЕЗОПАСНО',
    brief:
      'E102 Таргозин. Желтый краситель, получаемый из куркумина и других растительных красителей. Используется в производстве соков, лимонадов, кондитерских изделий и других продуктов. Может вызывать аллергические реакции у некоторых людей.',

    description: '',
  },
  {
    id: '3',
    number: '104',
    danger: 'ОПАСНО',
    brief:
      'E104 Желтый хинолиновый краситель. Желтый краситель, получаемый из орто-крезола. Используется в кондитерских изделиях, супах, соусах и других продуктах. Может вызывать аллергические реакции у некоторых людей.',

    description: '',
  },
];

export default Arr;