const {S3Client, GetObjectCommand, PutObjectCommand} = require("@aws-sdk/client-s3");
const {getSignedUrl}=require("@aws-sdk/s3-request-presigner")
const crypto=require("crypto");
require("dotenv").config();

const bucketName=process.env.ACCESS_KEY_ID;

const RandomImageName= (bytes=32)=>crypto.randomBytes(bytes).toString('hex');

const s3Client=new S3Client({
    region:"ap-south-1",
    credentials:{
        accessKeyId:"AKIAW3MEAVEVC6PFIK5Q",
        secretAccessKey:"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"
    }
})

 const  getObjectURL=async(key)=>{ 
    const command= new GetObjectCommand({
        Bucket:"eazymaterials",
        Key:key
    })
    const url=getSignedUrl(s3Client,command);
    return url;
}

const putObjectURL=async(filename,body,contentType)=>{
    //key as in where to store
    const command= new PutObjectCommand({
        Bucket:"eazymaterials",
        Key:filename,
        Body:body,
        ContentType:contentType
    })
    const url=await getSignedUrl(s3Client,command);
    return url;
}

// // }
// async function show(data){
//     console.log("URL for the uploaded image",await getObjectURL(`/uploads/user-uploads/${data}`))
// }

// show(`image-${Date.now().jpeg}`)

module.exports={
    getObjectURL,
    putObjectURL,
    RandomImageName,
}