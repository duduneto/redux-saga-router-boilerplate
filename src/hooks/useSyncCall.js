import { useDispatch } from 'react-redux';
import { syncCall } from '../redux/actions';

export default function useSync() {
    const dispatch = useDispatch();

    const call = (payload, path) => {
        dispatch(syncCall(payload, path))
    }

    return call;
}