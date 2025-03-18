//sample deadline generated for static data
let deadlineTest = new Date();
deadlineTest.setHours(deadlineTest.getHours() + 23);
//A bit wierd when you comparison it with now date but its for test
let overdueTest = new Date();
overdueTest.setHours(overdueTest.getHours() - 23);

const taskColumn1 = [
    {
        id: `item-0-${new Date().toDateString()}`,
        title: "بررسی خروجی پروژه ها",
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است",
        dateCreated: new Date(),
        hasDeadline: true,
        deadline: deadlineTest,
    },
    {
        id: `item-1${new Date().toDateString()}`,
        title: "اصلاحات بنر های تبلیغاتی",
        description: "اصلاح بنر هادر صورت داشتن زمان مورد نظر",
        dateCreated: new Date(),
        hasDeadline: false,
        deadline: undefined,
    },
]

const taskColumn2 = [
    {
        id: `item-2-${new Date().toDateString()}`,
        title: "تبدیل سایت به PWA",
        description: "صنعت چاپ و با استفاده از طراحان گرافیک است",
        dateCreated: new Date(),
        hasDeadline: true,
        deadline: overdueTest,
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