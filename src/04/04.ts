const ages = [18, 10, 100, 55, 34, 11, 9];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [100]; // > 90

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'REACT', price: 150}
]

// < 160
const chipPredicate = (course: CourseType) => {
    return course.price < 160;
}

const chipCourses = [
    {title: 'CSS', price: 110},
    {title: 'REACT', price: 150}
]