import "../Comp_css/Characters.css";

import ironman from "../assets/MCU_char_img/IronMan.jpg";
import captainamerica from "../assets/MCU_char_img/CaptainAmerica.jpg";
import thor from "../assets/MCU_char_img/Thor.jpg";
import antman from "../assets/MCU_char_img/AntMan.jpg";
import captainmarvel from "../assets/MCU_char_img/CaptainMarvel.jpg";
import blackpanther from "../assets/MCU_char_img/BlackPanther.jpg";
import blackwidow from "../assets/MCU_char_img/BlackWidow.jpg";
import doctorstrange from "../assets/MCU_char_img/DoctorStrange.jpg";
import falcon from "../assets/MCU_char_img/Falcon.jpg";
import groot from "../assets/MCU_char_img/Groot.jpg";
import hawkeye from "../assets/MCU_char_img/Hawkeye.jpg";
import hulk from "../assets/MCU_char_img/Hulk.jpg";
import loki from "../assets/MCU_char_img/Loki.jpg";
import rocketraccoon from "../assets/MCU_char_img/RocketRaccoon.jpg";
import scarletwitch from "../assets/MCU_char_img/ScarletWitch.jpg";
import spiderman from "../assets/MCU_char_img/SpiderMan.jpg";
import starlord from "../assets/MCU_char_img/StarLord.jpg";
import vision from "../assets/MCU_char_img/Vision.jpg";
import wasp from "../assets/MCU_char_img/Wasp.jpg";
import wintersolider from "../assets/MCU_char_img/WinterSolider.jpg";

