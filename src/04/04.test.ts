test("should take old men older then 90", ()=>{
    const ages = [18, 10, 100, 55, 34, 11, 9];

    // const predicate = (age: number) => {
    //     return age > 90;
    // }

    // const predicate = (age: number) => age > 90;

    const oldAges = ages.filter((age: number) => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("should take courses chipper 160", ()=>{
    const courses = [
        {title: 'CSS', price: 110},
        {title: 'JS', price: 200},
        {title: 'REACT', price: 150}
    ]

    // const chipPredicate = (course: CourseType) => {
    //     return course.price < 160;
    // }

    // const chipPredicate = (course: CourseType) => course.price < 160;

    const chipCourses = courses.filter(course => course.price < 160 );

    expect(chipCourses.length).toBe(2);
    expect(chipCourses[0].title).toBe('CSS');
    expect(chipCourses[1].title).toBe('REACT');
})

test("get only completed tasks", () => {

    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'solt', isDone: false},
        {id: 4, title: 'sugar', isDone: true}
    ]

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('milk');
    expect(completedTasks[0].id).toBe(2);
    expect(completedTasks[1].title).toBe('sugar');
    expect(completedTasks[1].id).toBe(4);
})

test("get only uncompleted tasks", () => {

    const tasks = [
        {id: 1, title: 'bread', isDone: false},
        {id: 2, title: 'milk', isDone: true},
        {id: 3, title: 'solt', isDone: false},
        {id: 4, title: 'sugar', isDone: true}
    ]

    const unCompletedTasks = tasks.filter(task => !task.isDone);

    expect(unCompletedTasks.length).toBe(2);
    expect(unCompletedTasks[0].title).toBe('bread');
    expect(unCompletedTasks[0].id).toBe(1);
    expect(unCompletedTasks[1].title).toBe('solt');
    expect(unCompletedTasks[1].id).toBe(3);
})