"use strict";

// В каждой строке: вопрос, аргумент защиты, обвинение, нейтральный ответ.
const CASES = [
  {name:"Туалет элитного ресторана",personality:"Нарцисс в мраморе. Обращаться исключительно на «вы».",quote:"Мой аромат стоит больше вашего ужина.",charge:"Роскошь в особо крупном размере при недостатке приватности.",evidence:["Мрамор и латунь", "Щель в двери: приватность под вопросом", "Полотенца, которые страшно трогать"],questions:[
    ["Почему дверь не закрывается до конца?","Это вентиляция. Клиент заботится о свежести впечатлений.","Потому что бюджет на замок ушёл в мрамор.","Вопрос открытых и закрытых дверей требует обсуждения."],
    ["Посетитель боится брать полотенце. Объяснитесь.","Клиент прививает бережное отношение к искусству.","Полотенце выглядит как вещь, за которую выставят счёт.","Мы пока не установили намерения полотенца."],
    ["Зачем здесь зеркало во всю стену?","Чтобы человек увидел себя в лучшем свете.","Чтобы унижение было видно со всех ракурсов.","Зеркало отражает. Остальное требует экспертизы."],
    ["Аромат заглушает вкус ужина. Это нормально?","Это бесплатное дополнение к дегустационному меню.","Это парфюмерная атака на посетителя.","О вкусах и ароматах, как известно, не спорят."],
    ["Ваше последнее слово в защиту клиента?","Он дарит роскошь даже в самые уязвимые минуты.","За такую цену клиент обязан хотя бы закрываться.","Предлагаю выслушать мнение мрамора."]]},
  {name:"Туалет в забегаловке",personality:"Уставший реалист. Видел всё. Не гордится.",quote:"Зато сюда без записи.",charge:"Систематическое испытание органов чувств на прочность.",evidence:["Мигающая лампа", "Кран с режимами «Арктика» и «лава»", "Мыло числится пропавшим"],questions:[
    ["Почему лампа постоянно моргает?","Она подаёт сигнал: здесь ещё есть жизнь.","Даже электричество не хочет здесь задерживаться.","Не исключено, что это азбука Морзе."],
    ["Куда пропало мыло?","Клиент тоже жертва недобросовестного снабжения.","Здесь чистые руки существуют только в теории.","Мыло не явилось на заседание."],
    ["Почему из крана идёт кипяток?","Клиент стремится согреть каждого посетителя.","Потому что комфорт здесь считают слабостью.","Тепло — понятие относительное."],
    ["Посетитель держал дверь коленом. Это сервис?","Это бесплатная тренировка устойчивости.","Это вынужденное единоборство с инфраструктурой.","Колено действовало по собственной инициативе."],
    ["Почему мы должны его оставить?","Он единственный не отказал человеку в трудную минуту.","Человечество заслуживает хотя бы мыла и замка.","Я бы предложил отложить вопрос до обеда."]]},
  {name:"Туалет торгового центра",personality:"Корпоративный оптимист. В любой очереди видит рост.",quote:"Вы почти пришли. Ещё один этаж.",charge:"Организация квеста без согласия участников.",evidence:["Указатели по кругу", "Очередь до фуд-корта", "Сушилка мощнее пылесоса"],questions:[
    ["Почему указатели ведут мимо трёх магазинов?","Клиент помогает совместить необходимое с полезным.","Это торговая воронка на чужом мочевом пузыре.","Маршрут находится в процессе осмысления."],
    ["Как вы объясните очередь?","Популярность — лучшее доказательство доверия.","Кабинок меньше, чем обещаний на плане здания.","Очередь состоит из отдельных людей."],
    ["Почему сушилка пугает детей?","Она предупреждает, что действительно работает.","Руки высыхают вместе с нервной системой.","Дети не предоставили письменных показаний."],
    ["Кабинка закрыта на уборку весь день. Почему?","Клиент относится к чистоте с редким усердием.","Уборка стала способом не пускать посетителей.","День ещё формально не закончился."],
    ["Какова польза вашего клиента городу?","Он даёт бесплатное убежище среди платных удовольствий.","Он превращает базовую потребность в марафон.","Предлагаю сначала уточнить, что именно нужно городу."]]},
  {name:"Туалет на вокзале",personality:"Суровый диспетчер. Не верит ни слезам, ни пересадкам.",quote:"Ваш поезд подождёт. Хотя нет.",charge:"Взимание платы за тревожность повышенной срочности.",evidence:["Турникет на входе", "Очередь без расписания", "Чемодан не помещается в кабинку"],questions:[
    ["Почему на входе турникет?","Клиент обеспечивает организованный доступ.","Он монетизирует отсутствие альтернатив.","Турникет просто выполняет круговое движение."],
    ["Человек опоздал на поезд из-за очереди. Как это объяснить?","Клиент не отвечает за расписание железной дороги.","Пропускная способность осталась в прошлом веке.","Возможно, поезд ушёл слишком вовремя."],
    ["Куда посетителю поставить чемодан?","Компактность помогает держать вещи рядом.","Он должен выбирать между собой и багажом.","Чемодан пока не признан участником процесса."],
    ["Почему дверь громче объявления о прибытии?","Она сообщает, что кабинка освободилась.","Грохот двери лишает посетителей покоя и заглушает объявления.","Нужна сравнительная запись обоих звуков."],
    ["Есть ли у клиента смягчающие обстоятельства?","Он работает, когда весь город спит.","Неудобство остаётся неудобством, даже круглосуточно.","Предлагаю дождаться следующего состава."]]},
  {name:"Туалет в офисе",personality:"Пассивно-агрессивный коллега. Помнит ваши перерывы.",quote:"Коллеги, убедительная просьба.",charge:"Подмена личного пространства корпоративной культурой.",evidence:["Объявления с тремя восклицательными знаками", "Датчик света на 30 секунд", "Слышимость как на планёрке"],questions:[
    ["Зачем здесь двенадцать поучительных записок?","Клиент заботится о прозрачности правил.","Даже здесь сотрудникам читают лекции.","Необходимо согласовать редакцию записок."],
    ["Почему свет гаснет через полминуты?","Это вклад клиента в энергосбережение.","Посетитель вынужден танцевать в темноте.","Предлагаю создать рабочую группу по свету."],
    ["Разговоры слышны через стену. Ваша позиция?","Открытая коммуникация — ценность компании.","Приватность не должна зависеть от громкости кашля.","Я вернусь с комментариями после синка."],
    ["Шеф обсуждает задачи у раковины. Кто виноват?","Клиент не может контролировать руководителя.","Планировка превратила уборную в переговорную.","Давайте запаркуем этот вопрос."],
    ["Как оцените работу подсудимого?","Это последнее место, где можно выдохнуть между встречами.","Даже перерыв он превратил в рабочую задачу.","Нужны KPI и обратная связь за квартал."]]},
  {name:"Биотуалет на фестивале",personality:"Паникёр с душой рок-звезды. Держится на энтузиазме.",quote:"Я тоже не выбирал этот лайнап.",charge:"Проверка человеческой смелости в замкнутом пространстве.",evidence:["Пластиковые стены на солнцепёке", "Бас проникает без билета", "Очередь длиннее сета"],questions:[
    ["Почему внутри так жарко?","Клиент бесплатно предоставляет сауну.","Это пластиковая духовка с посетителем внутри.","Погода отказалась давать показания."],
    ["Почему кабинка качается под бас?","Клиент поддерживает культурную программу.","Посетитель пришёл не на аттракцион.","Надо уточнить музыкальный размер."],
    ["Почему бумага закончилась ещё до первого концерта?","Клиент не был готов к такому аншлагу.","Расходники забыли включить в бюджет праздника.","У бумаги, возможно, был однодневный билет."],
    ["Очередь слушает концерт отсюда. Это нормально?","Зато отсюда отлично слышно сцену.","Люди заплатили за музыку, а получили ожидание.","Сначала нужно собрать отзывы об акустике."],
    ["Чем оправдаете существование клиента?","Без него фестиваль стал бы гораздо более диким.","Отсутствие альтернатив не оправдывает это испытание.","Предлагаю решить после хедлайнера."]]},
  {name:"Туалет модной кофейни",personality:"Концептуальный интроверт. Не любит быть понятным.",quote:"Это не очередь. Это комьюнити.",charge:"Дизайн, препятствующий использованию по назначению.",evidence:["Дверь без опознавательных знаков", "Раковина размером с чашку", "Сухоцветы вместо крючка"],questions:[
    ["Почему никто не может найти дверь?","Клиент сохраняет визуальную чистоту пространства.","Навигацию принесли в жертву красивой фотографии.","Дверь — это социальный конструкт."],
    ["Руки не помещаются в раковину. Ваша защита?","Клиент учит разумному потреблению воды.","Раковину проектировали для эспрессо, а не людей.","Нужно уточнить, для каких рук задумана эта раковина."],
    ["Почему нет крючка, зато есть сухоцветы?","Клиент поддерживает связь человека с природой.","Сумка лежит на полу ради ветки в вазе.","Ветка не уполномочена давать объяснения."],
    ["Как отличить мыло от крема без подписей?","Клиент предлагает маленькое сенсорное открытие.","Гигиена не должна быть игрой в угадайку.","Нужна кураторская экскурсия по флаконам."],
    ["Заслуживает ли клиент оправдания?","Он хотя бы сделал повседневность чуть красивее.","Красота, которой нельзя пользоваться, провалила задачу.","Я бы сначала дождался рецензии критика."]]},
  {name:"Туалет ночного клуба",personality:"Обаятельный хаос. Ваш новый лучший друг до утра.",quote:"Ты потрясающе выглядишь. Наверное.",charge:"Создание параллельной вечеринки на территории гигиены.",evidence:["Неон вместо нормального света", "Очередь как закрытый клуб", "Замок ушёл танцевать"],questions:[
    ["Почему здесь невозможно рассмотреть своё лицо?","Клиент щадит посетителей после четырёх утра.","Неон маскирует всё, включая грязь.","Лицо могло измениться по независимым причинам."],
    ["Почему у зеркала проводится собрание?","Клиент создаёт пространство взаимоподдержки.","К раковине невозможно пройти из-за фотосессии.","Собрание ещё не выбрало председателя."],
    ["На кабинке сломан замок. Что скажете?","Клиент пострадал от слишком бурной ночи.","Посетители не должны охранять дверь друг для друга.","Замок в данный момент недоступен для комментариев."],
    ["Почему пол липкий? Объясните суду.","Клиент удерживает посетителей от скольжения.","Это вещественное доказательство отсутствия уборки.","Нужно установить происхождение каждого пятна."],
    ["Почему суд должен проявить снисхождение?","Здесь люди получают поддержку в самый странный час.","Дружелюбие не заменяет исправную сантехнику.","Предлагаю всем сначала выйти на воздух."]]}
];

