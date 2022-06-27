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
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif'
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
      backgroundImage="url(https://source.unsplash.com/lZCHy8PLyyo/1600x900)"
      backgroundOpacity={0.7}
    >
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" color="primary" fontSize="75px">
          <i>Speech recognition of low-resource code-switching</i>
        </Heading>
        <Heading margin="0px" color="primary" fontSize="h2">
          Tolúlọpẹ́ Ògúnrẹ̀mí
        </Heading>
        {/* <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading> */}
      </FlexBox>
      <Notes>
        Hello everyone! 
      </Notes>
    </Slide>


    {/* <Slide>
      <Heading>We will cover:</Heading>
      <UnorderedList>
         <Appear>
          <ListItem>What code-switching and code-mixing are</ListItem>
        </Appear>
        <Appear>
          <ListItem>Data used</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Models trained
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Similarites of representations
            <ul>
              <ListItem>
                To speech features
              </ListItem>

              <ListItem>
                To vector representations of text
              </ListItem>

            </ul>

          </ListItem>
        </Appear>

      </UnorderedList>
    </Slide>  */}





<Slide>
        <Heading fontSize="h3"> What is code-switching?</Heading>

        <Box>
          <Text fontSize="56px" textAlign="center"> The mixing of words, phrases and sentences from two distinct grammatical (sub) systems across sentence boundaries within 
                                                  the same speech event. </Text>
          <Text fontSize="28px" textAlign="center"> (Bokomba, 1988) </Text>         
        </Box>
        <Box>
          <Text fontSize="56px" textAlign="center" color="secondary"> I'll tell you exactly when I have to leave, at ten o'clock.
        Y son las nueve y cuarto. </Text>
        </Box>
        
      
</Slide>

<Slide>
        <Heading fontSize="h3"> What is code-mixing?</Heading>

        <Box>
          <Text fontSize="56px" textAlign="center"> The change of one language to another within the same utterance or in the same oral/written text. </Text>       
          <Text fontSize="28px" textAlign="center"> (Ho, 2007) </Text>         
        </Box>

        <Box>
          <Text fontSize="56px" textAlign="center" color="secondary">  "Pero WHY do I have to go a la casa?" </Text>
        </Box>
      
</Slide>

<Slide>
        <Heading fontSize="h3"> Why is it important?</Heading>
        <Box style={{display: 'flex', justifyContent: 'center'}}>
          <Image width="75%" height="100%" src={multimap} alt="Map of multilingual populations" />
        </Box> 
        <Text fontSize="46px" textAlign="center">Most of the world is multilingual. </Text>       

</Slide>

<Slide>
<Heading fontSize="h3"> Why is hard to solve?</Heading>

<Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="80% 20%"
    height="80%"
    >
        <Box style={{display: 'flex', justifyContent: 'center'}}>
          <Image width="75%" height="100%" src={cspos} alt="Map of multilingual populations" />
        </Box> 
        <Box>
        <Text fontSize="46px" textAlign="center">We have to rethink language modelling</Text> 
        </Box> 
    </Grid>     
</Slide>

<Slide>
      <Heading fontSize="h3" margin="0px"> Which language am I focussed on?</Heading>

    <Grid
    flex={1}
    gridTemplateColumns="60% 40%"
    gridTemplateRows="100% 100%"
    height="100%"
  >
      <UnorderedList>

      <Appear>
        <ListItem>Yorùbá</ListItem>
        <ul>
            <ListItem>
             44.5+ million speakers       
            </ListItem>

            <ListItem>
            Spoken in Nigeria, Benin, Brazil + the diaspora
            </ListItem>

            <ListItem>
            A tonal language with an orthographic representation: tonal marks on vowels

            </ListItem>

            <ListItem>
            Not used in educational environments in Nigeria
            </ListItem>

          </ul>
      </Appear>
    </UnorderedList>

    <Box style={{display: 'flex', justifyContent: 'center'}}>
      <Image width="100%" height="70%" src={yormap} alt="Map of multilingual populations" />
    </Box> 

    </Grid>
  </Slide>

