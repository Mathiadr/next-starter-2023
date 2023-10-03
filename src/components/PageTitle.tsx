export default function PageTitle({title}: {title: string}){
    return (
        <header>
            <h1 className = "text-4xl my-5">
                {title}
            </h1>
            <hr className="h-0.5 mx-auto my-4 bg-black border-0 rounded md:my-10 dark:bg-gray-700" />
        </header>
    );
}