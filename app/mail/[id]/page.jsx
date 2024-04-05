import data from '@utils/database.json'
import Link from 'next/link'
import { MotionDiv } from './Motion'

export default function Page({params}){
    const mail = data.filter(e => e["_id"] == params.id)
    const next = data.filter(e => e["index"] == (mail[0]["index"]+1))
    const prev = data.filter(e => e["index"] == (mail[0]["index"]-1))
    return(
        <MotionDiv animate={{opacity:[0.5,  1], x:0}}  initial={{opacity: 0, x:100}} className="glassmorphism-no-hover h-[85vh] w-[100%] flex flex-col items-start justify-start relative ">
            <div className="btn flex-between w-full">
                <div className='flex cursor-pointer'>
                    <Link href='/'>
                        <img src="/assets/icons/back.png" alt="" className='h-[20px] w-[20px]'/>
                    </Link>
                </div>
                <div className="flex gap-4 ">
                    <div className="pt-[6px]">
                        {`${mail[0]["index"]+1} of 1000`}
                    </div>
                    {
                        prev[0] ? 
                            <Link href={`/mail/${prev[0]["_id"]}`} className="logo_text">{"<"}</Link>
                        :
                            <div className="logo_text text-gray-500">{"<"}</div>
                    }
                    <Link href={`/mail/${next[0]["_id"]}`} className="logo_text">{">"}</Link>
                </div>
            </div>
            <div className="subject_text w-full">
                {mail[0]["subject"]}
            </div>
            <div className="w-full hover:underline transition-all cursor-pointer">
                {`<${mail[0]["sender"]}>`}
            </div>
            <div className="w-full mt-[3rem] text-left p-4">
                {mail[0]["body"]}
            </div>
            <div className="btn-container w-full flex gap-4 absolute bottom-4 left-4">
                <div className="outline_btn">
                    Reply
                </div>
                <div className="outline_btn">
                    Forward
                </div>
            </div>
        </MotionDiv>
    )
}