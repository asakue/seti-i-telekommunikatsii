// kf,s b aeyrwbjyfk jn xfcnb
//лабы и функционал от части


//***********ЛАБЫ ЭЩКЕРЕ ЕЕЕЕ УУУУ************/



document.addEventListener('DOMContentLoaded', function() {
    // Массив с данными для лабораторных работ
    // Чтобы добавить новую лабораторную работу:
    // 1. Скопируйблять блструктуру существующей лабораторной работы
    // 2. Измени id, number, title, description и другие поля
    // 3. Чтобы добавить ссылку для скачивания, замени комментарий <!-- LAB_DOWNLOAD_LINK_X --> на реальную ссылку
    // Для удобства редактирования каждая лабораторная работа отделена комментариями
    // Да да ебать
    const labsData = [
        // ЛАБ 1
        {
            id: 1,
            number: "Лаб. №1",
            title: " Интерфейс Cisco Packet Tracer",
            description: "Знакомство с Интерфейсом Cisco Packet Tracer",
            difficulty: "basic",
            icon: "fas fa-network-wired",
            tags: ["Базовый", "Теория"],
            category: "basic",
            content: {
                details: "В данной лабораторной работе вы познакомитесь с интерфейсом Cisco Packet Tracer",
                tasks: [
                    
"1. Для чего используется режим симуляции? ",
"2. Как просмотреть прохождение пакета по уровням модели OSI? ",
"3. Можно ли определить причину того, что посланный в режиме симуляции пакет не дошел до адресата и на каком этапе произошел сбой работы сети? ",
"4. Укажите в составе пакета IP адреса отправителя и получателя. ",
"5. Как изменить фильтры списка событий? ",
"6. Как в режиме симуляции определить, какие протоколы были задействованы в работе сети? ",
"7. Как в режиме симуляции проследить изменение содержимого пакета при прохождении его по сети? ",
"8. Перечислите основные возможности режима симуляции. ."
                ],
                
            }
        },
        {
            id: 2,
            number: "Лаб. №2",
            title: "Протоколы ARP и ICMP  ",
            description: "Изучение протоколов ARP и ICMP",
            difficulty: "basic",
            icon: "fas fa-sitemap",
            tags: ["Базовый", "Практика"],
            category: "basic",
            content: {
                details: " Рассмотреть режим симуляции Cisco Packet Tracer, изучить протоколы ARP и ICMP, используя утилиты ping и tracert. ",
                tasks: [
                    "1. Построение топологии сети, настройка конечных узлов.", 
"2. Настройка маршрутизатора. ",
"3. Проверка работы сети в режиме симуляции. ",
"4. Создание ping-запроса внутри сети. ",
"5. Создание ping-запроса во внешнюю сеть", 
"6. Создание ping-запроса на несуществующий IP-адрес узла.", 
"7. Выполнение индивидуального задания. "
                ],
                
            }
        },
        {
            id: 3,
            number: "Лаб. №3",
            title: " Сетевые службы ",
            description: "Настройка сетевых служб",
            difficulty: "intermediate",
            icon: "fas fa-route",
            tags: ["Средний", "Практика"],
            category: "intermediate",
            content: {
                details: "Эмулятор Cisco Packet Tracer позволяет проводить настройку в составе сервера сети таких сетевых сервисов, как HTTP, DHCP, TFTP, DNS, NTP, EMAIL, FTP",
                tasks: [
                    "1. Что такое рекурсивный запрос DNS и какова схема его работы? ",
                    "2. Укажите назначение типов ресурсных записей в прямой и обратной зонах DNS. ",
                    "3. Как на DNS сервере настраивается пересылка пакетов на другие DNS сервера? ",
                    "4. Опишите работу службы DHCP. ",
                    "5. Как настраивается клиент DHCP? ",
                    "6. Укажите местоположения папки с контентом Web узла и FTP сервера.",
                    "7. Как определяется состав обратных зон DNS сервера в корпоративной сети. ",
"8. Продемонстрируйте настройку служба DNS в Cisco Packet Tracer. ",
"9. Продемонстрируйте настройку служба DHCP в Cisco Packet Tracer. ",
"10. Продемонстрируйте настройку служба FTP в Cisco Packet Tracer. ",
"11. Продемонстрируйте настройку WEB-сервера в Cisco Packet Tracer."
                ],
                
            }
        },
        {
            id: 4,
            number: "Лаб. №4",
            title: " Моделирование сети, состоящей из двух подсетей",
            description: " Научиться настраивать конечные и сетевые устройства в клиент-серверной модели сети.",
            difficulty: "intermediate",
            icon: "fas fa-exchange-alt",
            tags: ["Средний", "Практика"],
            category: "intermediate",
            content: {
                details: "Лабораторная работа посвящена изучению и настройке конечных и сетевых устройств в клиент-серверной модели сети.",
                tasks: [
                    "1. Создание и настройка сети, состоящей из 2 серверов, коммутатора, 2-х компьютеров и маршрутизатора. ",
"2. Подключить к настроенной сети дополнительное оборудование и создать вторую сеть.  ",
"3. В режиме симуляции проверить прохождение пакетов в объединенной сети."
                ],
                
            }
        },
        {
            id: 5,
            number: "Лаб. №5",
            title: " Настройка статической маршрутизации",
            description: " Настройка статической маршрутизации с помощью графических мастеров интерфейса Cisco Packet Tracer",
            difficulty: "intermediate",
            icon: "fas fa-project-diagram",
            tags: ["Средний", "Практика"],
            category: "intermediate",
            content: {
                details: "В этой лабораторной работе вы изучите принципы  настройки статической маршрутизации с помощью графических мастеров интерфейса Cisco Packet Tracer",
                tasks: [
                    "1. В чем преимущества статической маршрутизации? ",
"2. Дайте характеристику маршрутизации? параметрам статической таблицы ",
"3. Какие этапы при установке устройства присущи маршрутизаторам компании Cisco, но отсутствуют у коммутаторов? ",
"4. Чем отличаются интерфейсы командной строки маршрутизатора и коммутатора компании Cisco? ",
"5. Перечислите основные функции маршрутизатора в соответствии с уровнями модели OSI."
                ],
                
            }
        },
        {
            id: 6,
            number: "Лаб. №6",
            title: "Основные команды ОС Cisco IOS",
            description: "Работа с командами ОС Cisco IOS.",
            difficulty: "intermediate",
            icon: "fas fa-wifi",
            tags: ["Средний", "Безопасность"],
            category: "intermediate",
            content: {
                details: "Лабораторная работа посвящена изучению командам ОС Cisco IOS.",
                tasks: [
                    "Для защиты нужно просто повводить команды",
                   
                ],
                
            }
        },
        {
            id: 7,
            number: "Лаб. №7",
            title: " Динамическая маршрутизация",
            description: "Настройка протокола RIP",
            difficulty: "advanced",
            icon: "fas fa-shield-alt",
            tags: ["Продвинутый", "Безопасность"],
            category: "advanced",
            content: {
                details: "В этой лабораторной работе вы настроите протокол RIP",
                tasks: [
                    "1. Настройте корпоративную сеть с использованием протокола RIP. ",
                    "2. Проверьте связь между компьютерами Comp1 и Comp3 с помощью команд ping и tracert при включенном и выключенном пятом маршрутизаторе. ",
                    "3. Проверьте связь между компьютерами ПК0 и Comp1 с помощью команд ping и tracert при включенном и выключенном втором маршрутизаторе. "
                ],
                
            }
        },
        {
            id: 8,
            number: "Лаб. №8",
            title: "Протоколы состояния связи. Настройка протокола OSPF",
            description: "Не готова",
            difficulty: "advanced",
            icon: "fas fa-chart-line",
            tags: ["Продвинутый", "Диагностика"],
            category: "advanced",
            content: {
                details: "Не готова",
                tasks: [
                    "Не готова"
                ],
                
            }
        },
        // ЛАБ 9
        {
            id: 9,
            number: "Лаб. №9",
            title: " Служба NAT.",
            description: "Не готова",
            difficulty: "advanced",
            icon: "fas fa-building",
            tags: ["Продвинутый", "Проектирование"],
            category: "advanced",
            content: {
                details: "Не готова",
                tasks: [
                    "Не готова"
                ],
                
            }
        },
        // ЛАБ 10
        {
            id: 10,
            number: "Лаб. №10",
            title: " Виртуальные локальные сети VLAN.",
            description: "Не готова",
            difficulty: "advanced",
            icon: "fas fa-network-wired",
            tags: ["Продвинутый", "Протоколы"],
            category: "advanced",
            content: {
                details: "Не готова",
                tasks: [
                    "Не готова"
                ],
               
            }
        },
        // ЛАБ 11
        {
            id: 11,
            number: "Лаб. №11",
            title: " Многопользовательский режим работы.",
            description: "Не готова",
            difficulty: "intermediate",
            icon: "fas fa-video",
            tags: ["Средний", "Мультимедиа"],
            category: "intermediate",
            content: {
                details: "Не готова",
                tasks: [
                    "Не готова"
                ],
                
            }
        },
        // ЛАБ 12
        {
            id: 12,
            number: "Лаб. №12",
            title: "Списки управления доступом ACL (Access Control List).",
            description: "Не готова",
            difficulty: "advanced",
            icon: "fas fa-robot",
            tags: ["Продвинутый", "Автоматизация"],
            category: "advanced",
            content: {
                details: "Не готова",
                tasks: [
                    "Не готова"
                ],
                
            }
        },
        // ЛАБ 13
        {
            id: 13,
            number: "Беспроводные сети 1",
            title: "что-то там ",
            description: "Не готова",
            difficulty: "advanced",
            icon: "fas fa-server",
            tags: ["Продвинутый", "Виртуализация"],
            category: "advanced",
            content: {
                details: "Не готова",
                tasks: [
                    "Не готова"
                ],
                
            }
        },
        // ЛАБ 14
        {
            id: 14,
            number: "Беспроводные сети 2",
            title: "тря ля ля",
            description: "Не готова",
            difficulty: "advanced",
            icon: "fas fa-cloud",
            tags: ["Продвинутый", "Виртуализация"],
            category: "advanced",
            content: {
                details: "Не готова",
                tasks: [
                    "Не готова"
                ],
                
            }
        },
        // ЛАБ 15
        {
            id: 15,
            number: "Беспроводные сети 3",
            title: "бла бла бла",
            description: "Не готова",
            difficulty: "intermediate",
            icon: "fas fa-tachometer-alt",
            tags: ["Средний", "Мониторинг"],
            category: "intermediate",
            content: {
                details: "Не готова",
                tasks: [
                    "Не готова"
                ],
                
            }
        }
    ];
    
    // Function to render labs
    function renderLabs(labs) {
        const labsGrid = document.getElementById('labs-grid');
        
        if (!labsGrid) return;
        
        labsGrid.innerHTML = '';
        
        labs.forEach(lab => {
            const labCard = document.createElement('div');
            labCard.className = 'lab-card';
            labCard.dataset.category = lab.category;
            
            // Create difficulty dots
            let difficultyDots = '';
            if (lab.difficulty === 'basic') {
                difficultyDots = `
                    <div class="difficulty-dots">
                        <span class="difficulty-dot active"></span>
                        <span class="difficulty-dot"></span>
                        <span class="difficulty-dot"></span>
                    </div>
                `;
            } else if (lab.difficulty === 'intermediate') {
                difficultyDots = `
                    <div class="difficulty-dots">
                        <span class="difficulty-dot active"></span>
                        <span class="difficulty-dot active"></span>
                        <span class="difficulty-dot"></span>
                    </div>
                `;
            } else {
                difficultyDots = `
                    <div class="difficulty-dots">
                        <span class="difficulty-dot active advanced"></span>
                        <span class="difficulty-dot active advanced"></span>
                        <span class="difficulty-dot active advanced"></span>
                    </div>
                `;
            }
            
            labCard.innerHTML = `
                <div class="lab-header">
                    <span class="lab-number">${lab.number}</span>
                    <h3 class="lab-title">${lab.title}</h3>
                    <div class="lab-icon">
                        <i class="${lab.icon}"></i>
                    </div>
                </div>
                <div class="lab-body">
                    <p class="lab-description">${lab.description}</p>
                    <div class="lab-footer">
                        <button class="lab-btn open-lab" data-id="${lab.id}">Подробнее <i class="fas fa-arrow-right"></i></button>
                        <a href="lab_files/lab_${lab.id}.zip" class="lab-btn lab-download-btn" download>Скачать <i class="fas fa-download"></i></a>
                    </div>
                </div>
            `;
            
            labsGrid.appendChild(labCard);
        });
        
        document.querySelectorAll('.open-lab').forEach(button => {
            button.addEventListener('click', function() {
                const labId = parseInt(this.getAttribute('data-id'));
                openLabModal(labId);
            });
        });
    }
    
    function openLabModal(labId) {
        const lab = labsData.find(lab => lab.id === labId);
        
        if (!lab) return;
        
        const modal = document.getElementById('lab-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalNumber = document.getElementById('modal-number');
        const modalBody = document.getElementById('modal-body');
        const modalDownload = document.getElementById('modal-download');
        
        modalTitle.textContent = lab.title;
        modalNumber.textContent = lab.number;
        
        modalBody.innerHTML = `
            <div class="lab-details">
                <h3>Описание</h3>
                <p>${lab.content.details}</p>
            </div>
            <div class="lab-tasks">
                <h3>Задания</h3>
                <ul>
                    ${lab.content.tasks.map(task => `<li>${task}</li>`).join('')}
                </ul>
            </div>
            
        `;
        
        modalDownload.href = `lab_files/lab_${lab.id}.zip`;
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    
    renderLabs(labsData);
});
//разделение на сложность и другие функции от части реализованы но не работают и не хочу 4тобы работали