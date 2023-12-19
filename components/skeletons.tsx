import { Skeleton } from "antd";

export function CategoriesSkelton() {
    return (
        <div className="flex flex-col justify-center items-center py-3 px-4">
            <Skeleton paragraph={{ rows: 1, width: '100%' }} title={false} active />
            <Skeleton paragraph={{ rows: 1, width: '100%' }} title={false} active />
            <Skeleton paragraph={{ rows: 1, width: '100%' }} title={false} active />
            <Skeleton paragraph={{ rows: 1, width: '100%' }} title={false} active />
            <Skeleton paragraph={{ rows: 1, width: '100%' }} title={false} active />
        </div>
    )
}

export function ProductsCardSkeleton() {
    return (
        <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
        </>
    )
}

export function CardSkeleton() {

    return (
        <div
            className="relative min-w-[180px] max-w-[200px] h-[285px] animate-pulse block bg-white text-gray-900 shadow-md rounded-2xl p-2 cursor-pointer hover:-translate-y-1 transition-all select-none">
            <div className="rounded-md relative overflow-hidden">
                <div className="flex items-center justify-center h-48 mb-3 bg-gray-300 rounded dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    </svg>
                </div>
            </div>
            <div className="my-4 pl-2 mb-2 flex flex-col justify-between items-stretch">
                <div className='flex justify-center'>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-4/5 mb-0"></div>
                </div>
                <div className='flex justify-center items-center pt-2'>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-11/12"></div>
                </div>
            </div>
            <div className="flex justify-center">
                <svg id="changeColor" fill="#DC7633" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={36} zoomAndPan="magnify" viewBox="0 0 375 374.9999" height={36} preserveAspectRatio="xMidYMid meet" version={'1.0'} style={{ transform: 'none' }}>
                    <defs>
                        <path id="pathAttribute" d="M 7.09375 7.09375 L 367.84375 7.09375 L 367.84375 367.84375 L 7.09375 367.84375 Z M 7.09375 7.09375 " fill="#737373" filter="url(#bgShadow)">
                            <filter id="bgShadow"><feDropShadow id="bgShadowValue" stdDeviation=".5" dx={0} dy={0} floodColor="rgb(229 231 235)" /></filter>
                        </path>
                    </defs>
                    <g>
                        <path id="pathAttribute" d="M 187.46875 7.09375 C 87.851562 7.09375 7.09375 87.851562 7.09375 187.46875 C 7.09375 287.085938 87.851562 367.84375 187.46875 367.84375 C 287.085938 367.84375 367.84375 287.085938 367.84375 187.46875 C 367.84375 87.851562 287.085938 7.09375 187.46875 7.09375 " fillOpacity={1} fillRule="nonzero" fill="rgb(229 231 235)" filter="url(#bgShadow)" />
                    </g>
                    <g id="inner-icon" transform="translate(85, 75)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="199.8" height="199.8" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16" id="IconChangeColor">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" id="mainIconPathAttribute" fill="#ffffff" strokeWidth={0} stroke="#ff0000" />
                        </svg>
                    </g>
                    <animateTransform xlinkHref="#changeColor" attributeType="xml" attributeName="transform" type="rotate" from={0} to={359} dur="2s" repeatCount="indefinite" />
                </svg>
            </div>
        </div>
    )
}