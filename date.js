/* This program has been created to test my knowledge of early level
Javascript, as well as version control through git and navigation in
the terminal. I also hope, in some small cases, it may solve a tricky
problem now and again. Namely, what the heck to do on a date. While
very simple in execution, apparently we all need to start somewhere.*/

// First array stores all food places. Would objects give future customisation?
const food = ['Italian', 'Chinese', 'Mexican', 'Indian', 'Thai', 'Diner', 'Homemade', 'Buffet', 'Seafood',
            'Bistro', 'Bar & Grill', 'Vegan', 'Spanish', 'French', 'Tex Mex', 'Junk Food', 'Japanese',
            'Street Food'];

// Second array stores all activities.
const activity = ['Hit up a bar', 'Drive through the Countryside', 'Go to the Movies', 'Hill Climbing',
                'Axe Throwing', 'Go-Karting', 'Go to a Sports Event', 'Go to see a band', 'Go to the Theatre',
                'Go to an Amusement Park', 'Have a Netflix Night', 'Go to an Escape Room', 'Go see a Poetry Reading',
                'Go to a Museum', 'Go to an Art Gallery', 'Visit an Historical Building', 'Go to the Beach',
                'Go Swimming'];

// Third array stores all 'night cap' post activity activities.
const nightcap = ['Go for a Walk', 'Late Night Whisky', 'Take the Scenic Route Home', 'Go for Coffee',
                'Walk Them Home', 'Sing at Karaoke', 'Pick up some Flowers', 'Go for Ice Cream', 'Romantic Walk in the Park',
                'Stargazing', 'Grab a Couple of Beers', 'Listen to Music at a Piano Bar'];

// Generates a random number to use as an index in an array.
const randomIndex = arr => {
    let index = Math.floor(Math.random() * arr.length);
    console.log('Index =' + index);
    return arr[index];
}

// Plugs a random index into each array and prints it to the console. Thus generating a date idea.
const generate = () => {
    console.log('Your date idea is : ' + randomIndex(food) + '; then as an activity : ' + randomIndex(activity) + '; and finally, finish with : ' + randomIndex(nightcap));
}

generate();