import express from "express";
const app = express()
const port = 3000

const token = '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'



import { Configuration, OpenAIApi }from "openai";

const configuration = new Configuration({
  apiKey: token,
});
const openai = new OpenAIApi(configuration);

console.log(openai);
const completion = await openai.createChatCompletion({
  model: "gpt-3.5-turbo",
  messages: [{role: "user", content: "Hello world"}],
});
console.log(completion.data.choices[0].message);


// console.log(completion);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


