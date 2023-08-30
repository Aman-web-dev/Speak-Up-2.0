

export default function Categories({src, name}) {
    const flagData = [
        
        {
        id: 1,
        name: 'Korean',
        imgLink: "https://img.freepik.com/free-vector/illustration-south-korea-flag_53876-27132.jpg?w=1380&t=st=1693387562~exp=1693388162~hmac=accfa9c9d271785bf55ba903d201577835551434f1cb6c7d702649d8179008d9"
    }, 
    {
        id: 2,
        name: 'Japanese',
        imgLink: "https://img.freepik.com/free-vector/illustration-japan-flag_53876-27128.jpg?w=1380&t=st=1693387601~exp=1693388201~hmac=754b7d38ba7850f10d22ef8e582f244c4c4c265adfe61521dbeb59df44017ecf"
    },  
    {
        id: 3,
        name: 'America',
        imgLink: "https://img.freepik.com/free-vector/illustration-usa-flag_53876-18165.jpg?w=1380&t=st=1693387651~exp=1693388251~hmac=8e87d54f45a100c04351fa8b7039cfeb832da960e22006ac1586029127e15304"
    },  
    {   id:4,
        name: 'France',
        imgLink: "https://img.freepik.com/free-vector/illustration-france-flag_53876-27099.jpg?w=1380&t=st=1693387889~exp=1693388489~hmac=c2c4e206a6549bd9ae21bfc33379d252e9d54735baf6e5ebad4507485a6c41f5"
    },   
    {   id:5,
        name: 'Chinese',
        imgLink: "https://img.freepik.com/free-vector/illustration-china-flag_53876-27015.jpg?w=1380&t=st=1693387758~exp=1693388358~hmac=f2aa92e5893ed16bce04fb8f346d83f550fcfbdc84b0cc5c8890044d0abe095a"
    },   
    {   id:6,
        name: 'Portugese',
        imgLink: "https://img.freepik.com/free-vector/illustration-portugal-flag_53876-18170.jpg?w=1380&t=st=1693387853~exp=1693388453~hmac=80ef2c670d9c6b9231a5d8f6c8dd66494b04183e76e71575cd5a09d74f1d6520"
    }, 

]
  return (
    <section className="py-12 px-8 overflow-x-auto" >
    <h2 className="text-3xl font-bold mb-4 text-black">Top Languages</h2>
    <div className="card-container rounded-md">
        {flagData.map((data) => (
            <div className="card card-compact min-w-[8rem] w-40 bg-base-100 shadow-md rounded-lg hover:shadow-2xl" key={data.id}>
                <figure className='pt-8 my-auto'><img src={data.imgLink} alt={data.name} className='w-full' /></figure>
                <div className="card-body flex items-center justify-between">
                    <h2 className="card-title m-auto">{data.name}</h2>
                </div>
            </div>
        ))}
    </div>
</section>



  )
}