/*
    About: Home OAC Page
*/

// Challenges
import challenges from '../data/challenges.json'

// Helpers
import { sample } from 'lodash';
import Challenge from '../components/Challenge';


const Home = () => {

    const challenge = sample(challenges);

    return (
        <div className='w-90 bg-black text-white'>
            <h1 className="text-3xl font-bold underline ">
                Challenge Yourself
            </h1>
            <p className='text-slate-500'>My Name is Nick</p>

            <Challenge challenge={challenge} />
        </div>
    )
};


export default Home;