// Реплики подсудимых следуют порядку вопросов в CASES.
const CHARACTERS = [
  {short:"Элитный ресторан",initial:0,reactions:["Это не щель. Это архитектурный жест.","Итальянский хлопок. Прошу обращаться бережно.","Неужели вам не нравится ваше отражение?","Это нишевый аромат. Не всем дано понять.","Надеюсь, у моего адвоката тоже есть звезда."],after:{positive:"Наконец-то человек с хорошим вкусом.",negative:"Я за такое даже руки вам не подам.",neutral:"Вы вообще читали моё портфолио?"},final:{innocent:"Я знал: безупречный вкус неподсуден.",guilty:"Ремонт? Только с моим дизайнером.",fired:"Принесите другого адвоката. Этот не подошёл."}},
  {short:"Забегаловка",initial:1,reactions:["Я хотя бы пытаюсь светить.","Последний раз видел его в понедельник.","Сам обжигаюсь. Жаловаться некому.","Колено надёжнее моей последней петли.","Мне бы не приговор. Мне бы сантехника."],after:{positive:"Спасибо. Давно обо мне так не говорили.",negative:"Понятно. И вы туда же.",neutral:"Вы тоже просто пережидаете смену?"},final:{innocent:"Ну вот. Живём до следующей проверки.",guilty:"Если правда починят — я даже рад.",fired:"Ничего. Меня и раньше никто не защищал."}},
  {short:"Торговый центр",initial:0,reactions:["Зато по пути скидки. Я проверял.","У нас высокая посещаемость!","Сушилка просто очень мотивирована.","Мы стремимся к идеальной чистоте. Стремимся долго.","Я работаю на благо всех этажей."],after:{positive:"Вот это клиентоориентированность!",negative:"Ваш отзыв очень важен для нас. К сожалению.",neutral:"Вы тоже ждёте согласования управляющего?"},final:{innocent:"Благодарим за доверие. Приходите ещё!",guilty:"Мы закрыты на улучшение впечатлений.",fired:"Ваше обращение передано другому специалисту."}},
  {short:"Вокзал",initial:0,reactions:["Без контроля тут проходной двор.","Я предупреждал: приходите заранее.","Чемоданам отдельный билет никто не продавал.","Зато слышно, когда освободилось.","Тридцать лет без отпуска. Это считается?"],after:{positive:"Грамотно. По расписанию.",negative:"Адвокат, вы с какой платформы вообще?",neutral:"Говорите быстрее. Люди ждут."},final:{innocent:"Дело закрыто. Следующий!",guilty:"Ремонтные работы. Сроки уточняются.",fired:"Ваш адвокат отправился без вас."}},
  {short:"Офис",initial:1,reactions:["Коллеги сами просили зафиксировать правила.","Бюджет на свет сократили. Как и всем.","У нас политика открытых дверей. К сожалению.","Я тоже пытался поставить статус «не беспокоить».","Только не начинайте ежегодную оценку."],after:{positive:"Спасибо, зафиксирую в самооценке.",negative:"Это можно было обсудить один на один.",neutral:"Понял. Ещё одна встреча без результата."},final:{innocent:"Отлично. Можно вернуться к перерыву?",guilty:"Добавьте ремонт в план на квартал.",fired:"Доступы адвоката будут отключены сегодня."}},
  {short:"Фестиваль",initial:1,reactions:["Я стою на солнце с открытия. Мне тоже жарко!","Я не танцую. Я пытаюсь устоять.","Она не выдержала разогрева.","Я вообще-то тоже хотел к сцене.","Только не оставляйте меня здесь на второй день."],after:{positive:"Ты мой хедлайнер, адвокат.",negative:"Это хуже, чем третий бис.",neutral:"Я сейчас развалюсь от неизвестности."},final:{innocent:"Я выжил. Где мой браслет участника?",guilty:"Только увезите меня в тень.",fired:"Так кто теперь будет держать дверь?!"}},
  {short:"Модная кофейня",initial:0,reactions:["Если дверь заметна — концепция не работает.","Это раковина в формате small.","Сухоцветы держат атмосферу. Крючок так не умеет.","Мы верим в интуицию гостя.","Наконец-то разговор о моей ценности."],after:{positive:"Вы очень тонко чувствуете пространство.",negative:"Вы просто не моя аудитория.",neutral:"Да. Оставим пространство для интерпретации."},final:{innocent:"Я так и знал. Это был перформанс.",guilty:"Пожалуйста, крючок — только матовый.",fired:"Нам нужен адвокат с другим видением."}},
  {short:"Ночной клуб",initial:0,reactions:["Поверьте, сейчас так лучше.","Там человека поддерживают. Не мешайте.","Замок был с нами в начале вечера.","Это не я. Это коктейль номер шесть.","Мы же все немного сломаны к утру."],after:{positive:"Ты лучший. Я серьёзно. Обнимемся?",negative:"А я думал, мы подружились.",neutral:"Ты сам-то понял, что сказал?"},final:{innocent:"Продолжаем! Только сначала уборка.",guilty:"Ладно. Мне давно нужна была пауза.",fired:"Адвокат потерялся. Кто-нибудь видел адвоката?"}}
];

