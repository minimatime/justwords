import React from "react";
import './App.css';
import Typewriter from 'typewriter-effect';

function Poem1() {
    const firstpoem = `i wake up one day and realize i do not have dreams.

my goals are not mine, my dreams are borrowed and my aspirations implanted in my mind by a world that is not mine.

it’s unsettling. 

it’s wasteful. 

it’s unfair. 

how dare destiny weave this path for me? how unfair for me to feel lost in a world where everyone belongs? how dare your dreams be yours? what did you do that made you special? what did i do to miss out?

you’re mocking me. 

you belong. you know. my memory is fleeting. 

i do not belong here. i do not belong there. i do not belong.

there is no shelter that comforts me, no armor that fits and nothing that is mine. 

my tongue burns. she fits strangely in the gap of my face. she does not belong. she repeats the language of the oppressor. her tongue is the oppressor.

there is no pride. what is love. what is pride. what is the difference.

when did i become me. when did i become singular. what is the point. why am i a point. 

i do not want to be alone. i want to belong. 

i do not know where. i do not know with whom.

i do not know.`;

    return (
        <div>
            <p>001</p>
            <Typewriter
                onInit={(typewriter) => {
                    typewriter.typeString(firstpoem)
                    .callFunction(() => {
                        console.log('debug sanity check');
                    })
                    .pauseFor(6000)
                    .start();
                }}
            />
        </div>
    );
}

export default Poem1;
