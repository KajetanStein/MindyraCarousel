export const Loading = ({isLoading, children}) => {

    return (
        isLoading ?
            <div className="loading">
                <h1>LOADING...</h1>
            </div>
        :
            {...children}
    )
}