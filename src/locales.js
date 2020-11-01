export default {
  aboutApp = {
		en: {name: 'Informational technology of visual simulation of pairwise comparisons (VSPC)',
		sname: "Visual simulation of pairwise comparisons (VSPC)",
		version: 'Version',
		authors: 'Copyright: Kolodny V., Khokhlov A. 2018',
		contact: 'Contact: 16mb.com@gmail.com',
		 process: 'The process of executing the program is as follows:',
		  li1: 'Input names of alternatives.',
		  li2: 'A pairwise comparison of all alternatives.',
		  li3: 'Display the best alternative and ranking.', 
		  p1: 'The interface has the ability to select multiple languages (Ukrainian, Russian, English) and makes more easier user navigation during the comparison process from the introduction of alternatives to outputting the results of the program.', 
		  p3: 'The program has the ability to enter 4-9 alternatives.'},
		ru: {name: 'Информационная технология визуального моделирования попарных сравнений (ВМПС)',
		version: 'Версия',
		authors: 'Авторские права: Колодный В. В., Хохлов А. Д. 2018',
		contact: 'Контакты: 16mb.com@gmail.com',
		sname: "Визуальное моделирование попарных сравнений (ВМПС)",
		 process: 'Процесс выполнения программы выглядит следующим образом:', 
		 li1: 'Ввод названий альтернатив.', 
		 li2: 'Попарное сравнение всех альтернатив.', 
		 li3: 'Вывод наилучшей альтернативы и результирующей ранжировки.', 
		 p1: 'Интерфейс имеет возможность выбора нескольких языков (украинский, русский, английский) и облегчает навигацию пользователя в процессе сравнения, от введения альтернатив до вывода результатов работы программы.', 
		 p3: 'Программа имеет возможность ввода 4-9 альтернатив.'},
		ua: {name: 'Інформаційна технологія візуального моделювання попарних порівнянь (ВМПП)',
		sname: "Візуальне моделювання попарних порівнянь (ВМПП)",
		version: 'Версія',
		authors: 'Авторські права: Колодний В. В., Хохлов А. Д., 2018',
		contact: 'Контакти: 16mb.com@gmail.com',
		 process: `Процес виконання програми виглядає наступним чином:`, 
		 li1: 'Введення назв альтернатив.', 
		 li2: 'Попарне порівняння всіх альтернатив.', 
		 li3: 'Виведення найкращої альтернативи та результуючого ранжування.', 
		 p1: 'Інтерфейс дає можливість вибору декількох мов (Українська, Російська, Англійська) та полегшує навігацію користувача у процесі порівняння від введення альтернатив до виведення результатів роботи програми.', 
		 p3: 'Програма має можливість введення від 4 до 9 альтернатив.'}
	},
  en: {
    loc: 'en',
    array: ["Truthfulness", "Selflessness", "Wealth", "Dreaminess", "Endurance", "Ingenuity", "Ability to listen", "Stress", "resistance", "Curiosity", "Logic", "Independence", "Reliability", "Equilibrium", "Friendliness", "Good memory", "Beauty", "Intellect", "Physical strength", "Humor", "Willpower", "Energetic", "Collectivism", "Credulity", "Modesty", "Obligatory", "Housekeeping", "Inflexibility", "Generosity", "Appreciation", "Self-analysis", "Keenness", "Desperation", "Kindness", "Politeness", "Education", "Impulsiveness", "Foresight", "Optimism", "Cleanliness", "Breeding"],
    sameAlt: "Alternative already exist", update: 'Update list', rndAmount: "Select number of alternatives", traits: "Personality traits", yourTopic: "Your topic", aboutApp: this.aboutApp.en, for1: "Step of First user", for2: "Step of Second user", closeAbout: 'Return to alternatives input', howTo: 'How to use', about: 'About App', again: 'Try again', best: 'The best alternative is: ', range: "Ranging", bests: 'The best alternatives are ', altlab: 'Alternative', ph: 'Input name of your alternative here..', acc: ['min.', 'normal', 'max.'], lang: "Choose language", inputTitle: 'Add from 4 to 9 alternatives', amount: 'Choose accuracy', add: 'Add to alternatives list', ready: "Ready", alts: 'Alternatives', compare: "Pairwise compare", answer: 'Next', result: 'Result of pairwise comparing'
  },
  ru: {
    loc: 'ru',
    array: ["Правдивость", "Бескорыстие", "Богатство", "Мечтательность", "Выносливость", "Изобретательность", "Умение выслушать", "Стрессоустойчивость", "Любознательность", "Логичность", "Независимость", "Надежность", "Уравновешенность", "Дружелюбие", "Хорошая память", "Красота", "Ум", "Физическая сила", "Юмор", "Сила воли", "Энергичность", "Коллективизм", "Доверчивость", "Скромность", "Обязательность", "Хозяйственность", "Непреклонность", "Щедрость", "Благодарность", "Самоанализ", "Отзывчивость", "Отчаянность", "Доброта", "Вежливость", "Образованность", "Импульсивность", "Предусмотрительность", "Оптимизм", "Опрятность", "Хорошие манеры"],
    sameAlt: "Альтернатива добавлена", update: 'Обновить список', rndAmount: "Выберите количество альтернатив", traits: "Черты личности", yourTopic: "Своя тематика", aboutApp: this.aboutApp.ru, for1: "Ход первого пользователя", for2: "Ход второго пользователя", howTo: 'Инструкция', closeAbout: 'Вернуться к вводу альтернатив', about: 'Про программу', again: 'Начать сначала', best: 'Лучшая альтернатива: ', range: "Ранжирование", bests: 'Лучшие альтернативы: ', altlab: 'Альтернатива', ph: 'Введите название альтернативы..', acc: ['мин.', 'норм.', 'макс.'], lang: "Выберите язык", inputTitle: 'Введите от 4 до 9 альтернатив', amount: 'Выберете точность сравнения', add: 'Добавить к списку альтернатив', ready: 'Закончить ввод альтернатив', alts: 'Альтернативы', compare: "Попарное сравнение", answer: 'Дальше', result: 'Результат попарного сравнения'
  },
  ua: {
    loc: 'ua',
    array: ["Правдивість", "Безкорисливість", "Багатство", "Мрійність", "Витривалість", "Винахідливість", "Вміння вислухати", "Стресостійкість", "Допитливість", "Логічність", "Незалежність", "Надійність", "Врівноваженість", "Дружелюбність", "Гарна пам'ять", "Красота", "Розум", "Фізична сила", "Гумор", "Сила волі", "Енергійність", "Колективізм", "Довірливість", "Скромність", "Обов'язковість", "Хазяйновитість", "Непохитність", "Щедрість", "Вдячність", "Самоаналіз", "Чуйність", "Відчайдушність", "Доброта", "Ввічливість", "Освіченість", "Імпульсивність", "Передбачливість", "Оптимізм", "Охайність", "Гарні манери"],
    sameAlt: "Альтернатива вже додана", update: 'Оновити список', rndAmount: "Оберіть кількість альтернатив", traits: "Риси особистості", yourTopic: "Своя тематика", aboutApp: this.aboutApp.ua, for1: "Крок першого користувача", for2: "Крок другого користувача", howTo: 'Інструкція', closeAbout: 'Повернутись до введення альтернатив', about: 'Про програму', again: 'Почати спочатку', best: 'Найкраща альтернатива: ', range: "Ранжування", bests: 'Найкращими альтернативами є ', altlab: 'Альтернатива', ph: 'Введіть назву альтернативи..', acc: ['мін.', 'норм.', 'макс.'], lang: "Оберіть мову", inputTitle: 'Введіть від 4 до 9 альтернатив', amount: 'Оберіть точність порівняння', add: 'Додати до списку альтернатив', ready: 'Закінчити введення альтернатив', alts: 'Альтернативи', compare: "Попарне порівняння", answer: 'Далі', result: 'Результат попарного порівняння'
  }
}