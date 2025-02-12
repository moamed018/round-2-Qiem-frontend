export default function ButtonAction({
    children,
    clickHandler,
}: {
    children?: React.ReactNode;
    clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
    return (
        <button
            className=" block py-6 lg:px-16 px-8 font-bold -text-xl grow bg-[#d1e8e244] border border-[#D1E8E2] shadow-md rounded-lg transition-all duration-300 ease-in-out hover:bg-[#d1e8e2aa] hover:scale-95 cursor-pointer"
            onClick={clickHandler}
        >
            {children}
        </button>
    );
}
