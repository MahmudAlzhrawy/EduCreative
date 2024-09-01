export default function Style(props)
{
    return(
        <div className="text-red-600 pl-1 font-semibold">
           {props.children}
        </div>
    )
}