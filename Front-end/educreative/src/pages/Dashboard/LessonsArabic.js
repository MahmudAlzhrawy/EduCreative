import LessonsComponent from "../../Components/Dashboard/LessonsComponent"

export default function LessonsArabic()
{
    const Lessons = [
        {
            'name' : 'Lesson1',
            'description' : 'djfdfydfudfuvhjhchfhhdifdidsiisi'
        }
        ,
        {
            'name' : 'Lesson2',
            'description' : 'djfdfydfudfuvhjhchfhhdifdidsiisi'
        }
        ,
        {
            'name' : 'Lesson3',
            'description' : 'djfdfydfudfuvhjhchfhhdifdidsiisi'
        }
        ,
        {
            'name' : 'Lesson4',
            'description' : 'djfdfydfudfuvhjhchfhhdifdidsiisi'
        }
        ,
        {
            'name' : 'Lesson5',
            'description' : 'djfdfydfudfuvhjhchfhhdifdidsiisi'
        }
        ,
        {
            'name' : 'Lesson6',
            'description' : 'djfdfydfudfuvhjhchfhhdifdidsiisi'
        }
    ]
    return (
        <div className='w-full  flex justify-center items-center'>
           <LessonsComponent data={Lessons} />
        </div>
    )
}