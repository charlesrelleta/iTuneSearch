import useAxios from 'axios-hooks'

export const useItunes = (searchText:string) => {
    const [{ data, loading, error }, refetch] = useAxios(
        `https://itunes.apple.com/search?term=${searchText}`
      ) 
      return { data, loading, error, refetch};
}