<Slide>

<Heading fontSize="h3">What is Speech?</Heading>


  <Grid
    flex={1}
    gridTemplateColumns="50% 50%"
    gridTemplateRows="100% 100%"
    height="100%"
  >
    <FlexBox alignItems="center" justifyContent="center">
    <iframe width="90%" height="100%" src="https://www.youtube.com/embed/ANHvP6v3DYE" title="Awo Praat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </FlexBox>
    <FlexBox alignItems="center" justifyContent="center">
    <iframe width="90%" height="100%" src="https://www.youtube.com/embed/RI2Pgh8Jfkk" title="Higi haga Praat" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
    </FlexBox>
  </Grid>
</Slide>


{/* 
 <Slide>
      <Heading>The task</Heading>
      <UnorderedList>
         <Appear>
          <ListItem>ASR on code-switched speech</ListItem>
        </Appear>
        <Appear>
          <ListItem>Data used</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Models trained
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Similarites of representations
            <ul>
              <ListItem>
                To speech features
              </ListItem>

              <ListItem>
                To vector representations of text
              </ListItem>

            </ul>

          </ListItem>
        </Appear>

      </UnorderedList>
    </Slide>  */}





  <Slide>

  <Heading fontSize="h3"> Low resource code switched ASR</Heading>

  <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="80% 20%"
    height="80%"
    >
    <Box style={{display: 'flex', justifyContent: 'center'}}>
    <Image width="60%" height="100%" src={myw2v} alt="Mfcc creation" />
    </Box>
    <Box>
    <Text fontSize="46px" textAlign="center"> Fine-tuned wav2vec 2.0 XLSR </Text>       
    </Box>
  </Grid>

  <Notes>
  </Notes>

</Slide>
 
<Slide>

<Heading fontSize="h3"> Data used </Heading>

<Grid
  flex={1}
  gridTemplateColumns="100%"
  gridTemplateRows="80% 20%"
  height="80%"
  >
  <Box style={{display: 'flex', justifyContent: 'center'}}>
  <Image width="100%" height="100%" src={data} alt="Mfcc creation" />
  </Box>
</Grid>

<Notes>
</Notes>

</Slide>





<Slide>

  <Heading fontSize="h3"> Low resource code switched ASR</Heading>

  <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="100%"
    height="70%"
    >
  
    <Box style={{display: 'flex', justifyContent: 'center'}}>
    <Image width="60%" height="100%" src={study1} alt="Mfcc creation" />
    </Box>

    <Box>
    {/* <Text fontSize="14px" textAlign="center" style={{padding: 0}}>Image from <Link target="_blank" fontSize="14px" href="https://jonathan-hui.medium.com/speech-recognition-asr-model-training-90ed50d93615">source</Link></Text>        */}
    {/* <Text fontSize="28px" textAlign="center"> Resulting models are fine-tuned primarily on monolingual data (Yorùbá and Nigerian English) </Text>        */}
    </Box>
  </Grid>

  <Notes>
  </Notes>

</Slide>


<Slide>

  <Heading fontSize="h3" margin="0px"> Low resource code switched ASR</Heading>

  <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="20% 80%"
    height="80%"
    >
    <Box>
    {/* <Text fontSize="14px" textAlign="center" style={{padding: 0}}>Image from <Link target="_blank" fontSize="14px" href="https://jonathan-hui.medium.com/speech-recognition-asr-model-training-90ed50d93615">source</Link></Text>        */}
    <Text fontSize="28px" textAlign="center"> A small, code-switched dataset was created for experiments. Instances are from Yorùbá Nollywood film and Yorùbá News Broadcasts. </Text>       
    </Box>
    <Box style={{display: 'flex', justifyContent: 'center'}}>
    <iframe width="60%" height="100%" src="https://www.youtube.com/embed/nDIvaW7rPXo?start=76" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Box>
  </Grid>

  <Notes>
  </Notes>

