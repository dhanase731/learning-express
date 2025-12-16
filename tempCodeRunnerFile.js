const express=require("express");
const app=express();
const fs=require("fs");

const jsonData=JSON.parse(fs.readFileSync("./gym.json","utf-8"));
console.log(jsonData);

app.get("/api/v3/sri",(req, res)=>{
    res.status(200).json({
        status:"Success",
        length : jsonData.length,
        data : {
            jsonData,
        }
    });
});
app.get("/api/v3/sri/:id",(req,res)=>{
    const id=req.params.id*1;
    const gym=jsonData.find(el=>el.id===id);
    res.status(200).json({
        status:"Success",
        data : {
            gym,
        }
    });
});



app.post("/api/v3/sri", (req, res) => {
    const id=jsonData.length;
    const gym=Object.assign({id:id},req.body);
    jsonData.push(gym);
    fs.writeFileSync("./gym.json",JSON.stringify(jsonData),"utf-8",(err)=>{
        if(err){

            res.status(400).json({
                status:"Failed to writ"

            });
        }
        res.status(201).json({

            status:"True",
            data:{
                gym,
            }
        });
    });
    res.status(201).json({
        status:"Successful",
        data:{
            gym,
        }
    });
});




app.put("/api/v3/sri/:id", (req, res) => {
    const resId=req.params.id;
    const gym=jsonData.find((el)=>el.id==resId);
    if(!plant){
        res.status(404).json({
            status:"Fail",
            message:"Please check your entry id",
        });
    }
                res.status(204).json({
                    status:"Successful",
                    message:"<> Update Successful <>",
                });
                
});









const PORT_NO=9000;
app.listen(PORT_NO,()=>{
    console.log("Server started successfully",PORT_NO);
})