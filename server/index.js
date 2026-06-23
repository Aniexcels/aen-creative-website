
const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.use(express.json());
app.post('/api/contact',(req,res)=>{
 res.json({success:true,message:'Message received',data:req.body});
});
app.listen(process.env.PORT||3000);
