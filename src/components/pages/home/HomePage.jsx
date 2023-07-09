import {Card, Flex, Metric, ProgressBar, Text} from "@tremor/react";
import {useNavigate} from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div>
            HOME
            <button onClick={() => navigate('/dashboard')}>dashboard</button>
            <Card className="max-w-xs mx-auto">
                <Text>Sales</Text>
                <Metric>$ 34,743</Metric>
                <Flex className="mt-4">
                    <Text>32% of annual target</Text>
                    <Text>$ 225,000</Text>
                </Flex>
                <ProgressBar value={32} className="mt-2" />
            </Card>
        </div>
    );
}