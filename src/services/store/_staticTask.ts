
const taskColumn1 = [
    {
        id: `item-0-1`,
        title: "مورد طولانی مورد طولانی مورد طولانی مورد طولانی مورد طولانی مورد طولانی",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        dateCreated: new Date(),
        hasDeadline: false,
        deadline: undefined,
    },
    {
        id: `item-0-2`,
        title: "string2",
        description: "string",
        dateCreated: new Date(),
        hasDeadline: false,
        deadline: undefined,
    },
]

const taskColumn2 = [
    {
        id: `item-1-1`,
        title: "string3",
        description: "string",
        dateCreated: new Date(),
        hasDeadline: false,
        deadline: undefined,
    }
]

const columns = [
    {
        id: 1,
        title: "تسک های ورودی"
    },
    {
        id: 2,
        title: "در حال برنامه ریزی"
    },
    {
        id: 3,
        title: "در حال انجام"
    },
    {
        id: 4,
        title: "تمام شده"
    },
]

const tasks = [taskColumn1, taskColumn2, [], []]

export { tasks, columns }