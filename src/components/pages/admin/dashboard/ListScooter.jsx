import { StatusOnlineIcon } from "@heroicons/react/outline";
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
import {useState} from "react";

export default function ListScooter({scooters}) {
    const handleColorBattery = (batteryStatus) => {
        if (batteryStatus >= 50) {
            return "emerald";
        } else if (batteryStatus > 20) {
            return "amber";
        } else {
            return "rose";
        }
    };

    return (
        <Card>
            <Title>Liste des trottinettes</Title>
            <Table className="mt-5">
                <TableHead>
                    <TableRow>
                        <TableHeaderCell>Trottinette</TableHeaderCell>
                        <TableHeaderCell>Distance</TableHeaderCell>
                        <TableHeaderCell>Batterie</TableHeaderCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {scooters.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>
                                <Text>{item.totalDistance} km</Text>
                            </TableCell>
                            <TableCell>
                                <Badge
                                    color={handleColorBattery(item.batteryStatus)}
                                >
                                    {item.batteryStatus} %
                                </Badge>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>
    );
}