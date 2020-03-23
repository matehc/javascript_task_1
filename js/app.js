let name = "Lucas Okafor";

const courses = ["HTML", "CSS", "Javascript", "NodeJs", "UI/UX"];


document.write(`<strong>Name: </strong>${name}<br><br>`);
document.write(`<strong>Courses: </strong>${courses}<br><br>`)


// The if statement evaluates to odd
if (courses.length % 2 !== 0) {
    // The loop below runs 200 times
    for (let i = 1; i <= 200; i++) {

        // upon each iteration, the if statment checks if number is odd
        if (i % 2 !== 0) {
            document.write(`${i}&nbsp; `);
        } 
        // if a number is divisible by ten, break the row
        if(i % 10 === 0) {
            document.write(`<br>`);
        }  
    }
}