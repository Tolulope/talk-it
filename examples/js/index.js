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
          <i>Fighting Bias with Bias: Unsupervised Microaggression Detection</i>
        </Heading>
        <Heading margin="0px" color="primary" fontSize="36px">
          Tolúlọpẹ́ Ògúnrẹ̀mí, Nazanin Sabri, Valerio Basile, Tommaso Caselli
        </Heading>
        {/* <Heading margin="0px 32px" color="primary" fontSize="h3">
          Where you can write your decks in JSX, Markdown, or MDX!
        </Heading> */}
      </FlexBox>
      <Notes>
        Hello everyone! 
      </Notes>
    </Slide>


    <Slide>
      <Heading  margin="0px 32px" color="primary" fontSize="h3">Leveraging Bias in Pre-trained Word Embeddings for Unsupervised Microaggression Detection</Heading>
        <Text> Joint work with</Text>
    </Slide> 


    <Slide>
      <Heading  margin="0px 32px" color="primary" fontSize="h3">Outline</Heading>
      <UnorderedList>

          <ListItem>Motivation</ListItem>
          <ListItem>Background</ListItem>

          <ListItem>
            Data
          </ListItem>
          <ListItem>
            Algorithm
          </ListItem>
          <ListItem>
           Results
          </ListItem>
          <ListItem>
            Conclusions
          </ListItem>
      </UnorderedList>
    </Slide> 






<Slide>
        <Heading fontSize="h3"> What is a microaggresison?</Heading>

        <Box>
          <Text fontSize="48px" textAlign="center"> Microaggressions are brief, everyday exchanges that denigrate stigmatised and culturally marginalised groups. </Text>
          <Text fontSize="20px" textAlign="center"> (Mariam-Webster) </Text>         
        </Box>
        <Box>
          <Text fontSize="48px" textAlign="center" color="secondary"> They are subtle manifestations of bias  (Breitfeller et al., 2019). </Text>
        </Box>
        
      
</Slide>

