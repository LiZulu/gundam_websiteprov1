import {
    Compass,
    poz1,
    cb,
    EFG,
    Zaft,
    gundam_exia,
    gundam_deathscythe,
    RX78,
    CharZaku,
    gundam_wingzero,
    gouf,
    gundam_unicorn,
    gundam_gm,
    EZ08,
    barbatos,
    gundam_zeta,
    gundam_mkII,
    zaku_01,
    AW,
    UC,
    PD,
    AC,
    AS,
    gundam_theorigin,
    gundamwing,
    thunderbolt,
    wfm,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "factions",
      title: "Factions",
    },
    {
      id: "timeline",
      title: "Timelines",
    },
    {
      id: "works",
      title: "Series",
    },
  ];
  
  const factions = [
    {
      title: "Earth Federation",
      icon: EFG,
    },

    {
      title: "Celestial Beings",
      icon: cb,
    },

    {
      title: "Principality of Zeon",
      icon: poz1,
    },

    {
      title: "Compass",
      icon: Compass,
    },

    {
      title: "Zaft",
      icon: Zaft,
    },
  ];
  
  const GT = [
    {
      name: "RX-78",
      icon: RX78,
    },
    {
      name: "Char Zaku",
      icon: CharZaku,
    },
    {
      name: "Gundam GM",
      icon: gundam_gm,
    },
    {
      name: "Gouf",
      icon: gouf,
    },
    {
      name: "Three JS",
      icon: EZ08,
    },
    {
      name: "Gundam Exia",
      icon: gundam_exia,
    },
    {
      name: "Gundam Wing Zero",
      icon: gundam_wingzero,
    },
    {
      name: "Gundam Deathscythe",
      icon: gundam_deathscythe,
    },
    {
      name: "Gundam Unicorn",
      icon: gundam_unicorn,
    },
    {
      name: "Barbatos",
      icon: barbatos,
    },
    {
      name: "Gundam Zeta",
      icon: gundam_zeta,
    },
    {
      name: "figma",
      icon: gundam_mkII,
    },
    {
      name: "Zaku 01",
      icon: zaku_01,
    },
  ];
  
  const timelines = [
    {
      title: "Universal Century",
      timeline_details: "The Universal Century, commonly abbreviated as UC is the primary timeline of the Gundam anime metaseries.",
      icon: UC,
      iconBg: "#383E56",
      date: "U.C. 0001 - U.C. 0123",
      points: [
        "U.C. 0001 - The total population of Earth exceeds 9 billion. Immigration to the high worlds of the space colonies begins.",
        "            The Colony Management Corporation (CMC) is established.",
        "U.C. 0010 - Construction of Side 1 (L1) Bunch 1 (Shangri-La) space colony is completed, construction of Construction of Side 2 (L4) Bunch 1 begins.",
        "U.C. 0015 - The population of the space colonies reaches 1½ million.",
        "U.C. 0050 - 9 billion of the total Earth population of 11 billion have immigrated to space."
      ],
    },
    {
      title: " After Colony",
      timeline_details: "The After Colony timeline, or AC for short, deals with the events of Mobile Suit Gundam Wing and its follow-up New Mobile Report Gundam Wing: Endless Waltz. This series is set in a universe in which the Gundams are the primary arm of the space colonies' resistance, rather than forming a small part of a larger army.",
      icon: AC,
      iconBg: "#383E56",
      date: "AC 001 - AC 197",
      points: [
        "AC 001. Several nations establish permanent space stations in Earth orbit. This is the first year of the After Colony (AC) calendar.",
        "AC 022. Space colony construction begins at Lagrange point 1. Due to unexpectedly severe conditions and strange new diseases, construction is greatly delayed.",
        "AC 050. Nations begin withdrawing from space, until the countries of the Middle East - leaving the oil industry and looking for a new enterprise to invest in - join the colony project. Colony construction begins at the other Lagrange points.",
        "AC 150. The colonists, favoring autonomy, become increasingly dissatisfied with Alliance control.",
      ],
    },
    {
      title: "After War",
      timeline_details: "After War or AW tarts following the massive colony drops that brought an end to the 7th Space War and killed 99% of humanity living on the Earth's surface.",
      icon: AW,
      iconBg: "#E6DEDD",
      date: "AW 0001 - AW 0024",
      points: [
        "AW 0001. The massive colony drop sends the Earth into a Nuclear Winter, killing many of the survivors that escaped the devastation of the colony crashes. A new calendar is adopted, called After War to signify the start of a new era for the estimated 98 million survivors.",
        "AW 0015. Surviving members of the United Nations Earth in Europe and businessmen form a New United Nations Earth Committee, pooling their resources to start the reunification of the Earth.",
        "AW 0016. New UNE and Cloud 9 hold third round of peace negotiations.",
      ],
    },
    {
      title: "Post Disaster",
      timeline_details: "PD",
      icon: PD,
      iconBg: "#E6DEDD",
      date: "P.D. 001 - P.D. 325",
      points: [
        "P.D. 001. The nations of Earth and Mars accept the Vingolf Proclamation issued by Gjallarhorn. The interplanetary war that has spread destruction through the Earth Sphere and the Outer Sphere comes to an end.",
        "P.D. 205. Arbrau's government grants limited autonomy to its martian territories.",
        "P.D. 208. The Oceanian Federation also recognizes limited autonomy of its Martian territories.",
        "P.D. 325. SAU and Arbrau engage in a month long border war. Tensions first rose after a bombing of Togonosuke Makanai's office in Edmonton and escalated as the two blocs amass their forces at the Balfour Plain. Hostilities erupted after an SAU reconnaissance jet crashed due to accidental Ahab Wave interference from Arbrau's Mobile Suits. The war was not resolved until Makanai recovered from his coma.",
      ],
    },
    {
      title: "Ad Stella",
      timeline_details: "Ad stella or AS was an era when a multitude of corporations have entered space and built a huge economic system.",
      icon: AS,
      iconBg: "#E6DEDD",
      date: "A.S. 89 - A.S. 122",
      points: [
        "A.S. 89. The Shin Sei Development Corporation was founded.",
        "A.S. 101. The Vanadis Incident occured around this time.",
        "A.S. 119. Prospera Mercury was appointed president of Shin Sei Development Corporation.",
        "A.S. 122. Miorine Rembran created GUND-ARM Inc. at the annual incubation party.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Gundam: The origin",
      description:
        "The story begins with a newly deployed Federation warship, the White Base, arriving at the secret research base located at the Side 7 colony to pick up the Federation's newest weapon. However, they are closely followed by Zeon forces. A Zeon reconnaissance team member disobeys mission orders and attacks the colony, killing most of the Federation crew and civilians in the process. Out of desperation, young Amuro Ray accidentally finds the Federation's new prototype arsenal—the RX-78 Gundam, and manages to beat back Zeon forces.",
      tags: [
        {
          name: "Sunrise",
          color: "blue-text-gradient",
        },
        {
          name: "shonen",
          color: "green-text-gradient",
        },
        {
          name: "Adult Swim",
          color: "pink-text-gradient",
        },
      ],
      image: gundam_theorigin,
      source_code_link: "https://github.com/",
    },
    {
      name: "Gundam Wing",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "Sunrise",
          color: "blue-text-gradient",
        },
        {
          name: "Seinen",
          color: "green-text-gradient",
        },
        {
          name: "Cartoon Network",
          color: "pink-text-gradient",
        },
      ],
      image: gundamwing,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mobile Suit Gundam Thunderbolt",
      description:
        "During the One Year War of U.C. 0079, the Earth Federation and Principality of Zeon engage in a fierce battle at the Thunderbolt Sector, a shoal zone in the former Colony Side 4 Moore. After successfully infiltrating Zeon's sniper field, ace Federation pilot and jazz enthusiast Io Fleming is given control of the latest Gundam prototype.",
      tags: [
        {
          name: "Sunrise",
          color: "blue-text-gradient",
        },
        {
          name: "	Seinen",
          color: "green-text-gradient",
        },
        {
          name: "Adventure, Sci-Fi",
          color: "pink-text-gradient",
        },
      ],
      image: thunderbolt,
      source_code_link: "https://github.com/",
    },
    {
      name: "Mobile Suit Gundam: The Witch from Mercury",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Sunrise",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: wfm,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { factions, GT, timelines, projects };