import {CogIcon} from "@heroicons/react/outline";
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
    Badge,
} from "@tremor/react";

export default function ListUser({users}) {
    return (
        <Card>
            <Title>Liste des utilisateurs</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Prénom</TableHeaderCell>
                        <TableHeaderCell>Nom</TableHeaderCell>
                        <TableHeaderCell>Email</TableHeaderCell>
                        <TableHeaderCell>Numéro de tél.</TableHeaderCell>
                        <TableHeaderCell>Rôle</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.firstName}</TableCell>
                            <TableCell>{item.lastName}</TableCell>
                            <TableCell>
                                <Text>{item.email}</Text>
                            </TableCell>
                            <TableCell>
                                <Text>{item.phoneNumber}</Text>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    color={item.role ===   "User" ? "emerald" : ''}
                                    icon={item.role ===   "Admin" ? CogIcon : ''}
                                >
                                    {item.role}
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}