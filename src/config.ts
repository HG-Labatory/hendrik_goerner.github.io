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
    "Ich bin Verkehrsingenieur mit Schwerpunkt auf der Erhebung, Analyse und Visualisierung von Verkehrsdaten. Besonders interessieren mich Geoinformatik, OpenStreetMap, automatisierte Datenpipelines und die Verbindung von Ingenieurwesen und Softwareentwicklung. Neben meiner beruflichen Tätigkeit arbeite ich regelmäßig an eigenen Programmier-, Mikrocontroller- und Analyseprojekten.",

  skills: [
    "Python",
    "Geoinformatik (QGIS, OSM)",
    "Verkehrsdatenerhebung & -analyse",
    "OpenStreetMap / Overpass API",
    "Datenvisualisierung",
    "Git & GitHub",
    "Automatisierung & Scripting",
    "Grundlagen Webentwicklung",
  ],

  projects: [
    {
      name: "Geo Intelligence Pipeline",
      description:
        "Automatisierte Pipeline zur Abfrage, Verarbeitung und Analyse von OpenStreetMap-Daten für städtische Verkehrsnetze. Fokus auf Straßenkategorien, Fuß- und Radverkehr sowie reproduzierbare Analysen.",
      link: "https://github.com/HG-Labatory/vicumpy#vicumpy",
      skills: ["Python", "OSM", "Overpass API", "Geodatenanalyse"],
    },
    {
      name: "Persönliche Portfolio-Website",
      description:
        "Eigene Portfolio-Website auf Basis von Astro und GitHub Pages zur Darstellung von Projekten, technischem Know-how und beruflichem Werdegang.",
      link: "https://hg-labatory.github.io/hendrik_goerner.github.io/",
      skills: ["Astro", "GitHub Pages", "Webentwicklung"],
    },
    {
      name: "Mikrocontroller- & Sensorprojekte",
      description:
        "Verschiedene Projekte mit ESP32 und Raspberry Pi, u. a. Temperaturmessung, OLED-Displays, MQTT-Datenübertragung und Visualisierung.",
      link: "https://github.com/hg-labatory",
      skills: ["ESP32", "Python", "MQTT", "IoT"],
    },
  ],

  experience: [
    {
      company: "Ingenieur- / Forschungsumfeld",
      title: "Verkehrsingenieur",
      dateRange: "—",
      bullets: [
        "Erhebung und Auswertung von Verkehrsdaten im urbanen Raum",
        "Analyse von Verkehrsnetzen unter Nutzung von Geodaten",
        "Aufbereitung und Visualisierung komplexer Datensätze",
        "Technische Dokumentation und Ergebnisdarstellung",
      ],
    },
  ],

  education: [
    {
      school: "Hochschule / Universität",
      degree: "Bachelor / Master im Verkehrsingenieurwesen",
      dateRange: "—",
      achievements: [
        "Schwerpunkt Verkehrsplanung und Verkehrsdatenerhebung",
        "Arbeiten mit Geodaten und quantitativen Analyseverfahren",
      ],
    },
  ],
};
