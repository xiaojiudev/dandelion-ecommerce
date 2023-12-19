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