function decideVerdict(scores) {
  if (scores.neutral > scores.positive && scores.neutral > scores.negative) return "fired";
  return scores.positive >= scores.negative ? "innocent" : "guilty";
}
function shuffle(items, random = Math.random) {
  const result = [...items];
  for (let i=result.length-1;i>0;i--) { const j=Math.floor(random()*(i+1)); [result[i],result[j]]=[result[j],result[i]]; }
  return result;
}
const ANGER = [
  ["Сдержан", "Суд слушает."],
  ["Недоволен", "Адвокат, это ответ или предисловие к ответу?"],
  ["Раздражён", "Снова ни слова по существу. Вы защищаете клиента или мебель?"],
  ["Злится", "Хватит увиливать! Слишком много пустых слов для одного заседания!"],
  ["В ярости", "АДВОКАТ! Ещё одна пустая фраза — и защищать придётся уже вашу карьеру!"],
  ["Взбешён", "ХВАТИТ! ПЯТЬ ОТВЕТОВ — И НИ ОДНОЙ ПОЗИЦИИ! Вы вообще на чьей стороне?!"]
];
const ENDINGS = {
  innocent:{title:"Не виновен",text:"Подсудимый оправдан и возвращается к своим непосредственным обязанностям.",quote:"Защита была изобретательной. Не факт, что убедительной. Но достаточной."},
  guilty:{title:"Виновен",text:"Подсудимый отправляется на принудительный ремонт. Замок, мыло и уважение к человеку — обязательны.",quote:"С таким адвокатом прокурору можно было сегодня не приходить."},
  fired:{title:"Адвокат уволен",text:"Вы отстранены за отсутствие позиции. Дело передадут новому защитнику; судьба туалета пока не решена.",quote:"ВЫ НЕ ПОМОГАЕТЕ ДЕЛУ! Даже ёршик занял бы более определённую позицию!"}
};

