import { useDispatch } from 'react-redux';
import { fetchPostsStart } from '../redux/actions';

export default function useApiCall() {
    const dispatch = useDispatch();

    const callApi = (fileName, functionName) => {
        dispatch(fetchPostsStart(fileName, functionName))
    }

    return callApi;
}