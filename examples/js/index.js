import React from 'react';
import ReactDOM from 'react-dom';


// import awo from './awo.png'; // Tell Webpack this JS file uses this image
// import higi from './higi.png';
// import mfcc from './mfcc.png';
// import asrhmm from './asrhmm.png';
// import hmmallnums from './hmmallnums.jpeg';
// import hmmglob from './hmmglob.jpeg';
// import hmmtwo from './hmmtwo.png';
// import w2v2 from './w2v2.jpeg';
// import w2v from './w2v.png';
// import asrneural from './asrneural.png';
// import ctc from './ctc.png';
// import ctc1 from './ctc1.png';
// import ctc2 from './ctc2.png';
import study1 from './study1.png';
// import study2 from './study2.png';
import study2c from './study2c.png';
import myw2v from './wav2vec2.png';

import multimap from './multilingual.png';
import cspos from './cs-pos.png'
import yormap from './map_yoruba.jpg'
import data from './data.png'
import trans from './transcriptions.png'
import results from './results.png'
import resultsprobe from './resprobe.png'

import biasfig from './biasfig.jpg'
import algtext from './algorithm-text.png'
import algpho from './algorithm-pho.png'
import empic from './embedding-pic.png'

import datatab from './data-table.png'

import resgender from './res-gender.png'
import resrace from './res-race.png'
import resall from './res-all.png'

import basetab from './tab-baseline.png'

import irt from './irt.png'
import kolawork from './kolawork.png'
import chunwork from './chunwork.png'

import pitchest from './pitchest.png'

import {
  FlexBox,
  Heading,
  UnorderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  Notes,
  Link
} from 'spectacle';

// const formidableLogo =
//   'https://avatars2.githubusercontent.com/u/5078602?s=280&v=4';


// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Roboto Mono", Roboto, Arial, sans-serif',
    text: '"Roboto Mono", Roboto, Arial, sans-serif'
  }
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress />
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END

// const SlideFragments = () => (
//   <>
//     <Slide>
//       <Text>This is a slide fragment.</Text>
//     </Slide>
//     <Slide>
//       <Text>This is also a slide fragment.</Text>
//       <Appear>
//         <Text>This item shows up!</Text>
//       </Appear>
//       <Appear>
//         <Text>This item also shows up!</Text>
//       </Appear>
//     </Slide>
//   </>
// );


