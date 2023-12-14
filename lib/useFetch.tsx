import useSWR from "swr"

type FetcherFn = (...args: [RequestInfo, RequestInit?]) => Promise<any>;

const fetcher:FetcherFn  = (...args) => fetch(...args).then(res => res.json())

export default function useFetch(url: string) {
    const { data, error, isLoading, isValidating, mutate } = useSWR(`${process.env.BACKEND_PUBLIC_API_URI}/${url}`, fetcher)
    return {
        data,
        isLoading,
        isError: error
    }
}