</Slide>
    {/* <Slide>
        <Heading fontSize="h3" > Zero resource code switching</Heading>

        <UnorderedList>
        <Appear>
          <ListItem>Fine-tuned wav2vec 2.0 XLSR</ListItem>
        </Appear>
        <Appear>
          <ListItem>Resulting models are fine-tuned primarily on monolingual data (Yorùbá and Nigerian English)</ListItem>
        </Appear>
        <Appear>
          <ListItem>
            A small, code-switched dataset was created for experiments. Instances are from Yorùbá Nollywood film and Yorùbá News Broadcasts.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
           No lexicon or language model.
          </ListItem>
        </Appear>
      </UnorderedList>

    </Slide> */}





  <Slide>
      <Heading fontSize="h3"> Low resource code switched ASR</Heading>

      <UnorderedList>
      <Appear>
          <ListItem>
           No lexicon or language model.
          </ListItem>
       </Appear>
      <Appear>
        <ListItem>Evidence of latent phonetic representation in the model</ListItem>
        <ul>
            <ListItem>
            mock -> mọrk
            </ListItem>

            <ListItem>
            america -> a mẹrika
            </ListItem>

            <ListItem>
            she’s a  -> ṣhe  is  a
            </ListItem>
          </ul>
      </Appear>
      {/* <Appear>
        <ListItem>Ran linear and neural probes on the data and found code-switching detection</ListItem>
      </Appear> */}
    </UnorderedList>

  </Slide>


  <Slide>

  <Heading fontSize="h3"> Produced transcriptions</Heading>

  <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="100%"
    height="70%"
    >
  
    <Box style={{display: 'flex', justifyContent: 'center'}}>
    <Image width="60%" height="100%" src={trans} alt="Mfcc creation" />
    </Box>

    <Box>
    {/* <Text fontSize="14px" textAlign="center" style={{padding: 0}}>Image from <Link target="_blank" fontSize="14px" href="https://jonathan-hui.medium.com/speech-recognition-asr-model-training-90ed50d93615">source</Link></Text>        */}
    {/* <Text fontSize="28px" textAlign="center"> Resulting models are fine-tuned primarily on monolingual data (Yorùbá and Nigerian English) </Text>        */}
    </Box>
  </Grid>

  <Notes>
  </Notes>

</Slide>

<Slide>

<Heading fontSize="h3"> Results</Heading>

<Grid
  flex={1}
  gridTemplateColumns="100%"
  gridTemplateRows="100%"
  height="70%"
  >

  <Box style={{display: 'flex', justifyContent: 'center'}}>
  <Image width="60%" height="100%" src={results} alt="Mfcc creation" />
  </Box>

</Grid>

</Slide>

  <Slide>

  <Heading fontSize="h3"> Can the model tell if an utterance is code-switched?</Heading>

  <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="20% 80%"
    height="70%"
    >
    <Box>
    {/* <Text fontSize="14px" textAlign="center" style={{padding: 0}}>Image from <Link target="_blank" fontSize="14px" href="https://jonathan-hui.medium.com/speech-recognition-asr-model-training-90ed50d93615">source</Link></Text>        */}
    <Text fontSize="28px" textAlign="center"> Ran linear and neural probes on the data and found code-switching detection </Text>       
    </Box>
    <Box style={{display: 'flex', justifyContent: 'center'}}>
    <Image width="85%" height="100%" src={study2c} alt="Mfcc creation" />
    </Box>
  </Grid>

  <Notes>
  </Notes>

</Slide>


<Slide>

<Heading fontSize="h3"> Results</Heading>

<Grid
  flex={1}
  gridTemplateColumns="100%"
  gridTemplateRows="100%"
  height="70%"
  >

  <Box style={{display: 'flex', justifyContent: 'center'}}>
  <Image width="60%" height="100%" src={resultsprobe} alt="Mfcc creation" />
  </Box>

</Grid>

</Slide>

<Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          <i>Conclusions</i>
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



  <Slide>
      <FlexBox height="100%" flexDirection="column">
        <Heading margin="0px" fontSize="150px">
          <i>Thank you!</i>
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