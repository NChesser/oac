/*
    About: Challenge Component
*/



const Challenge = ({ challenge }) => {

    return (
        <div>
            <p>
                {challenge?.challenge}
            </p>
        </div>
    )
};


export default Challenge;