const fetch = require('node-fetch');
const API_URL = process.env.LLM_API_URL || 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.OPENAI_API_KEY || process.env.LLM_API_KEY || '';
module.exports = async function(prompt, opts={}){
  if(!API_KEY) return {text: `MOCK: response for prompt: ${prompt}`};
  const body = {model: opts.model||'gpt-4o-mini', messages:[{role:'user',content:prompt}]};
  const res = await fetch(API_URL, {method:'POST', headers:{'Authorization':`Bearer ${API_KEY}`,'Content-Type':'application/json'}, body:JSON.stringify(body)});
  const jd = await res.json();
  return {text: jd.choices?.[0]?.message?.content || JSON.stringify(jd)};
}