<Slide>
        <Heading fontSize="h3"> What is a microaggresison?</Heading>

        <Box>
          <Text fontSize="48px" textAlign="center"> They are not always perceived as hurtful by either party, and they can often be detected as positive statements by current hate-speech detection systems. </Text>
          <Text fontSize="20px" textAlign="center"> (Breitfeller et al., 2019) </Text>         
        </Box>
        <Box>
          <Text fontSize="48px" textAlign="center" color="secondary"> E.g. "You speak English so well!" </Text>
        </Box>
        
      
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
        <Heading fontSize="h3"> Word embeddings are biased</Heading>
        <Box style={{display:'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
          <Image width="65%" height="65%" src={biasfig} alt="Map of multilingual populations" />
          <Text fontSize="30px" textAlign="center">(Caliskan et al., 2016; Bolukbasi et al., 2016; Garg et al., 2017) </Text>       
        </Box> 

</Slide>


<Slide>
        <Heading fontSize="h3">Data</Heading>
        <Box style={{display: 'flex', justifyContent: 'center'}}>
          <Image width="75%" height="100%" src={datatab} alt="Map of multilingual populations" />
        </Box> 
        <Text fontSize="30px" textAlign="center">SelfMA dataset (2019) and randomly selected Tumblr posts</Text>       

</Slide>



<Slide>
<Heading fontSize="h3"> Word Embeddings Used</Heading>

<Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="70% 30%"
    height="100%"
    >
        <Box style={{display: 'flex', justifyContent: 'center'}}>
          <Image width="60%" height="80%" src={empic} alt="Map of multilingual populations" />
        </Box> 
        <Box  style={{padding: 0}}>
        <Text fontSize="30px" textAlign="center">GloVe, word2vec, FastText</Text> 
        <Text fontSize="20px" textAlign="center">Image from <a href='https://jalammar.github.io/illustrated-word2vec/'>The Illustrated Word2Vec</a></Text> 
        </Box> 
    </Grid>     
</Slide>

<Slide>
        <Heading fontSize="h3">Baseline</Heading>
        <Box style={{display: 'flex', justifyContent: 'center'}}>
          <Image width="80%" height="80%" src={basetab} alt="Map of multilingual populations" />
        </Box> 
        <Text fontSize="30px" textAlign="center">Support Vector Machine on Data</Text>       

</Slide>


  <Slide>

  <Heading fontSize="h3"> Algorithm</Heading>

  <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="80% 20%"
    height="80%"
    >
    <Box style={{display: 'flex', justifyContent: 'center'}}>
    <Image width="70%" height="100%" src={algtext} alt="Mfcc creation" />
    </Box>
  </Grid>

  <Notes>
  </Notes>

</Slide>
 
<Slide>

<Heading fontSize="h3"> Algorithm </Heading>

<Grid
  flex={1}
  gridTemplateColumns="100%"
  gridTemplateRows="80% 20%"
  height="80%"
  >
  <Box style={{display: 'flex', justifyContent: 'center'}}>
  <Image width="100%" height="100%" src={algpho} alt="Mfcc creation" />
  </Box>
</Grid>

<Notes>
</Notes>

</Slide>





<Slide>

  <Heading fontSize="h3"> Results - Gender</Heading>

  <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="100%"
    height="70%"
    >
  
    <Box style={{display: 'flex', justifyContent: 'center'}}>
    <Image width="80%" height="100%" src={resgender} alt="Mfcc creation" />
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

  <Heading fontSize="h3"> Results - Race</Heading>

  <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="100%"
    height="70%"
    >
  
    <Box style={{display: 'flex', justifyContent: 'center'}}>
    <Image width="80%" height="100%" src={resrace} alt="Mfcc creation" />
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

  <Heading fontSize="h3"> Results - All</Heading>

  <Grid
    flex={1}
    gridTemplateColumns="100%"
    gridTemplateRows="100%"
    height="70%"
    >
  
    <Box style={{display: 'flex', justifyContent: 'center'}}>
    <Image width="80%" height="100%" src={resall} alt="Mfcc creation" />
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
      <Heading fontSize="h3"> Finding Microaggressions 'In The Wild'</Heading>

      <UnorderedList>
      <Appear>
          <ListItem fontSize="40px">
          We use our unsupervised model to label unseen instances from another domain (Twitter)
          </ListItem>
       </Appear>
      <Appear>
        <ListItem fontSize="40px">We want to understand the false positive results and the potential harm the model could cause.</ListItem>
      </Appear>
      <Appear>
        <ListItem fontSize="40px">We automatically label 256,843 tweets for gender and 373,631 tweets for race.</ListItem>
      </Appear>
    </UnorderedList>

  </Slide>

  <Slide>
        <Heading fontSize="h3"> Finding Microaggressions 'In The Wild'</Heading>

        <Box>
          <Text fontSize="48px" textAlign="center"> Saying ”Arrested Development isn’t funny” in an office full of women just to
feel something </Text>
        </Box>
        <Box>
          <Text fontSize="48px" textAlign="center"> “Men have moustaches, women have oversized bracelets”</Text>
        </Box>
        
      
</Slide>

<Slide>
        <Heading fontSize="h3"> Finding Microaggressions 'In The Wild'</Heading>

        <Box>
          <Text fontSize="48px" textAlign="center"> “why are you being so dramatic? just say I’m not originally arab, you don’t have to fight about it” </Text>
        </Box>
        <Box>
          <Text fontSize="48px" textAlign="center"> “I will need to explain that to the chinese old lady who works at my school’s
administrative office”</Text>
        </Box>
        
      
</Slide>




  <Slide>
      <Heading fontSize="h3"> Conclusions</Heading>

      <UnorderedList>
      <Appear>
          <ListItem fontSize="40px">
          We have an interpretable, unsupervised algorithm to automatically detect microaggresisons.
          </ListItem>
       </Appear>
      <Appear>
        <ListItem fontSize="40px">word2vec and FastText work almost as well as each other with this method</ListItem>
      </Appear>
      <Appear>
        <ListItem fontSize="40px">We were able to use this method to detect possible microaggresisons 'in the wild'.</ListItem>
      </Appear>
    </UnorderedList>

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