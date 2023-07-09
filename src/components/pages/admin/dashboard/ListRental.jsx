import {CurrencyEuroIcon} from "@heroicons/react/outline";
import {
    Badge,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeaderCell,
    TableRow,
    Text,
    Title,
} from "@tremor/react";


export default function ListRental({rentals, users, scooters}) {
    const calculateRentalDuration = (start, end) => {
        const startTime = new Date(start);
        const endTime = new Date(end);
        const durationInMillis = endTime - startTime;
        return Math.floor(durationInMillis / (1000 * 60));
    };

    const getUserById = (users, userId) => {
        return users.find(user => user.id === userId);
    };

    const getScooterById = (scooters, scooterId) => {
        return scooters.find(scooter => scooter.id === scooterId);
    };

    return (
        <Card>
            <Title>Liste des locations</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Utilisateur</TableHeaderCell>
                        <TableHeaderCell>Trottinette</TableHeaderCell>
                        <TableHeaderCell>Durée</TableHeaderCell>
                        <TableHeaderCell>Distance</TableHeaderCell>
                        <TableHeaderCell>Prix</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rentals.map((item, index) => {
                        const user = getUserById(users, item.userId);
                        const scooter = getScooterById(scooters, item.scooterId);

                        return (
                            <TableRow key={index}>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{scooter.name}</TableCell>
                                <TableCell>
                                    <Text>
                                        {calculateRentalDuration(item.rentalStartTime, item.rentalEndTime)} minutes
                                    </Text>
                                </TableCell>
                                <TableCell>
                                    <Text>
                                        {item.totalDistance}
                                    </Text>
                                </TableCell>
                                <TableCell>
                                    <Badge color="emerald" icon={CurrencyEuroIcon}>
                                        {item.totalAmount}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Card>
    );
}