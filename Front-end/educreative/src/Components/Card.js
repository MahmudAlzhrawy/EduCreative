export default function Card(props)
{
    return(
        <div className="w-[210px] h-[150px]  shadow-2xl rounded-[10px] bg-[#FFFFFF] flex justify-center items-center">
            <img className="w-[74px] h-[74px]" src={props.url} alt=" "/>
        </div>
    )
}