const INTRO_LINES = [
  "тот, кому доверяют самое сокровенное.",
  "место, где все остаются без прикрытия.",
  "последняя надежда в трудную минуту.",
  "место, где даже сильные мира сего присаживаются.",
  "молчаливый свидетель ваших слабостей.",
  "тот, чью репутацию пора отмыть."
];

if (typeof document !== "undefined") {
  const $=id=>document.getElementById(id);
  let stage="intro",caseIndex=-1,questionIndex=0,scores,answered=false,caseNumber="";
  let introTimer, introStep=0;
  const sceneDuration=2428; // Прежние 680 мс появления + 1 с текста + 748 мс исчезновения
  // По возможности не повторяем фразу прошлого визита. Игра работает
  // и при запрете хранилища (например, в некоторых режимах file://).
  let previousLine=-1;
  try { const saved=localStorage.getItem("court-intro-line"); if(saved!==null)previousLine=Number(saved); } catch {}
  const linePool=INTRO_LINES.map((_,i)=>i).filter(i=>i!==previousLine);
  const selectedLine=linePool[Math.floor(Math.random()*linePool.length)];
  try { localStorage.setItem("court-intro-line",String(selectedLine)); } catch {}
  const motionPreference=matchMedia("(prefers-reduced-motion: reduce)");
  const entranceAnimations=new Map();
  function reveal(element,duration=650) {
    entranceAnimations.get(element)?.cancel();
    if(motionPreference.matches)return;
    const animation=element.animate([
      {opacity:0,transform:"translateY(12px)"},
      {opacity:1,transform:"translateY(0)"}
    ],{duration,easing:"cubic-bezier(.22,.61,.36,1)"});
    entranceAnimations.set(element,animation);
    animation.onfinish=()=>{if(entranceAnimations.get(element)===animation)entranceAnimations.delete(element);};
  }
  motionPreference.addEventListener("change",()=>{
    if(motionPreference.matches){for(const animation of entranceAnimations.values())animation.cancel();entranceAnimations.clear();}
  });
  function showStage(next) {
    stage=next;
    for(const id of ["selection","dossier","trial","verdict"]) $(id).hidden=id!==next;
    $("header-status").textContent={selection:"Архив дел",dossier:"Дело открыто",trial:"Идёт слушание",verdict:"Приговор"}[next]||"";
    reveal($("app"),800);
  }
  function focusTop(id) {
    $(id).focus({preventScroll:true});
    if(stage==="trial" && matchMedia("(max-width: 600px)").matches) $("trial").scrollIntoView({block:"start",behavior:"instant"});
    else window.scrollTo({top:0,behavior:"instant"});
  }
  function sprite(id,column,row,label) {
    $(id).style.backgroundPosition=`${column*100/3}% ${row*100}%`;
    $(id).setAttribute("aria-label",label);
  }
  function openArchive() {
    clearTimeout(introTimer);
    $("intro").hidden=true;
    $("app").hidden=false;
    showStage("selection");
    $("folders").replaceChildren(...CASES.map((_,index)=>{
      const number=String(index+1).padStart(2,"0");
      const button=document.createElement("button");button.className="folder";
      button.setAttribute("aria-label",`Открыть дело № ${number}`);
      // На обложке и в доступном имени нет информации о клиенте.
      button.innerHTML=`<span class="folder-tab" aria-hidden="true"></span><span class="folder-body"><span class="folder-top"><span>ДЕЛО</span><span class="folder-icon" aria-hidden="true">↗</span></span><span class="folder-number">${number}</span><span class="folder-rule" aria-hidden="true"></span></span>`;
      button.addEventListener("click",()=>openCase(index,number));return button;
    }));
    focusTop("selection-title");
  }
  function advanceIntro() {
    if(stage!=="intro")return;
    if(introStep<2){
      introStep++;
      $("intro-copy").replaceChildren();
      const heading=document.createElement("h1");
      heading.textContent=introStep===1?"Вы — адвокат.":`Ваш клиент — ${INTRO_LINES[selectedLine]}`;
      $("intro-copy").append(heading);
      $("intro-copy").classList.toggle("intro-teaser",introStep===2);
      const duration=introStep===2?3016:sceneDuration; // Третья фраза: прежние 960/1056 мс переходов, 1 с удержания
      // Explicitly cancel the previous animation, including inline styles.
      // Removing the class alone left the second scene at its final opacity: 0.
      $("intro-copy").style.animation="none";
      void $("intro-copy").offsetWidth;
      $("intro-copy").style.animation=`${introStep===2?"intro-teaser-scene":"intro-scene"} ${duration}ms ease both`;
      introTimer=setTimeout(advanceIntro,duration);
    }else openArchive();
  }
  function openCase(index,number) {
    if(stage!=="selection")return;
    caseIndex=index;caseNumber=number;questionIndex=0;
    scores={positive:0,negative:0,neutral:0};answered=false;
    const c=CASES[index],character=CHARACTERS[index];
    $("case-number").textContent=`Дело № ${number}`;
    $("trial-case").textContent=`Дело № ${number}`;
    $("client-name").textContent=c.name;
    $("client-short-name").textContent=character.short;
    $("client-personality").textContent=c.personality;
    $("client-quote").textContent=`«${c.quote}»`;
    $("charge").textContent=c.charge;
    $("evidence").replaceChildren(...c.evidence.map(text=>{const li=document.createElement("li");li.textContent=text;return li;}));
    document.querySelector("details").open=false;
    sprite("dossier-portrait",character.initial,1,`${c.name}: ${character.initial?"нервничает":"держится уверенно"}`);
    showStage("dossier");focusTop("client-name");
  }
  function updateJudge() {
    const anger=scores.neutral,column=anger===0?0:anger<3?1:anger===3?2:3;
    $("mood").textContent=ANGER[anger][0];
    sprite("judge-portrait",column,0,`Судья: ${ANGER[anger][0]}`);
    $("judge-card").dataset.anger=anger;
    $("judge-response").dataset.anger=anger;
    $("anger-pips").setAttribute("aria-label",`Гнев судьи: ${anger} из 5`);
    $("anger-pips").replaceChildren(...Array.from({length:5},(_,i)=>{const pip=document.createElement("span");if(i<anger)pip.className="active";return pip;}));
  }
  function updateClient(column,label) {
    sprite("client-portrait",column,1,`Подсудимый: ${label}`);
    $("client-emotion").textContent=label;
  }
  function renderQuestion() {
    answered=false;
    const row=CASES[caseIndex].questions[questionIndex],character=CHARACTERS[caseIndex];
    $("question-count").textContent=`Вопрос ${questionIndex+1} / 5`;
    $("question").textContent=row[0];
    $("client-reaction").textContent=`«${character.reactions[questionIndex]}»`;
    $("question-block").hidden=false;$("answer-block").hidden=false;$("response").hidden=true;
    $("question-progress").setAttribute("aria-label",`Вопрос ${questionIndex+1} из 5`);
    $("question-progress").replaceChildren(...Array.from({length:5},(_,i)=>{const part=document.createElement("span");part.className=i<questionIndex?"done":i===questionIndex?"current":"";return part;}));
    updateJudge();
    const worried=scores.negative>scores.positive||scores.neutral>=2||character.initial===1;
    updateClient(worried?1:0,worried?"Нервничает":"Держится уверенно");
    const options=shuffle(["positive","negative","neutral"].map((type,i)=>({type,text:row[i+1]})));
    $("answers").replaceChildren(...options.map((option,i)=>{
      const button=document.createElement("button");button.className="answer";
      const letter=document.createElement("span");letter.className="letter";letter.textContent=["А","Б","В"][i];letter.setAttribute("aria-hidden","true");
      const label=document.createElement("span");label.textContent=option.text;button.append(letter,label);
      button.addEventListener("click",()=>answer(option));return button;
    }));
    focusTop("question");
    if(questionIndex>0){reveal($("dialogue"));reveal(document.querySelector(".cast"));}
  }
  function answer(option) {
    if(answered||stage!=="trial")return;
    answered=true;scores[option.type]++;
    $("question-block").hidden=true;$("answer-block").hidden=true;
    $("recorded-answer").textContent=`«${option.text}»`;
    $("response").hidden=false;
    updateJudge();
    $("judge-reaction").textContent=option.type==="neutral"?ANGER[scores.neutral][1]:option.type==="positive"?(scores.neutral>=3?"Наконец-то аргумент! Суд уже начал терять надежду.":"Аргумент защиты принят. Смелая трактовка реальности."):"Записано. Напоминаю: вы адвокат этого туалета, а не второй прокурор.";
    updateClient(option.type==="positive"?2:option.type==="negative"?3:1,option.type==="positive"?"Обнадёжен":option.type==="negative"?"В ужасе":"Растерян");
    $("client-after").textContent=`Подсудимый: «${CHARACTERS[caseIndex].after[option.type]}»`;
    $("next").textContent=questionIndex===4?"Огласить приговор →":"Следующий вопрос →";
    $("judge-card").classList.remove("shake");
    if(option.type==="neutral"&&scores.neutral>=3){void $("judge-card").offsetWidth;$("judge-card").classList.add("shake");}
    $("next").focus({preventScroll:true});
    if(matchMedia("(max-width: 600px)").matches) $("trial").scrollIntoView({block:"start",behavior:"instant"});
    else window.scrollTo({top:0,behavior:"instant"});
    reveal($("dialogue"));
    reveal($("judge-portrait"));
    reveal($("client-portrait"));
  }
  function finish() {
    const result=decideVerdict(scores),ending=ENDINGS[result];
    $("verdict").dataset.result=result;
    $("verdict-title").textContent=ending.title;
    $("verdict-text").textContent=ending.text;
    const tie=result==="innocent"&&scores.positive===scores.negative;
    $("verdict-quote").textContent=`«${tie?"Аргументы сторон равны. Сомнения толкуются в пользу подсудимого.":ending.quote}»`;
    $("final-client-line").textContent=`Подсудимый: «${CHARACTERS[caseIndex].final[result]}»`;
    sprite("final-judge",result==="fired"?3:result==="guilty"?2:0,0,result==="fired"?"Судья в ярости":"Судья оглашает приговор");
    sprite("final-client",result==="innocent"?2:result==="guilty"?3:1,1,result==="innocent"?"Подсудимый радуется оправданию":result==="guilty"?"Подсудимый потрясён приговором":"Подсудимый растерян");
    showStage("verdict");focusTop("verdict-title");
  }
  $("skip-intro").addEventListener("click",openArchive);
  $("back-to-cases").addEventListener("click",openArchive);
  $("start").addEventListener("click",()=>{if(stage!=="dossier")return;showStage("trial");renderQuestion();});
  $("next").addEventListener("click",()=>{if(!answered||stage!=="trial")return;if(questionIndex===4)finish();else{questionIndex++;renderQuestion();}});
  $("restart").addEventListener("click",openArchive);
  introTimer=setTimeout(advanceIntro,sceneDuration);
}
if(typeof module!=="undefined")module.exports={CASES,CHARACTERS,decideVerdict,shuffle};


