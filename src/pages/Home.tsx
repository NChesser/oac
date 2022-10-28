/*
    About: Home OAC Page
*/

// Challenges
import challenges from  '../data/challenges.json'


const Home = () => {

    return (
        <div className='w-90 bg-black text-white'>
            <h1 className="text-3xl font-bold underline ">
                Hello world!
            </h1>
            <p className='text-slate-500'>My Name is Nick</p>
            {challenges.map(challenge => <p>{challenge.challenge}</p>)}
        </div>
    )
};


export default Home;