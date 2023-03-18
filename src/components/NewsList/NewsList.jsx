// import { useSelector, useDispatch } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';
import { format } from 'date-fns';
import {
  News,
  NewsCard,
  NewsTitle,
  NewsDescription,
  NewsMoreInfo,
  NewsDate,
  NewsLink,
} from './NewsList.styled';

export const NewsList = () => {
  // const dispatch = useDispatch();
  // const filterContacts = useSelector();

  const message = 'We have any news for you';
  const titleLength = '38';
  const descriptLength = '215';

  // видалити
  const filterNews = [
    {
      title:
        'В День ветеринара в столиці пройде безкоштовний тренінг з надання першої допомоги тваринам',
      url: 'https://www.kmlvm.com.ua/v-den-veterynara-v-stolytsi-projde-bezkoshtovnyj-trening-z-nadannya-pershoyi-dopomogy-tvarynam/',
      description:
        "В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством «Київська міська лікарня ветеринарної медицини», фахівці якого навчать всіх бажаючих навичкам надання першої допомоги братам нашим меншим, які потрапили в біду. Без перебільшення, подібні знання можуть врятувати життя чотирилапим. Тренінг безкоштовний, взяти в ньому участь може будь-хто, дозволяється участь зі своїм домашнім улюбленцем. Після тренінгу учасники зможуть отримати безкоштовну консультацію ветеринара, щодо догляду за тваринами, вакцинації та будь-яких інших питань, пов'язаними зі здоров'ям улюбленця. Дата проведення майстер-класу обрана не випадково. 14 серпня в Україні відзначається День працівників ветеринарної медицини і цього року ми вирішили провести такий потрібний тренінг. Для ветеринара головне – це врятовані брати наші менші, а навчити людей надавати первинну допомогу тваринам значить «інвестувати» у врятовані життя тварин в майбутньому. Початок тренінгу об 11:00. Адреса Тимчасового притулку для тварин «ВДНГ»: вулиця Академіка Глушкова, 1, 16 павільйон.",
      date: '2022-08-12',
    },
    {
      title:
        'У Телеграмі запрацював чат-бот, що надає безкоштовні консультації щодо догляду за тваринами',
      url: 'https://www.kmlvm.com.ua/u-telegrami-zapratsyuvav-chat-bot-shho-nadaye-bezkoshtovni-konsultatsiyi-shhodo-doglyadu-za-tvarynamy/',
      description:
        'У столиці запрацював спеціальний Telegram-бот «Твій вет Київ», який надає безкоштовні ветеринарні консультації щодо догляду та лікування тварин. Знайти бот можна за посиланням https://t.me/VetHelpKyiv_bot. Функціонал бота вже досить широкий, господарі тварин зможуть отримати відповіді на питання щодо вакцинації тварин, їх стерилізацію, дізнатись адреси муніципальних ветеринарних клінік, де можна отримати всі необхідні послуги. Крім того, користувачі боту зможуть отримати консультацію від ветеринарного лікаря, описавши проблему. Ця функція буде доступна з 9:00 до 18:00, однак цілодобово можна буде отримати основну довідкову інформацію з таких питань, як перша допомога при отруєнні тварини, укусу кліща, дізнатись графік профілактичних щеплень, тощо. Наразі бот працює в тестовому режимі, однак в майбутньому його функціонал буде розширюватись.',
      date: '2022-07-19',
    },
    {
      title:
        'В День ветеринара в столиці пройде безкоштовний тренінг з надання першої допомоги тваринам',
      url: 'https://www.kmlvm.com.ua/v-den-veterynara-v-stolytsi-projde-bezkoshtovnyj-trening-z-nadannya-pershoyi-dopomogy-tvarynam/',
      description:
        "В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством «Київська міська лікарня ветеринарної медицини», фахівці якого навчать всіх бажаючих навичкам надання першої допомоги братам нашим меншим, які потрапили в біду. Без перебільшення, подібні знання можуть врятувати життя чотирилапим. Тренінг безкоштовний, взяти в ньому участь може будь-хто, дозволяється участь зі своїм домашнім улюбленцем. Після тренінгу учасники зможуть отримати безкоштовну консультацію ветеринара, щодо догляду за тваринами, вакцинації та будь-яких інших питань, пов'язаними зі здоров'ям улюбленця. Дата проведення майстер-класу обрана не випадково. 14 серпня в Україні відзначається День працівників ветеринарної медицини і цього року ми вирішили провести такий потрібний тренінг. Для ветеринара головне – це врятовані брати наші менші, а навчити людей надавати первинну допомогу тваринам значить «інвестувати» у врятовані життя тварин в майбутньому. Початок тренінгу об 11:00. Адреса Тимчасового притулку для тварин «ВДНГ»: вулиця Академіка Глушкова, 1, 16 павільйон.",
      date: '2022-08-12',
    },
    {
      title:
        'У Телеграмі запрацював чат-бот, що надає безкоштовні консультації щодо догляду за тваринами',
      url: 'https://www.kmlvm.com.ua/u-telegrami-zapratsyuvav-chat-bot-shho-nadaye-bezkoshtovni-konsultatsiyi-shhodo-doglyadu-za-tvarynamy/',
      description:
        'У столиці запрацював спеціальний Telegram-бот «Твій вет Київ», який надає безкоштовні ветеринарні консультації щодо догляду та лікування тварин. Знайти бот можна за посиланням https://t.me/VetHelpKyiv_bot. Функціонал бота вже досить широкий, господарі тварин зможуть отримати відповіді на питання щодо вакцинації тварин, їх стерилізацію, дізнатись адреси муніципальних ветеринарних клінік, де можна отримати всі необхідні послуги. Крім того, користувачі боту зможуть отримати консультацію від ветеринарного лікаря, описавши проблему. Ця функція буде доступна з 9:00 до 18:00, однак цілодобово можна буде отримати основну довідкову інформацію з таких питань, як перша допомога при отруєнні тварини, укусу кліща, дізнатись графік профілактичних щеплень, тощо. Наразі бот працює в тестовому режимі, однак в майбутньому його функціонал буде розширюватись.',
      date: '2022-07-19',
    },
    {
      title:
        'В День ветеринара в столиці пройде безкоштовний тренінг з надання першої допомоги тваринам',
      url: 'https://www.kmlvm.com.ua/v-den-veterynara-v-stolytsi-projde-bezkoshtovnyj-trening-z-nadannya-pershoyi-dopomogy-tvarynam/',
      description:
        "В неділю, 14 серпня, в Тимчасовому притулку для тварин «ВДНГ» пройде тренінг на тему «Надання першої допомоги тваринам». Захід проводиться комунальним підприємством «Київська міська лікарня ветеринарної медицини», фахівці якого навчать всіх бажаючих навичкам надання першої допомоги братам нашим меншим, які потрапили в біду. Без перебільшення, подібні знання можуть врятувати життя чотирилапим. Тренінг безкоштовний, взяти в ньому участь може будь-хто, дозволяється участь зі своїм домашнім улюбленцем. Після тренінгу учасники зможуть отримати безкоштовну консультацію ветеринара, щодо догляду за тваринами, вакцинації та будь-яких інших питань, пов'язаними зі здоров'ям улюбленця. Дата проведення майстер-класу обрана не випадково. 14 серпня в Україні відзначається День працівників ветеринарної медицини і цього року ми вирішили провести такий потрібний тренінг. Для ветеринара головне – це врятовані брати наші менші, а навчити людей надавати первинну допомогу тваринам значить «інвестувати» у врятовані життя тварин в майбутньому. Початок тренінгу об 11:00. Адреса Тимчасового притулку для тварин «ВДНГ»: вулиця Академіка Глушкова, 1, 16 павільйон.",
      date: '2022-08-12',
    },
    {
      title:
        'У Телеграмі запрацював чат-бот, що надає безкоштовні консультації щодо догляду за тваринами',
      url: 'https://www.kmlvm.com.ua/u-telegrami-zapratsyuvav-chat-bot-shho-nadaye-bezkoshtovni-konsultatsiyi-shhodo-doglyadu-za-tvarynamy/',
      description:
        'У столиці запрацював спеціальний Telegram-бот «Твій вет Київ», який надає безкоштовні ветеринарні консультації щодо догляду та лікування тварин. Знайти бот можна за посиланням https://t.me/VetHelpKyiv_bot. Функціонал бота вже досить широкий, господарі тварин зможуть отримати відповіді на питання щодо вакцинації тварин, їх стерилізацію, дізнатись адреси муніципальних ветеринарних клінік, де можна отримати всі необхідні послуги. Крім того, користувачі боту зможуть отримати консультацію від ветеринарного лікаря, описавши проблему. Ця функція буде доступна з 9:00 до 18:00, однак цілодобово можна буде отримати основну довідкову інформацію з таких питань, як перша допомога при отруєнні тварини, укусу кліща, дізнатись графік профілактичних щеплень, тощо. Наразі бот працює в тестовому режимі, однак в майбутньому його функціонал буде розширюватись.',
      date: '2022-07-19',
    },
  ];

  return (
    <News>
      {filterNews.length > 0
        ? filterNews.map(({ title, url, description, date }) => {
            const formatDate = format(new Date(date), 'dd/MM/yyyy');
            return (
              <NewsCard>
                <NewsTitle>
                  <EllipsisText text={title} length={titleLength} />
                </NewsTitle>
                <NewsDescription>
                  <EllipsisText text={description} length={descriptLength} />
                </NewsDescription>
                <NewsMoreInfo>
                  <NewsDate>{formatDate}</NewsDate>
                  <NewsLink href={url} target="_blank">
                    Read more
                  </NewsLink>
                </NewsMoreInfo>
              </NewsCard>
            );
          })
        : message}
    </News>
  );
};
