export const siteConfig = {
  name: "Hendrik Görner",
  title: "Verkehrsingenieur | Geoinformatik | Software & Automation |",
  description:
    "Persönliche Portfolio-Website von Hendrik Görner – Verkehrsingenieur mit Fokus auf Verkehrsdatenerhebung, Geodatenanalyse und Softwareentwicklung.",
  accentColor: "#1d4ed8",

  social: {
    email: "hendrikgoerner@gmx.de",
    linkedin: "https://www.linkedin.com/in/hendrik-goerner", // ggf. anpassen
    github: "https://github.com/hg-labatory",
  },

  aboutMe:
    "Ich bin Verkehrsingenieur mit Schwerpunkt auf der Erhebung, Analyse und Visualisierung von Verkehrsdaten. Besonders interessieren mich Geoinformatik, OpenStreetMap, automatisierte Datenpipelines und die Verbindung von Ingenieurwesen und Softwareentwicklung. Neben meiner beruflichen Tätigkeit arbeite ich regelmäßig an eigenen Programmier-, Mikrocontroller- und Analyseprojekten. Meine Stärken liegen in der praktischen Anwendung technischer Lösungen zur Bewältigung komplexer Herausforderungen im Verkehrs- und Geodatenbereich.",

  skills: [
    "Python (GeoPandas & NumPy)",
    "Geoinformatik (QGIS, OSM)",
    "Verkehrsdatenerhebung & -analyse",
    "Datenvisualisierung",
    "Automatisierung & Scripting",
    "Grundlagen Webentwicklung",
  ],

  projects: [
    {
      name: "GeoTraffic Pipeline",
      description:
        "Automatisierte Pipeline zur Abfrage, Verarbeitung und Analyse von OpenStreetMap-Daten für städtische Verkehrsnetze. Fokus auf Straßenkategorien, Fuß- und Radverkehr sowie reproduzierbare Analysen.",
      link: "https://github.com/HG-Labatory/vicumpy#vicumpy",
      skills: ["Python", "OSM","OpenAI", "Overpass API", "Geodatenanalyse"],
    },
    // {
    //   name: "Persönliche Portfolio-Website",
    //   description:
    //     "Eigene Portfolio-Website auf Basis von Astro und GitHub Pages zur Darstellung von Projekten, technischem Know-how und beruflichem Werdegang.",
    //   link: "https://hg-labatory.github.io/hendrik_goerner.github.io/",
    //   skills: ["Astro", "GitHub Pages", "Webentwicklung"],
    // },
    // {
    //   name: "Mikrocontroller- & Sensorprojekte",
    //   description:
    //     "Verschiedene Projekte mit ESP32 und Raspberry Pi, u. a. Temperaturmessung, OLED-Displays, MQTT-Datenübertragung und Visualisierung.",
    //   link: "https://github.com/hg-labatory",
    //   skills: ["ESP32", "Python", "MQTT", "IoT"],
    // },
  ],

  experience: [
    {
      company: "TU Dresden, Institut für Verkehrswesen",
      title: "Wissenschaftlicher Mitarbeiter",
      dateRange: "01/2020 - 12/2024",
      bullets: [
          "Planung, Durchführung und Auswertung videobasierter Verkehrserhebungen (Fußverkehr & MIV)",
          "Entwicklung und Implementierung von Algorithmen zur Ermittlung objektiver Verkehrskenngrößen",
          "Statistische Analyse, Clusteranalysen und Ableitung belastbarer verkehrlicher Erkenntnisse",
          "Projektleitung im Forschungsprogramm Stadtverkehr mit Fokus auf Fußverkehrsaufkommen",
          "Ableitung von Fußverkehrsaufkommen aus Kurzzeitzählungen und Umfelddaten",
          "Entwicklung von Bewertungsverfahren für Fußverkehrsstrecken",
          "Konzeption und Entwicklung von Softwaretools (u. a. OpenTrafficCam) zur Trajektorienanalyse",
          "Anwendung KI-basierter Detektionsverfahren in der Verkehrsdatenerhebung",
          "Fachliche Betreuung studentischer Hilfskräfte sowie Betreuung von Studien- und Abschlussarbeiten",
          "Lehrtätigkeit in der Straßenverkehrstechnik (HBS-Qualitätsstufen, LISA+, Richtlinienanwendung)",
      ],
    },
  ],

  education: [
    {
      school: "Technische Universität Dresden",
      degree: "Dipl.-Ing im Verkehrsingenieurwesen",
      dateRange: "10/2013 - 10/2020",
      achievements: [
        "Schwerpunkt Straßenverkehrstechnik und Verkehrsdatenerhebung",
        "Arbeiten mit Geodaten und quantitativen Analyseverfahren",
      ],
    },
  ],
};
