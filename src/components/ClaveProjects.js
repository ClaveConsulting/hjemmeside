import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Project, Projects } from './../components/ProjectCarousel';

const ClaveProjects = () => {
  const images = useStaticQuery(graphql`
    query {
      komplett: file(relativePath: { eq: "190920_Clave_lowres_8.jpg" }) {
        ...fluidImage
      }
      rodekors: file(relativePath: { eq: "190920_Clave_lowres_5_crop.jpg" }) {
        ...fluidImage
      }
      posten: file(relativePath: { eq: "190920_Clave_lowres_7_crop.jpg" }) {
        ...fluidImage
      }
      thewell: file(relativePath: { eq: "190920_Clave_lowres_12_crop.jpg" }) {
        ...fluidImage
      }
      toll: file(relativePath: { eq: "190920_Clave_lowres_3_crop.jpg" }) {
        ...fluidImage
      }
      naf: file(relativePath: { eq: "190920_Clave_lowres_13.jpg" }) {
        ...fluidImage
      }
      eika: file(relativePath: { eq: "190920_Clave_lowres_1_crop.jpg" }) {
        ...fluidImage
      }
    }
  `);
  return (
    <Projects>
      <Project
        image={{ fluidImage: images.posten, alt: 'Pia' }}
        title="Posten"
        ingress="Henning og Pia jobber hos Posten i innovasjonsavdeingen. Begge jobber etter metodikk innen Service design i team sammen med Posten sine egne ansatte. Her kartlegger de kundereiser og finner painponts knyttet til levering og netthandel."
        link="/prosjekter/posten"
      />
      <Project
        image={{ fluidImage: images.rodekors, alt: 'Karine' }}
        title="Røde Kors"
        ingress="Karine og Samson jobber for Røde Kors sammen med utviklere fra Fabres i Polen. De lager et varslings- og overvåkingssystem, slik at frivillige rundt i verden kan varsle om sykdomstilfeller i sine lokalsamfunn, og på den måten oppdage og stoppe sykdomsutbrudd og epidemier."
        link="/prosjekter/rode-kors"
      />
      <Project
        image={{ fluidImage: images.thewell, alt: 'Anniken' }}
        title="The Well"
        ingress="Anniken og Lars Petter jobber sammen med Miron fra Fabres, med bestillings- og betalingsløsning på nettsidene til The Well. The Well er Nordens største spa- og velværesenter. De må faktisk litt på spa av og til, for å forstå brukeren. Viktigst for brukeropplevelsen er nok likevel de jevnlige brukertestene de kjører."
        link="/prosjekter/the-well"
      />
      <Project
        image={{ fluidImage: images.toll, alt: 'Samson og Morten' }}
        title="Toll"
        ingress="Kim, Eirik, Christian, Øyvind og Bent jobber på ulike prosjekter med... (Her mangler vi tekst)"
      />
      <Project
        image={{ fluidImage: images.naf, alt: 'Yngve' }}
        title="NAF"
        ingress="Lill, Yngve, Andreas, Marius, Mathias, Svein Helge, Petter og John har tilsammen vært innom over 20 prosjekter. Blant annet ny kjøpekontrakt med digital signering, interne systemer som får sjappa til å gå rundt, og ikke minst studentprosjektet som ble startskuddet for den nye medlemsappen."
        link="/prosjekter/naf"
      />
      <Project
        image={{ fluidImage: images.naf, alt: 'alt' }}
        title="Statens Pensjonskasse"
        ingress="Dan jobber er med på å lage en ny saksbehandlingsløsning som de ansatte skal bruke til å sørge for at deres 1 million medlemmer får riktig pensjon til riktig tid. Å gjøre pensjon enkelt for brukeren er ingen liten ambisjon, men med Dan på laget er de godt på vei."
        link="/prosjekter/naf"
      />
      <Project
        image={{ fluidImage: images.naf, alt: 'alt' }}
        title="Statens Vegvesen"
        ingress="Jan Willem, Ulf, Ragnhild og Torstein er hos Statens Vegvesen. Der jobber de på et av norges største offentlige IT-prosjekter der man erstatter det gamle motorvognregisteret med nye digitale løsninger for blant annet trafikkstasjoner, bilforhandlere, og vanlige brukere gjennom selvbetjening på Din Side."
        link="/prosjekter/naf"
      />
      <Project
        image={{ fluidImage: images.eika, alt: 'Charlotte' }}
        title="Eika"
        ingress="Charlotte, Michael og Morten jobber med utvikling av mobilapper og banksystemer hos Eika. De gjør det enklere for kunden å få oversikt over egne sparepenger og gjør det til en lek å investere i fond og aksjer. Eika alliansen er en samling med 66 lokalbanker."
        link="/prosjekter/naf"
      />
    </Projects>
  );
};

export default ClaveProjects;
