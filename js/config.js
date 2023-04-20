let respecConfig = {
  useLogo: true,
  useLabel: true,
  //default voor Geonovum is cc-by, eventueel is het mogelijk een andere licentie (cc0 of cc-by-nd) hier te kiezen voor het document.
  //license: "cc-by",
  specStatus: "GN-WV",
  specType: "HR",
  pubDomain: "dk",
  shortName: "NL-ReSpec-GN-template",
  publishDate: "2023-03-28",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we gewoonlijk alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  previousPublishDate: "2014-05-01",
  previousMaturity: "CV",
  title: "[Neem titel op in config.js]",
  editors:
    [
      {
        name: "voornaam achternaam",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  authors:
    [
      {
        name: "voornaam achternaam",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/geonovum/NL-ReSpec-GN-template",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
};
