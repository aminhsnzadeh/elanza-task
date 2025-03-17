let deadlineTest = new Date();
deadlineTest.setHours(deadlineTest.getHours() + 1);

const taskColumn1 = [
    {
        id: `item-0-${new Date().toDateString()}`,
        title: "مورد طولانی مورد طولانی مورد طولانی مورد طولانی مورد طولانی مورد طولانی",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        dateCreated: new Date(),
        hasDeadline: true,
        deadline: deadlineTest,
    },
    {
        id: `item-1${new Date().toDateString()}`,
        title: "string2",
        description: "string",
        dateCreated: new Date(),
        hasDeadline: false,
        deadline: undefined,
    },
]

const taskColumn2 = [
    {
        id: `item-2-${new Date().toDateString()}`,
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