import {TabPanel} from "@tremor/react";
import ListUser from "./ListUser.jsx";
import ListScooter from "./ListScooter.jsx";
import ListRental from "./ListRental.jsx";

export default function Section({item, users, scooters, rentals}) {


    return (
        <TabPanel>
            <div className="mt-6">
                {item ===   "users" && <ListUser users={users}/>}
                {item ===   "scooters" && <ListScooter scooters={scooters}/>}
                {item ===   "rentals" && <ListRental rentals={rentals} users={users} scooters={scooters}/>}
            </div>
        </TabPanel>
    );
}