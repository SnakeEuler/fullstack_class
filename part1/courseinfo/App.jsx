const App = () => {
    //I need to break the App down to consist of three components: Header, Content, and Total.

    //Header should contain the course name.
    //Content should contain three parts: Part 1, Part 2, and Part 3.
    //Each part should have a name and an exercise count.
    //Total should contain the total number of exercises.
    //The app should work as follows:
    //The user can enter a course name and number of exercises.
    //The app will display the course name and the total number of exercises in the course.
    //The app will also display the name and exercise count of each part.
    //The user can enter another course and number of exercises.
    //The app will update the course name and total number of exercises.
    //The app will also update the part name and exercise count.
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14


    const Header = ({course}) => {
        return (
            <h1>{course}</h1>
        )
    }

    const Content = ({part1, part2, part3}) => {
        const Part = ({part, exercises}) => {
            return (
                <p>{part} {exercises}</p>
            )
        }

        return (
            <div>
                <Part part={part1} exercises={exercises1}/>
                <Part part={part2} exercises={exercises2}/>
                <Part part={part3} exercises={exercises3}/>
            </div>
        )
    }

    const Total = ({exercises1, exercises2, exercises3}) => {
        return (
            <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
        )
    }


    return (
        <div>
            <Header course={course}/>
            <Content part1={part1} part2={part2} part3={part3}/>
            <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
        </div>
    )

}

export default App