const Presentation = () => (
  <Deck theme={theme} template={template}>

<Slide
      backgroundColor="tertiary"
      // backgroundImage="url(https://source.unsplash.com/lZCHy8PLyyo/1600x900)"
      backgroundOpacity={0.7}
    >
        <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="primary" fontSize="75px">
        <i>L'utilizzazione dei computer per aiutare la pronuncia del Yoruba</i>
        </Heading>
        <Heading margin="0px" color="primary" fontSize="36px">
          Tolúlọpẹ́ Ògúnrẹ̀mí
        </Heading>
        {/* <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading> */}
      </FlexBox>
      <Notes>
      Ciao a tutti ! Grazie per restate per questa presentazione. Oggi parlerò sul progetto che ho cominciato quest’anno scolastico. Il titolo italiano è….
      </Notes>
    </Slide>


    <Slide>
      <Heading  margin="0px 32px" color="primary" fontSize="h3">Outline</Heading>
      <UnorderedList>

          <ListItem> La lingua</ListItem>
          <ListItem> Le lingue tonali</ListItem>
          <ListItem> Lavoro precedente </ListItem>
          <ListItem> Dati </ListItem>
          <ListItem> Metodi </ListItem>
          <ListItem> Dimonstrazione </ListItem>
      </UnorderedList>

      <Notes>
      Vado cominciare a introdurre la lingua e le lingue tonale in generale. Poi presente il lavoro precedente collegato a questo progetto e poi i metodi e una dimostrazione di cosa ho fatto sul progetto.
      </Notes>
    </Slide> 

<Slide>
      <Heading fontSize="h3" margin="0px"> La lingua: Yorùbá</Heading>

    <Grid
    flex={1}
    gridTemplateColumns="60% 40%"
    gridTemplateRows="100% 100%"
    height="100%"
  >
      <UnorderedList>

      <Appear>
        {/* <ListItem>Yorùbá</ListItem> */}
            <ListItem fontSize="30px">
            Parlata da 45,6 milioni di parlanti totali    
            </ListItem>

            <ListItem fontSize="30px">
            È parlata principalmente nella Nigeria sud-occidentale e in parti del Benin e del Togo
            </ListItem>

            <ListItem fontSize="30px">
            Una lingua tonale rappresentato nella ortografia: i diacritici

            </ListItem>

            <ListItem fontSize="30px">
            È proibito nelle classi nigeriani ("No vernacular allowed")
            </ListItem>
      </Appear>
    </UnorderedList>
    <Appear>
      <Grid
      flex={1}
      gridTemplateColumns="100%"
      gridTemplateRows="50% 50%"
      height="100%"
      >

      <Box style={{display: 'flex', justifyContent: 'center', paddingTop: '20px'}}>
        <Image width="70%" height="70%" src={yormap} alt="Map of multilingual populations" />
      </Box> 


      <Box style={{display: 'flex', justifyContent: 'center'}}>
        <Image width="70%" height="70%" src={yormap} alt="Map of multilingual populations" />
      </Box> 
      </Grid>
      </Appear>
  </Grid>
  <Notes>
    <ul>
  <li>Ci sono tre toni officiali: il alto, rappresentato con l’accento acuto sulle vocali, il medio (nessuno accennto sulle vocali) e il basso con l’accento grave sulle vocali.</li>

<li>Vediamo questo con la parola Yorùbá: o ha tono medio, u ha tono basso e a ha tonno alto </li>

<li> La lingua è proibito nelle classi nigeriani, quindi e difficile di trovare le persone fuori da Nigeria (soprattutto gli figli degli immigrati) che possono parlare la lingua fluentemente. </li>
</ul>
  </Notes>
  </Slide>





<Slide>
        <Heading fontSize="h3"> Le lingue tonali</Heading>

        <Box>
          <Text fontSize="48px" textAlign="center"> Una lingua tonale (o lingua a toni) è una lingua in cui la variazione di tono di una stessa sillaba ne determina il significato o l'appartenenza a una classe grammaticale.</Text>
          <Text fontSize="20px" textAlign="center"> (Wikipedia) </Text>         
        </Box>
</Slide>

<Slide>
        <Heading fontSize="h3"> Le lingue tonali</Heading>

        <Box>
          <Text fontSize="48px" textAlign="center"> Sound demos with FO </Text>
        </Box>    
</Slide>

<Slide>
<FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="primary" fontSize="75px">
        <i>Le lingue tonali sono difficili a insengnare</i>
        </Heading>
      </FlexBox>
      <Notes>
      Il modo il più utilizzato nella letteratura è Elicited Immitation (Imitazione Suscitato nel mio italiano). Qui l’insengnante ripete una parola a pronunciare ripetutamente fino alla pronuncia corretta del studente. Questo modo è quasi impossibile a fare in una classe di trenta studenti, ma è importantissimo per la pronuncia corretta delle lingue tonali.
      </Notes>
</Slide>

{/* <Slide>
        <Heading fontSize="h3"> Word embeddings are biased</Heading>

        <Box>
          <Text fontSize="48px" textAlign="center"> They are not always perceived as hurtful by either party, and they can often be detected as positive statements by current hate-speech detection systems. </Text>
          <Text fontSize="20px" textAlign="center"> (Caliskan et al., 2016; Bolukbasi et al., 2016; Garg et al., 2017) </Text>         
        </Box>
        <Box>
          <Text fontSize="48px" textAlign="center" color="secondary"> E.g. "You speak English so well!" </Text>
        </Box>
        
      
</Slide> */}


<Slide>
        <Heading fontSize="h3"> Lavoro precedente</Heading>
        <Box style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
          <Image width="65%" height="130%" src={chunwork} alt="Map of multilingual populations" />
          <Text fontSize="30px" textAlign="center"> Chun et al., 2011 </Text>       
        </Box> 
<Notes>Dieci anni fa, Chun et al hanno fatto gli esperimenti sulla la pronuncia del cinese. Hanno visto che si gli insegnanti fanno vedere gli studenti uno grafico di loro toni quando pronunciano una parola tonale vicino a uno grafico di toni corretti, la pronuncia degli studenti migliora più velocemente.</Notes>
</Slide>



<Slide>
        <Heading fontSize="h3"> Lavoro precedente</Heading>
        <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="80% 20%"
    height="90%"
  >
        <Box style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
          <Image width="60%" height="90%" src={kolawork} alt="Map of multilingual populations" />
          <Text fontSize="30px" textAlign="center">Tubosun, 2012 </Text>       
        </Box> 
        </Grid>
  <Notes>
  Inoltre, Tubosun ha fatto L’imitazione suscitato (Elicited Immitation) delle parole Yorùbá con varie perosoni - gli studenti di Yorùbá, i parlanti di cinese (una lingua tonale), i parlanti delle lingue europee e i parlanti di solamente inglese. 
  </Notes>
</Slide>


<Slide>
        <Heading fontSize="h3">Dati</Heading>
        <UnorderedList>
          <ListItem> I registrazioni degli studenti nel lavoro di Tubosun </ListItem>
          <ListItem> A fare 

            <ul>
              <li>
              Gli annotazioni degli insegnanti di Yorùbá di ogni registrazione
              </li>
            </ul>

          </ListItem>
      </UnorderedList>
</Slide>



<Slide>
<Heading fontSize="h3"> Estrazione dei valori F0 </Heading>

<Grid
    flex={1}
    gridTemplateColumns="50% 50%"
    gridTemplateRows="100% 100%"
    height="100%"
  >

<UnorderedList>

  {/* <ListItem>Yorùbá</ListItem> */}
      <ListItem fontSize="30px">
      Quando ho gli annotazioni, posso addestrare uno classifier 
      </ListItem>

      <ListItem fontSize="30px">
      Il suono ha diversi aspetti e siamo interessati a solamente il tono
      </ListItem>

      <ListItem fontSize="30px">
      Utilizziamo il algoritmo di Wang (2005) per estrarre dieci aspetti di F0 per ogni registrazione

      </ListItem>
</UnorderedList>

<Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="80% 20%"
    height="100%"
    >
        <Box style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
          <Image width="100%" height="90%" src={pitchest} alt="Map of multilingual populations" />
          <Text fontSize="30px" textAlign="center">Foto di MathWorks</Text> 

        </Box>
    </Grid>    
    </Grid> 
</Slide>

<Slide>
        <Heading fontSize="h3"> Item Response Theory</Heading>

        <Box>
          <Text fontSize="48px" textAlign="center">  I modelli dell’IRT hanno l’obiettivo di calcolare la probabilità che un soggetto ha di rispondere correttamente a ciascun item del test somministrato, in funzione del livello di abilità posseduto dal soggetto stesso e dei parametri dell’item analizzato.</Text>
          <Text fontSize="20px" textAlign="center"> (Psicoterapia.it) </Text>         
        </Box>
</Slide>

<Slide>
      <Heading  margin="0px 32px" color="primary" fontSize="h3">Item Response Theory</Heading>
      <UnorderedList>

          <ListItem> In questo progetto un item e una parola Yorùbá </ListItem>
          <ListItem> Quindi vogliamo sapere o calcolare la probabilità che un studente pronuncierà una parola di Yorùbá correntemente </ListItem>
      </UnorderedList>

      <Notes>
      </Notes>
    </Slide> 


<Slide>
        <Heading fontSize="h3">Bayseian Item Response Theory</Heading>
        <Grid
        flex={1}
        gridTemplateColumns="100%"
        gridTemplateRows="80% 20%"
        height="80%"
  >
        <Box style={{display: 'flex', justifyContent: 'center'}}>
          <Image width="60%" height="100%" src={irt} alt="Map of multilingual populations" />
        </Box>
        <Text fontSize="20px" textAlign="center">Slide di Chris Piech</Text>   
        </Grid>    
</Slide>


{/* <Slide>
        <Heading fontSize="h3">Bayseian Item Response Theory</Heading>
        <UnorderedList>
          <ListItem> La lingua</ListItem>
          <ListItem> Le lingue tonale</ListItem>
          <ListItem> Lavoro precedente </ListItem>
          <ListItem> Dati </ListItem>
          <ListItem> Metodi </ListItem>
          <ListItem> Dimonstrazione </ListItem>
      </UnorderedList>
</Slide> */}

<Slide>
      <Heading  margin="0px 32px" color="primary" fontSize="h3">Bayseian Item Response Theory</Heading>
      <UnorderedList>

          <ListItem> Se possiamo apprendere la difficultà di pronunciare una parola, possiamo produrre una stima del livello di abilità (sotto forma di distribuzione normale) di ogni studente. Dopo ogni avviso successivo, i parametri della distribuzione cambieranno. </ListItem>
          <ListItem> Possiamo campionare la distribuzione per presentare il studente la ottima parola per lui in quel momento. </ListItem>
      </UnorderedList>

      <Notes>
      </Notes>
    </Slide> 

<Slide>
<FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="primary" fontSize="75px">
        <i>Clicca qui per la demonstrazione</i>
        </Heading>
      </FlexBox>
</Slide>

  <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          <i>Grazie mille!</i>
        </Heading>
        <Heading margin="0px" fontSize="50px">
          <i>... per la vostra pazienza con me!</i>
        </Heading>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide again.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
          <li>Let's see of this works....</li>
        </ol>
      </Notes>
    </Slide>













    {/* <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          ✨<i>Spectacle</i> ✨
        </Heading>
        <Heading margin="0px" fontSize="h2">
          A ReactJS Presentation Library
        </Heading>
        <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading>
      </FlexBox>
      <Notes>
        Spectacle supports notes per slide again.
        <ol>
          <li>Notes can now be HTML markup!</li>
          <li>Lists can make it easier to make points.</li>
          <li>Let's see of this works....</li>
        </ol>
      </Notes>
    </Slide> */}


    {/* <Slide
      transition={{
        from: {
          transform: 'scale(0.5) rotate(45deg)',
          opacity: 0
        },
        enter: {
          transform: 'scale(1) rotate(0)',
          opacity: 1
        },
        leave: {
          transform: 'scale(0.2) rotate(315deg)',
          opacity: 0
        }
      }}
      backgroundColor="tertiary"
      backgroundImage="url(https://github.com/FormidableLabs/dogs/blob/main/src/beau.jpg?raw=true)"
      backgroundOpacity={0.5}
    >
      <Heading>Custom Backgrounds</Heading>
      <UnorderedList>
        <ListItem>
          <CodeSpan>backgroundColor</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundImage</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundOpacity</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundSize</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundPosition</CodeSpan>
        </ListItem>
        <ListItem>
          <CodeSpan>backgroundRepeat</CodeSpan>
        </ListItem>
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading>Animated Elements</Heading>
      <OrderedList>
        <Appear>
          <ListItem>Elements can animate in!</ListItem>
        </Appear>
        <Appear>
          <ListItem>Out of order</ListItem>
        </Appear>
        <Appear priority={0}>
          <ListItem>
            Just identify the order with the prop <CodeSpan>priority</CodeSpan>!
          </ListItem>
        </Appear>
      </OrderedList>
    </Slide> */}


    {/* <Slide>
      <FlexBox>
        <Text>These</Text>
        <Text>Text</Text>
        <Text color="secondary">Items</Text>
        <Text fontWeight="bold">Flex</Text>
      </FlexBox>
      <Grid gridTemplateColumns="1fr 2fr" gridColumnGap={15}>
        <Box backgroundColor="primary">
          <Text color="secondary">Single-size Grid Item</Text>
        </Box>
        <Box backgroundColor="secondary">
          <Text>Double-size Grid Item</Text>
        </Box>
      </Grid>
      <Grid
        gridTemplateColumns="1fr 1fr 1fr"
        gridTemplateRows="1fr 1fr 1fr"
        alignItems="center"
        justifyContent="center"
        gridRowGap={1}
      >
        {Array(9)
          .fill('')
          .map((_, index) => (
            <FlexBox paddingTop={0} key={`formidable-logo-${index}`} flex={1}>
              <Image src={formidableLogo} width={100} />
            </FlexBox>
          ))}
      </Grid>
    </Slide> */}




    {/* <SlideFragments /> */}


    {/* <Slide>
      <CodePane language="jsx">{`
        import { createClient, Provider } from 'urql';

        const client = createClient({ url: 'https://0ufyz.sse.codesandbox.io' });

        const App = () => (
          <Provider value={client}>
            <Todos />
          </Provider>
        );
        `}</CodePane>
      <Box height={20} />
      <CodePane language="java" showLineNumbers={false}>{`
        public class NoLineNumbers {
          public static void main(String[] args) {
            System.out.println("Hello");
          }
        }
        `}</CodePane>
    </Slide> */}


    {/* <div>
      <Slide>
        <Heading>This is a slide embedded in a div</Heading>
      </Slide>
    </div> */}



    {/* <MarkdownSlide componentProps={{ color: 'yellow' }}>
      {`
        # This is a Markdown Slide

        - You can pass props down to all elements on the slide.
        - Just use the \`componentProps\` prop.
        `}
    </MarkdownSlide> */}


    {/* <MarkdownSlide animateListItems>
      {`
       # This is also a Markdown Slide

       It uses the \`animateListItems\` prop.

       - Its list items...
       - ...will appear...
       - ...one at a time.
      `}
    </MarkdownSlide> */}


    {/* <Slide>
      <Grid
        flex={1}
        gridTemplateColumns="50% 50%"
        gridTemplateRows="50% 50%"
        height="100%"
      >
        <FlexBox alignItems="center" justifyContent="center">
          <Heading>This is a 4x4 Grid</Heading>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            With all the content aligned and justified center.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Text textAlign="center">
            It uses Spectacle <CodeSpan>{'<Grid />'}</CodeSpan> and{' '}
            <CodeSpan>{'<FlexBox />'}</CodeSpan> components.
          </Text>
        </FlexBox>
        <FlexBox alignItems="center" justifyContent="center">
          <Box width={200} height={200} backgroundColor="secondary" />
        </FlexBox>
      </Grid>
    </Slide> */}



    {/* <MarkdownSlideSet>
      {`
        # This is the first slide of a Markdown Slide Set
        ---
        # This is the second slide of a Markdown Slide Set
        `}
    </MarkdownSlideSet> */}

  </Deck>
);

ReactDOM.render(<Presentation />, document.getElementById('root'));