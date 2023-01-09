import { useState } from "react"

export const Comments = () => {
        const [comments, setComments] = useState<string[]>([])
        const [comment, setComment] = useState("")
        const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => { 
            e.preventDefault()
            setComments(oldComments => [...oldComments, comment])
            setComment("")
        }
    return (
        <>
      
                <form className="" onSubmit={handleSubmit}>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                    <div className="flex gap-4">
                        <textarea value={comment} onChange={e => setComment(e.target.value)} id="message"  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                        <button type="submit" className={`${comment.length < 1 ? "hover:cursor-not-allowed" : ""} text-white`} disabled={comment.length < 1}>Comment</button>
                    </div>
                </form>
            
                <section className="bg-white w-2/3 mt-4 ">
                    {comments.reverse().map((comment, idx) => <div className="border-b-gray-600-700 border"  key={idx}><p className="text-black">{comment}</p></div>)}
                </section>
            
        </>
    )
}