function Characters() {
  const characters = [
    {
      id: 1,
      name: "Iron Man (Tony Stark)",
      img: ironman,
      description:
        "Tony Stark is a world-renowned genius, billionaire, and technological visionary whose life changes after being kidnapped and forced to build a weapon. Instead, he creates the first Iron Man suit to escape, realizing the damage his inventions have caused. Over time, Tony evolves from a reckless playboy into a responsible hero, using his intellect and innovation to protect Earth from global and cosmic threats. His leadership, sarcasm, and emotional vulnerability make him deeply human, and his ultimate sacrifice proves his complete transformation into a true hero 🤖❤️.",
    },
    {
      id: 2,
      name: "Captain America (Steve Rogers)",
      img: captainamerica,
      description:
        "Steve Rogers starts as a physically weak but morally strong man who believes in standing up against injustice, no matter the odds. After receiving the Super Soldier Serum, he becomes Captain America, gaining enhanced strength, speed, and endurance. More than his physical power, Steve’s greatest strength lies in his integrity, leadership, and loyalty to his values. He often struggles to adapt to the modern world but remains a moral compass for the Avengers, always choosing what is right over what is easy 🛡️🇺🇸.",
    },
    {
      id: 3,
      name: "Thor",
      img: thor,
      description:
        "Thor Odinson is the mighty God of Thunder and prince of Asgard, possessing immense strength and control over lightning. Initially driven by pride and arrogance, Thor is banished to Earth where he learns humility, compassion, and the meaning of true leadership. Over time, he faces immense loss, including family and homeland, which shapes him into a wiser and more emotionally complex hero. Armed with legendary weapons and divine power, Thor stands as one of the strongest defenders of the universe ⚡🔨.",
    },
    {
      id: 4,
      name: "Hulk (Bruce Banner)",
      img: hulk,
      description:
        "Bruce Banner is a brilliant scientist whose experiment with gamma radiation results in a curse that transforms him into the Hulk when overwhelmed by anger or fear. The Hulk is a being of pure strength and rage, capable of immense destruction, while Bruce constantly struggles to maintain control. This inner conflict defines his character, as he seeks balance between intellect and power. Over time, Bruce learns to coexist with the Hulk, turning his greatest weakness into one of the Avengers’ most powerful assets 💚💥.",
    },
    {
      id: 5,
      name: "Black Widow (Natasha Romanoff)",
      img: blackwidow,
      description:
        "Natasha Romanoff is a former Russian spy trained from childhood in the deadly Red Room program. Skilled in espionage, martial arts, and deception, she carries the weight of a violent past filled with regret. Joining the Avengers gives her a chance at redemption, where she proves her loyalty and bravery time and again. Natasha’s emotional intelligence, sacrifice, and unwavering commitment to her team show that heroism isn’t defined by superpowers 🖤.",
    },
    {
      id: 6,
      name: "Hawkeye (Clint Barton)",
      img: hawkeye,
      description:
        "Clint Barton is a highly trained marksman whose unmatched archery skills make him deadly precise in combat. Despite being surrounded by gods, monsters, and super-soldiers, Clint remains grounded and practical. He fights not for glory but to protect his family and the people he loves. His resilience, loyalty, and ability to keep moving forward even after loss define him as one of the most human and relatable Avengers 🏹🎯.",
    },
    {
      id: 7,
      name: "Spider-Man (Peter Parker)",
      img: spiderman,
      description:
        "Peter Parker is a teenager gifted with spider-like abilities after being bitten by a radioactive spider. While his powers make him extraordinary, his youth makes his journey challenging as he struggles to balance school, friendships, and heroism. Guided by the lesson that great power comes with great responsibility, Peter constantly learns from his mistakes. His optimism, intelligence, and genuine desire to help others make him one of the most relatable heroes in the MCU 🕷️🕸️.",
    },
    {
      id: 8,
      name: "Loki",
      img: loki,
      description:
        "Loki is the adopted brother of Thor and the God of Mischief, gifted with illusion magic and sharp intellect. Often driven by jealousy and a desire for recognition, Loki walks a fine line between villain and hero. His character evolves through betrayal, loss, and self-reflection. Loki’s complexity, humor, and unpredictability make him one of the most fascinating figures in the MCU 🐍👑.",
    },
    {
      id: 9,
      name: "Falcon / Captain America (Sam Wilson)",
      img: falcon,
      description:
        "Sam Wilson begins as a former Air Force pararescue soldier who uses advanced wing technology to become Falcon. Known for his empathy and emotional intelligence, Sam supports others both on and off the battlefield. When he takes up the shield as Captain America, he carries the weight of legacy, responsibility, and representation. Sam proves that the symbol of Captain America is not about power, but about character, courage, and compassion 🦅🛡️.",
    },
    {
      id: 10,
      name: "Scarlet Witch (Wanda Maximoff)",
      img: scarletwitch,
      description:
        "Wanda Maximoff possesses extraordinary chaos magic that allows her to manipulate reality, energy, and minds. Her powers are deeply connected to her emotions, making her both incredibly powerful and dangerously unstable. Wanda’s life is marked by immense loss, grief, and longing for belonging. Her journey explores the consequences of trauma and the struggle between control and desire, making her one of the most complex and tragic figures in the MCU 🔮❤️.",
    },
    {
      id: 11,
      name: "Vision",
      img: vision,
      description:
        "Vision is a synthetic being created from advanced technology, artificial intelligence, vibranium, and the Mind Stone. Despite his non-human origin, he develops curiosity, compassion, and a strong moral code. Vision often questions the nature of humanity, existence, and purpose. His calm demeanor and logical thinking balance the Avengers, while his emotional connection to Wanda proves that humanity is defined by feelings, not origins 🤖💎.",
    },
    {
      id: 12,
      name: "Winter Soldier (Bucky Barnes)",
      img: wintersolider,
      description:
        "Bucky Barnes is the childhood best friend of Steve Rogers who becomes one of the most tragic figures in the MCU. After being captured by HYDRA, he is brainwashed and transformed into the Winter Soldier, a deadly assassin with enhanced abilities and a powerful cybernetic arm. Forced to carry out missions against his will, Bucky loses his identity and memories, becoming a weapon rather than a man. As his past slowly returns, he struggles with guilt and trauma, ultimately seeking redemption and control over his own life while fighting to reclaim his humanity 🦾❄️.",
    },
    {
      id: 13,
      name: "Ant-Man (Scott Lang)",
      img: antman,
      description:
        "Scott Lang is a skilled thief with a good heart who becomes Ant-Man through advanced size-altering technology. His ability to shrink and grow gives him unique advantages in combat and strategy. Scott’s humor and lighthearted nature contrast with high-stakes missions, bringing emotional balance to the team. Motivated primarily by his love for his daughter, he proves that heroism can come from ordinary people 🐜😄.",
    },
    {
      id: 14,
      name: "Doctor Strange (Stephen Strange)",
      img: doctorstrange,
      description:
        "Stephen Strange is a brilliant but arrogant neurosurgeon whose career ends after a devastating accident. Seeking healing, he discovers the mystic arts and dedicates himself to mastering magic and protecting reality. As a sorcerer, he manipulates time, space, and dimensions to defend Earth from supernatural threats. Strange’s journey is one of humility, responsibility, and sacrifice, as he often makes difficult choices for the greater good 🌀📖.",
    },
    {
      id: 15,
      name: "Black Panther (T’Challa)",
      img: blackpanther,
      description:
        "T’Challa is the king of Wakanda, a technologically advanced and hidden nation. Enhanced by the Heart-Shaped Herb, he gains heightened strength, agility, and senses. Beyond his physical abilities, T’Challa is defined by wisdom, diplomacy, and respect for tradition. He seeks to balance isolation and global responsibility, striving to lead not just Wakanda, but the world toward unity 🐾👑.",
    },
    {
      id: 16,
      name: "Star-Lord (Peter Quill)",
      img: starlord,
      description:
        "Peter Quill is a half-human space adventurer abducted from Earth as a child and raised among criminals. As Star-Lord, he leads the Guardians of the Galaxy with charm, humor, and emotional depth. Though often immature, Peter consistently proves his loyalty and bravery when it matters most. His love for music and his found family define his identity as a hero 🚀🎧.",
    },
    {
      id: 17,
      name: "Rocket Raccoon",
      img: rocketraccoon,
      description:
        "Rocket is a genetically modified raccoon with exceptional intelligence, especially in engineering and weaponry. His sarcastic personality hides deep emotional scars from painful experimentation and abandonment. Despite his rough exterior, Rocket is fiercely loyal to his friends and will risk everything to protect them. His journey highlights themes of self-worth and belonging 🦝🔫.",
    },
    {
      id: 18,
      name: "Groot",
      img: groot,
      description:
        "Groot is a tree-like alien species known for regeneration and immense physical strength. Though his vocabulary is limited to a single phrase, his emotions, loyalty, and courage are clearly expressed through actions. Groot repeatedly sacrifices himself for his friends, demonstrating deep love and selflessness. His presence symbolizes innocence, growth, and unwavering friendship 🌱💚.",
    },
    {
      id: 19,
      name: "Wasp (Hope van Dyne)",
      img: wasp,
      description:
        "Hope van Dyne is a disciplined and determined hero who becomes the Wasp after years of training. She possesses size-shifting abilities, flight, and energy-based attacks, making her a highly efficient fighter. Unlike Scott’s improvisational style, Hope relies on precision and planning. Her leadership, confidence, and resilience establish her as a powerful hero in her own right 🐝✨.",
    },
    {
      id: 20,
      name: "Captain Marvel (Carol Danvers)",
      img: captainmarvel,
      description:
        "Carol Danvers is one of the most powerful heroes in the Marvel Cinematic Universe, gaining extraordinary abilities after being exposed to energy from the Tesseract. Enhanced with super strength, flight, energy projection, and near invulnerability, she becomes a key protector of the galaxy. Carol’s journey is defined by self-discovery, resilience, and breaking free from manipulation and control. As Captain Marvel, she stands as a symbol of independence and strength, often operating beyond Earth to maintain balance across the universe 🚀✨.",
    },
  ];

  return (
    <>
      <section className="four-hero">
        <h1>Characters</h1>
        <h4>“Legends rise. Heroes are remembered forever.”</h4>
      </section>
      <div className="char-hold">
        {characters.map((hero) => (
          <div className="char-card" key={hero.id} loading="lazy">
            <img src={hero.img || " "} alt={hero.name}></img>
            <h2>{hero.name}</h2>
            <p>{hero.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Characters;
