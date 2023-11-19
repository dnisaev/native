import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveInCity, makeStudentActive} from "./03";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Dmitriy",
        age: 35,
        isActive: false,
        address: {
            streetTitle: "Leninsky",
            city: {
                title: "Moscow",
                countryTitle: "Russia"
            }
        },
        technologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            },
        ]
    }
})

test("new tech skill should be added to student", () => {
    expect(student.technologies.length).toBe(3);

    addSkill(student, "JS");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].title).toBe("JS");
    expect(student.technologies[3].id).toBeDefined();
})

test("student should be made active", () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student);

    expect(student.isActive).toBe(true)
})

test("does student live in city", () => {

    let result1 = doesStudentLiveInCity(student, "Minsk");
    let result2 = doesStudentLiveInCity(student, "Moscow");

    expect(result1).toBe(false);
    expect(result2).toBe(true);
})