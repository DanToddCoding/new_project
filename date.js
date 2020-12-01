/* This program has been created to test my knowledge of early level
Javascript, as well as version control through git and navigation in
the terminal. I also hope, in some small cases, it may solve a tricky
problem now and again. Namely, what the heck to do on a date. While
very simple in execution, apparently we all need to start somewhere.*/

// First array stores all food places. Would objects give future customisation?
const food = [0, 1, 2, 3];

// Second array stores all activities.
const activity = [0, 1, 2, 3];

// Third array stores all 'night cap' post activity activities.
const nightcap = [0, 1, 2, 3];

// Generates a random number to use as an index in an array.
const randomIndex = arr => {
    let index = Math.floor(Math.random() * arr.length);
    console.log('Index =' + index);
    return arr[index];
}

// Plugs a random index into each array and prints it to the console. Thus generating a date idea.
const generate = () => {
    console.log('Your date idea is : ' + randomIndex(food) + '. Then as an activity : ' + randomIndex(activity) + '. And finally, finish with : ' + randomIndex(nightcap));
}

generate();