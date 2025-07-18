import { useRooms } from '@/http/useRooms';
import { dayjs } from '@/lib/dayjs';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';

export function RoomsList() {
	const { data, isLoading } = useRooms();

	return (
		<Card>
			<CardHeader>
				<CardTitle>Salas recentes</CardTitle>
				<CardDescription>
					Acesso rápido as salas criadas recentemente
				</CardDescription>
			</CardHeader>

			<CardContent className="flex flex-col gap-3">
				{isLoading && (
					<p className="text-muted-foreground text-sm animate-pulse">
						Carregando salas...
					</p>
				)}

				{data?.map((room) => {
					return (
						<Link
							to={`/room/${room.id}`}
							key={room.id}
							className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent"
						>
							<div className="flex flex-1 flex-col gap-1">
								<h3 className="font-medium">{room.name}</h3>

								<div className="flex items-center gap-2">
									<Badge className="text-sm" variant="secondary">
										{dayjs(room.createdAt).toNow()}
									</Badge>

									<Badge className="text-sm" variant="secondary">
										{room.questionsCount}
										{room.questionsCount > 1 ? ' perguntas' : ' pergunta'}
									</Badge>
								</div>
							</div>

							<span className="flex items-center gap-1 text-sm">
								Entrar
								<ArrowRight className="size-3" />
							</span>
						</Link>
					);
				})}
			</CardContent>
		</Card>
	);
}
