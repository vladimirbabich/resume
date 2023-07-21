const projects = [
  {
    url: 'https://www.retester.tech/',
    name: 'RETESTER.TECH',
    status: 'Активен.',
    desc: `сайт для тестирования знаний регулярных выражений.`,
    descriptionRows: [
      `В данный момент доступно 2 формата:`,
      `- тест с открытым ответом — пользователю даётся текст, задание и ожидаемый результат, пользователь должен ввести регулярное выражение, которое даст ожидаемый результат.`,
      `- квиз-тест — пользователю даётся вопрос и варианты ответа, для каждого вопроса нужно выбрать 1 или более вариантов ответа.`,
      `По завершении теста пользователь видит статистику и может узнать ответы на все вопросы. На странице Leaderboard можно увидеть результаты всех пользователей с фильтрацией по типу теста.`,
      `В дальнейшем на сайт будут добавлены другие типы тестов и не только по регулярным выражениям.`,
      `Также реализована регистрация, в случае завершения теста без аккаунта для пользователя генерируется имя, которое сохраняется на локальном хранилище.`,
    ],
    technologies: [
      `Язык программирования: клиент - <code style='color:#e95656'>Typescript</code>, сервер - <code style='color:#e95656'>Javascript</code>.`,
      `Сайт реализован на <code style='color:#e95656'>React</code> с применением
    <code style='color:#e95656'>Typescript</code>.`,
      `<code style='color:#e95656'>Redux Toolkit</code> используется для управления состоянием.`,
      `Стилизация и адаптивная вёрстка выполнены с помощью препроцессора
    <code style='color:#e95656'>SCSS</code>.`,
      `Регистрация/авторизация с использованием <code style='color:#e95656'>JWT</code>.`,
      `Запросы к серверу выполняются через <code style='color:#e95656'>RTK Query</code>.`,
      `Сервер написан с применением <code style='color:#e95656'>Express</code>.`,
      `База данных и ОРМ: <code style='color:#e95656'>PostgreSQL</code> + <code style='color:#e95656'>Sequelize</code>.`,
    ],
  },
  {
    url: 'https://github.com/vladimirbabich/job-app',
    name: 'JOB APP(github)',
    status: 'Окончен.',
    desc: `мобильное приложение для поиска фрилансеров и заказов.`,
    descriptionRows: [
      `Пользователь может зарегистрироваться, изменить свои личные данные, добавить/обновить навыки, просмотреть доступные работы, просмотреть доступных исполнителей, отфильтровать их по навыкам.`,
      `В приложении возможно создать заказ и добавить его в базу данных.`,
      `У каждого заказа есть галерея фото, адаптированная под любые размеры.`,
      `Приложение сделано с целью ознакомиться детальнее с React Native, запуск и доработка не планируются.`,
      `Демонстрацияlink||https://youtube.com/shorts/3u4EuGOwJ58?feature=share`,
    ],
    technologies: [
      `Язык программирования клиент+сервер: <code style='color:#e95656'>Javascript</code>.`,
      `Использовались библиотеки <code style='color:#e95656'>React Native</code> и <code style='color:#e95656'>Expo</code>.`,
      `Регистрация/авторизация с использованием <code style='color:#e95656'>JWT</code>.`,
      `Запросы к серверу выполняются через <code style='color:#e95656'>Axios</code>`,
      `Сервер написан с применением <code style='color:#e95656'>Express</code>.`,
      `База данных и ОРМ: <code style='color:#e95656'>PostgreSQL</code> + <code style='color:#e95656'>Sequelize</code>.`,
    ],
  },
  {
    url: '/',
    name: 'resume-bbch.vercel.app',
    status: 'Активен.',
    desc: `сайт-резюме (Вы находитесь здесь).`,
    technologies: [
      `<code style='color:#e95656'>React</code> & <code style='color:#e95656'>Javascript</code>.`,
      `<code style='color:#e95656'>HTML</code> & <code style='color:#e95656'>SCSS</code>.`,
      `Большая часть стилизации и адаптивность реализованы через <code style='color:#e95656'>Material UI</code>.`,
    ],
  },
  {
    url: 'https://challenges-bbch.vercel.app/',
    name: 'Challenges',
    status: 'Активен.',
    desc: `реализация интересных и простых заданий.`,
    descriptionRows: [
      `На данный момент добавил простые реализации интерфейса: TODO лист и пример стейтменеджмента на Redux.`,
      `А также реализовал алгоритмы: проверка палиндрома, проверка правильности скобок, поиск уникальных элементов в массиве, поиск простых чисел ниже заданного.`,
    ],
    technologies: [
      `Язык программирования: <code style='color:#e95656'>Javascript</code>/<code style='color:#e95656'>Typescript</code>.`,
      `UI: <code style='color:#e95656'>React</code> + иногда <code style='color:#e95656'>Bootstrap</code>.`,
      `Statemanager: <code style='color:#e95656'>Redux Toolkit</code>.`,
    ],
  },
];

export const about = [
  `Впервые заинтересовался программированием к концу школы, поступил в университет на информационные технологии.`,
  `Учился средне, не уделял должного внимания далёким от программирования предметам, но высшее образование получил.`,
  `После обучения вместо поиска работы занялся обучением
  javascript, параллельно занимался геймдевом(web & unity) и youtube-каналом,
  не связанным с программированием.`,
  `Через несколько лет после этого устроился таргетологом в
  компанию по онлайн-обучению современным профессиям.`,
  `Полноценно вернулся к программированию к концу 2022-го года, за это время изучил реакт, редакс, попробовал несколько других библиотек, параллельно обучению делал проекты Job-app и Retester.tech.`,
  `Ищу постоянную работу на должности фронт-енд / (возможно) бэк-енд разработчика.`,
];
export const skillSets = [
  {
    set: 'Front-end',
    skills: [
      { level: 'good', name: 'HTML / CSS / SCSS' },
      { level: 'good', name: 'Javascript' },
      { level: 'mid', name: 'Typescript' },
      { level: 'good', name: 'React' },
      { level: 'mid', name: 'Redux Toolkit' },
      { level: 'mid', name: 'React Native' },
      { level: 'bad', name: 'Material UI' },
    ],
  },
  {
    set: 'Back-end',
    skills: [
      { level: 'mid', name: 'PostgreSQL' },
      { level: 'mid', name: 'Sequelize' },
      { level: 'bad', name: 'Express' },
    ],
  },
  {
    set: 'Others',
    skills: [
      { level: 'mid', name: 'Git' },
      { level: 'mid', name: 'REST api' },
      { level: 'mid', name: 'Google Spreadsheet API' },
    ],
  },
];
export default projects;
