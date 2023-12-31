import {ManType} from "./Destructuring";

let props: ManType;

beforeEach(() => {
    props = {
        name: "Ivan",
        age: 32,
        lessons: [{title: 1}, {title: 2}, {title: 3}],
        address: {
            street: {
                title: "String"
            }
        }
    }
})

test.skip("", () => {

    // const age = props.age;
    // const lessons = props.lessons;
    const {age, lessons} = props;
    const {title} = props.address.street;

    expect(age).toBe(32);
    expect(lessons.length).toBe(2);
    expect(title).toBe("String");
})

test("", () => {
    // const l1 = props.lessons[0];
    // const l2 = props.lessons[1];

    const [ls1, ...restLessons] = props.lessons;

    expect(ls1.title).toBe(1);
    expect(restLessons[1]).toStrictEqual({title: 3});
})