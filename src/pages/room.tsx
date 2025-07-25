import { Navigate, useParams } from 'react-router-dom';

type RoomParams = {
	id: string;
};

export function Room() {
	const params = useParams<RoomParams>();

	if (!params.id) return <Navigate to="/" />;

	return <>Room, {params?.id}</>;
}
