import { useState } from "react";

export const Comments = () => {
 // const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [comments, setComments] = useState<string[]>([])
  const [comment, setComment] = useState("")

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => { 
    e.preventDefault()
    setComments(oldComments => [...oldComments, comment])
    setComment("")
  }

  console.log(comments)
  // FIXME: make last comment submited show at the top 
  return (
    <>
        <form className="flex gap-4" onSubmit={handleSubmit}>
          <textarea value={comment} onChange={e => setComment(e.target.value)}  placeholder= "Add a comment..." />
          <button type="submit" disabled={comment.length < 1}>Comment</button>
        </form>

        
        <section className="bg-white w-2/3 mt-4 ">
            {comments.map((comment, idx) => <div className="border-b-gray-600-700 border"  key={idx}><p className="text-black">{comment}</p></div>)}
        </section>

    </>
  );
};
