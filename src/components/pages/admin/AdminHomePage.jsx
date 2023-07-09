import {
    Card,
    Grid,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Text,
    Title
} from "@tremor/react";
import CardComponent from "./dashboard/CardComponent.jsx";
import Section from "./dashboard/Section.jsx";

export default function AdminHomePage() {

    const users = [
        {
            id: 1,
            firstName: "Allan",
            lastName: "Leblond",
            email: "allan@gmail.com",
            phoneNumber: "",
            role: "Admin"
        },
        {
            id: 2,
            firstName: "Jérémy",
            lastName: "Baudrin",
            email: "jerem@gmail.com",
            phoneNumber: "",
            role: "User"
        },
        {
            id: 3,
            firstName: "Maxime",
            lastName: "K-B",
            email: "maxime@gmail.com",
            phoneNumber: "",
            role: "User"
        }
    ];

    const scooters = [
        {
            id: 1,
            name: "Trottinette 1",
            batteryStatus: 57,
            totalDistance: 20.4,
        },
        {
            id: 2,
            name: "Trottinette 2",
            batteryStatus: 32,
            totalDistance: 2.0,
        },
        {
            id: 3,
            name: "Trottinette 3",
            batteryStatus: 99,
            totalDistance: 4.0,
        },
        {
            id: 4,
            name: "Trottinette 4",
            batteryStatus: 12,
            totalDistance: 34.8,
        },
    ];

    const rentals = [
        {
            userId: 1,
            scooterId: 1,
            rentalStartTime: "2023-06-25 09:00:00",
            rentalEndTime: "2023-06-25 10:00:00",
            totalDistance: 3.5,
            totalAmount: 5.0
        },
        {
            userId: 3,
            scooterId: 2,
            rentalStartTime: "2023-06-25 09:00:00",
            rentalEndTime: "2023-06-25 10:00:00",
            totalDistance: 3.5,
            totalAmount: 5.0
        },
        {
            userId: 1,
            scooterId: 2,
            rentalStartTime: "2023-06-25 09:00:00",
            rentalEndTime: "2023-06-25 10:00:00",
            totalDistance: 3.5,
            totalAmount: 5.0
        },
        {
            userId: 2,
            scooterId: 1,
            rentalStartTime: "2023-06-25 09:00:00",
            rentalEndTime: "2023-06-25 10:00:00",
            totalDistance: 3.5,
            totalAmount: 5.0
        },
        {
            userId: 2,
            scooterId: 2,
            rentalStartTime: "2023-06-25 09:00:00",
            rentalEndTime: "2023-06-25 10:00:00",
            totalDistance: 3.5,
            totalAmount: 5.0
        },
    ];

    return (
        <main className="px-0 py-12">
            <Title>Lume Board</Title>
            <Text>Bienvenue sur votre tableau de bord !</Text>

            <TabGroup className="mt-6">
                <TabList>
                    <Tab>Principal</Tab>
                    <Tab>Utilisateurs</Tab>
                    <Tab>Trottinettes</Tab>
                    <Tab>Locations</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Grid numItemsLg={3} className="mt-6 gap-6">
                            <CardComponent title={"Utilisateurs"} item={users}/>
                            <CardComponent title={"Trottinettes"} item={scooters}/>
                            <CardComponent title={"Locations"} item={rentals}/>
                        </Grid>
                        <div className="mt-6">
                            <Card>
                                <div className="h-80"/>
                                <Text>En cours de développement</Text>
                            </Card>
                        </div>
                    </TabPanel>
                    <Section item={"users"} users={users}/>
                    <Section item={"scooters"} scooters={scooters}/>
                    <Section item={"rentals"} rentals={rentals} users={users} scooters={scooters}/>
                </TabPanels>
            </TabGroup>
        </main>
    );
}