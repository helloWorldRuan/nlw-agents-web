import { RoomsList } from '@/components/rooms-list';

export function CreateRoom() {
	return (
		<div className="min-h-screen p-4">
			<div className="mx-auto max-w-4xl">
				<div className="grid grid-cols-2 items-start gap-8">
					<div />

					<RoomsList />
				</div>
			</div>
		</div>
	);
}
