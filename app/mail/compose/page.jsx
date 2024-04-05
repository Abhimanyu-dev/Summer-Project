import { MotionDiv } from '../[id]/Motion'
import RichEditor from '@components/Editor'

export default function Page({params}){
    return(
        <MotionDiv animate={{opacity:[0.25, 0.5,  1], x:0}}  initial={{opacity: 0, x:100}} className="glassmorphism-no-hover h-[85vh] w-[100%] flex flex-col items-start justify-start relative ">
            <div className="m-2 w-full bg-white rounded-[20px] p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                To:
                <input type="mail" className='outline-none px-2 mx-2 w-[80%]'/>
            </div>
            <div className="m-2 w-full bg-white rounded-[20px] p-3 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                Subject:
                <input type="text" className='outline-none px-2 mx-2 w-[80%] font-bold'/>
            </div>
            <RichEditor />
            <button type="button" className="outline_btn right-4 bottom-4 absolute">Send</button>
        </MotionDiv>
    )
}