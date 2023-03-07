// Next.js API route support: https://nextjs.org/docs/api-routes/introduction




function handleget(req, res){
  res.status(200).json({ name: 'John Doe' })
}

export default function handler(req, res) {
  if(req.method == 'GET' || req.method == 'get'){
     handleget(req, res);
  }
  
}