
function SkeletonLoader({width, height}){
    return(
        <div className={`flex rounded m-5 shadow-md w-${width} animate-pulse dark:bg-white`}>
            <div className={`h-${height} dark:bg-gray-300`}>
            </div>
        </div>
    )
}

export default SkeletonLoader;
