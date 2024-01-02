// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NearTextType } from 'types';
import type { NextApiRequest, NextApiResponse } from 'next';
import weaviate, { WeaviateClient, ApiKey } from 'weaviate-ts-client';
let recData={"data":{"Get":{"Book":[{"_additional":{"generate":{"error":"Following property has empty value: 'description'. Make sure you spell the property name correctly, verify that the property exists and has a value","singleResult":null}},"authors":"Paul de DeMan","average_rating":"4.09","categories":"","description":"","isbn10":"0816611351","isbn13":"9780816611355","num_pages":"342","published_year":"1995","thumbnail":"http://books.google.com/books/content?id=XmNAxQEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","title":"Blindness and Insight"},{"_additional":{"generate":{"error":"connection to Cohere API failed with status: 401","singleResult":null}},"authors":"Tom Clancy;Steve R. Pieczenik","average_rating":"3.93","categories":"Juvenile Fiction","description":"When fellow student Roddy L'Officier sabotages Maj Green's latest virtual simulation program, he is exiled by the rest of the Net Force Explorers, but the brilliant outcast has some other dangerous plans for them all. Original.","isbn10":"0425164179","isbn13":"9780425164174","num_pages":"182","published_year":"1999","thumbnail":"http://books.google.com/books/content?id=AGIyx72XnckC&printsec=frontcover&img=1&zoom=1&source=gbs_api","title":"One is the Loneliest Number"},{"_additional":{"generate":{"error":"connection to Cohere API failed with status: 401","singleResult":null}},"authors":"Plato;George Maximilian Anthony Grube","average_rating":"4.12","categories":"Philosophy","description":"Presents translations of five dialogues from Plato, as well as additional notes on history and mythology.","isbn10":"0872206335","isbn13":"9780872206335","num_pages":"156","published_year":"2002","thumbnail":"http://books.google.com/books/content?id=rsITnwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api","title":"Five Dialogues"},{"_additional":{"generate":{"error":"connection to Cohere API failed with status: 401","singleResult":null}},"authors":"Pedro Calderon de la Barca;Stanley Appelbaum","average_rating":"3.98","categories":"Foreign Language Study","description":"Presents a bilingual version of the classic seventeenth-century Spanish play about an imprisoned prince who is returned to the outside world.","isbn10":"0486424731","isbn13":"9780486424736","num_pages":"208","published_year":"2002","thumbnail":"http://books.google.com/books/content?id=OpUoAwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api","title":"Life Is a Dream/La Vida Es Sueño"},{"_additional":{"generate":{"error":"connection to Cohere API failed with status: 401","singleResult":null}},"authors":"Dugald Steer","average_rating":"3.82","categories":"Juvenile Fiction","description":"When twelve-year-old Daniel Cook and his sister, Beatrice, spend the summer at a special school run by their parents' eccentric former tutor, they are introduced to the secret study of dragonology and find themselves caught up in an evil plot.","isbn10":"0763628107","isbn13":"9780763628109","num_pages":"221","published_year":"2006","thumbnail":"http://books.google.com/books/content?id=kasIop1plB4C&printsec=frontcover&img=1&zoom=1&source=gbs_api","title":"The Dragon's Eye"}]}}}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Object>
) {
  res.status(200).json(recData);
  // try {
  //   const { method } = req;
  //   let { query, userInterests } = req.body;
  //
  //   const weaviateClusterUrl = process.env.WEAVIATE_CLUSTER_URL?.replace("https://", "")
  //
  //   switch (method) {
  //
  //     case 'POST': {
  //
  //       let headers: { [key: string]: string } = {};
  //
  //       if (process.env.OPENAI_API_KEY) {
  //           headers['X-OpenAI-Api-Key'] = process.env.OPENAI_API_KEY;
  //       }
  //
  //       if (process.env.COHERE_API_KEY) {
  //           headers['X-Cohere-Api-Key'] = process.env.COHERE_API_KEY;
  //       }
  //
  //       const client: WeaviateClient = weaviate.client({
  //         scheme: 'https',
  //         host: weaviateClusterUrl || 'zxzyqcyksbw7ozpm5yowa.c0.us-west2.gcp.weaviate.cloud',
  //         apiKey: new ApiKey(process.env.WEAVIATE_API_KEY || 'n6mdfI32xrXF3DH76i8Pwc2IajzLZop2igb6'), //READONLY API Key, ensure the environment variable is an Admin key to support writing
  //         headers: headers,
  //       });
  //
  //       let nearText: NearTextType = {
  //         concepts: [],
  //       }
  //
  //       nearText.certainty = .6
  //
  //       nearText.concepts = query;
  //
  //       let generatePrompt = "Briefly describe why this book might be interesting to someone who has interests or hobbies in " + userInterests + ". the book's title is {title}, with a description: {description}, and is in the genre: {categories}. Don't make up anything that wasn't given in this prompt and don't ask how you can help.";
  //
  //       let recDataBuilder = client.graphql
  //         .get()
  //         .withClassName('Book')
  //         .withFields(
  //           'title isbn10 isbn13 categories thumbnail description num_pages average_rating published_year authors'
  //         )
  //         .withNearText(nearText)
  //         .withLimit(20);
  //
  //       if (headers['X-Cohere-Api-Key']) {
  //         recDataBuilder = recDataBuilder.withGenerate({
  //           singlePrompt: generatePrompt,
  //         });
  //       }
  //
  //     const recData = await recDataBuilder.do();
  //
  //       res.status(200).json(recData);
  //       break;
  //     }
  //     default:
  //       res.status(400);
  //       break;
  //   }
  // } catch (err) {
  //   console.error(err);
  //   res.status(500);
  // }
}
