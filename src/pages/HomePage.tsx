import pollution from '../img/pollution.webp'

export default function HomePage() {
    return (
        <>
            <h1>О сервисе</h1>

            <p>
                <img
                    src={pollution}
                    alt="Загрязнение окружающей среды"
                    width="300" style={{float: 'left', margin: '0 2em 1em 0'}}
                /> Данный сервис позволяет узнать уровень загрязнений различных населенных пунктов.</p>
            <p>Один из основных источников загрязнения – использование пластиковых изделий. Пластик не только не разлагается на протяжении
                десятилетий, но и выделяет опасные химические вещества, которые попадают в пищевые цепи. Каждый год миллионы пластиковых бутылок,
                пакетов и упаковок выбрасываются в окружающую среду, что создает угрозу для живых организмов.</p>
            <p>Дополнительные источники загрязнения включают в себя выбросы вредных веществ в атмосферу, отходы промышленности и сельского хозяйства,
                а также неэффективное использование энергии. Изменение климата, разрушение лесов, уменьшение биоразнообразия – все это негативные
                последствия загрязнения окружающей среды.</p>
            <p>Загрязнение окружающей среды – одна из самых серьезных проблем современного мира.
                Каждый день миллионы тонн мусора выбрасываются в
                океаны, реки и леса, загрязняя не только воду и почву, но и воздух. Это приводит к угрозе здоровью людей, животных и растений, а также
                разрушению экосистем.</p>
        </>
    );
}